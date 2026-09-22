import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));

  // API health route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Check if default photo exists on server
  app.get('/api/photo-status', (req, res) => {
    const photoPath = path.join(process.cwd(), 'public', 'myimage.jpeg');
    res.json({ exists: fs.existsSync(photoPath) });
  });

  // Save photo permanently to public directory
  app.post('/api/save-photo', (req, res) => {
    try {
      const { image } = req.body;
      if (!image || typeof image !== 'string') {
        return res.status(400).json({ error: 'No image data provided' });
      }

      const base64Data = image.includes(';base64,')
        ? image.split(';base64,').pop()
        : image;

      if (!base64Data) {
        return res.status(400).json({ error: 'Invalid image format' });
      }

      const buffer = Buffer.from(base64Data, 'base64');
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const filePath = path.join(publicDir, 'myimage.jpeg');
      fs.writeFileSync(filePath, buffer);

      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'myimage.jpeg'), buffer);
      }

      console.log('Saved default photo to public/myimage.jpeg');
      res.json({ success: true, url: '/myimage.jpeg' });
    } catch (err) {
      console.error('Failed to save photo:', err);
      res.status(500).json({ error: 'Failed to save photo' });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
