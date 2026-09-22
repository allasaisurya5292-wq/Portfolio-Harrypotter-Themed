/**
 * Web Audio API procedural Harry Potter sound synthesizers
 * Provides authentic Celesta chime for Hedwig's Theme and spellcasting SFX
 */

class WizardAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;
  private isPlayingTheme: boolean = false;
  private onThemeStateChange: ((isPlaying: boolean) => void) | null = null;
  private audioElement: HTMLAudioElement | null = null;

  constructor() {
    // AudioContext and HTMLAudioElement initialized lazily and on interaction
  }

  private getAudioElement(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioElement) {
      this.audioElement = new Audio('/audio/hedwigs_theme.mp3');
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;
      this.audioElement.muted = this.isMuted;
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('play', () => {
        this.isPlayingTheme = true;
        if (this.onThemeStateChange) this.onThemeStateChange(true);
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlayingTheme = false;
        if (this.onThemeStateChange) this.onThemeStateChange(false);
      });

      this.audioElement.addEventListener('ended', () => {
        this.isPlayingTheme = false;
        if (this.onThemeStateChange) this.onThemeStateChange(false);
      });
    }
    return this.audioElement;
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.audioElement) {
      this.audioElement.muted = muted;
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public setOnThemeStateChange(callback: (isPlaying: boolean) => void) {
    this.onThemeStateChange = callback;
  }

  public getIsPlayingTheme(): boolean {
    return this.isPlayingTheme;
  }

  /**
   * Synthesize an authentic Celesta tone (John Williams' iconic Harry Potter Hedwig's Theme)
   * A real celesta consists of steel plates struck by felt-covered hammers over wooden resonators.
   * This multi-harmonic synthesis models:
   * 1. Fundamental warm sine wave (bell core body)
   * 2. First inharmonic metal plate partial (approx 2.756x)
   * 3. Sparkling high metallic overtone (5.404x)
   * 4. Resonant acoustic wooden chamber octave (2.0x)
   * 5. Felt hammer attack transient (gentle wooden strike)
   */
  public playCelestaNote(freq: number, duration: number = 0.8, gainMult: number = 1.0) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume * gainMult * 0.38, now);

    // 1. Fundamental body oscillator (warm pure sine)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // 2. Wooden resonator octave (warm body resonance)
    const oscOctave = ctx.createOscillator();
    oscOctave.type = 'sine';
    oscOctave.frequency.setValueAtTime(freq * 2.0, now);

    // 3. Celesta steel bar inharmonic chime overtone (2.756x fundamental)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.756, now);

    // 4. Glockenspiel / Celesta high sparkle overtone (5.404x)
    const osc3 = ctx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(freq * 5.404, now);

    const gain1 = ctx.createGain();
    const gainOctave = ctx.createGain();
    const gain2 = ctx.createGain();
    const gain3 = ctx.createGain();

    // Celesta hammer strike envelope: felt strike attack (4ms), exponential bell ring-down
    gain1.gain.setValueAtTime(0.0001, now);
    gain1.gain.linearRampToValueAtTime(1.0, now + 0.006);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.15);

    gainOctave.gain.setValueAtTime(0.0001, now);
    gainOctave.gain.linearRampToValueAtTime(0.28, now + 0.006);
    gainOctave.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.85);

    gain2.gain.setValueAtTime(0.0001, now);
    gain2.gain.linearRampToValueAtTime(0.42, now + 0.005);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.65);

    gain3.gain.setValueAtTime(0.0001, now);
    gain3.gain.linearRampToValueAtTime(0.18, now + 0.004);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.45);

    osc1.connect(gain1);
    oscOctave.connect(gainOctave);
    osc2.connect(gain2);
    osc3.connect(gain3);

    gain1.connect(masterGain);
    gainOctave.connect(masterGain);
    gain2.connect(masterGain);
    gain3.connect(masterGain);

    masterGain.connect(ctx.destination);

    osc1.start(now);
    oscOctave.start(now);
    osc2.start(now);
    osc3.start(now);

    const stopTime = now + duration + 0.3;
    osc1.stop(stopTime);
    oscOctave.stop(stopTime);
    osc2.stop(stopTime);
    osc3.stop(stopTime);
  }

  /**
   * Play Hedwig's Theme (Original uploaded audio soundtrack file)
   */
  public async playHedwigTheme(): Promise<void> {
    const audio = this.getAudioElement();
    if (!audio) return;

    audio.volume = this.volume;
    audio.muted = this.isMuted;
    audio.loop = true;

    try {
      await audio.play();
      this.isPlayingTheme = true;
      if (this.onThemeStateChange) this.onThemeStateChange(true);
    } catch (err) {
      // Browser autoplay policy prevented instant unmuted play without user gesture
      // Will play on user interaction
      console.warn('Audio playback waiting for user interaction:', err);
    }
  }

  public stopHedwigTheme() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlayingTheme = false;
    if (this.onThemeStateChange) this.onThemeStateChange(false);
  }

  public toggleHedwigTheme() {
    if (this.isPlayingTheme) {
      this.stopHedwigTheme();
    } else {
      this.playHedwigTheme();
    }
  }

  // --- SPELL SOUND EFFECTS ---

  /**
   * Lumos: Wand ignition chime, gentle rising crystalline resonance
   */
  public playLumos() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';

    // Rising sparkle sweep
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(1760.0, now + 0.6);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.25 * this.volume, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.3);

    // Sparkle harmonics
    [1046.5, 1318.5, 1567.98, 2093].forEach((f, idx) => {
      setTimeout(() => {
        this.playCelestaNote(f, 0.4, 0.5);
      }, idx * 80);
    });
  }

  /**
   * Alohomora: Magical unlock click and golden chime ringing open
   */
  public playAlohomora() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Mechanical lock tumblers clicking (noise pulse)
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.frequency.setValueAtTime(300 + i * 150, ctx.currentTime);
        clickGain.gain.setValueAtTime(0.2 * this.volume, ctx.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start(ctx.currentTime);
        clickOsc.stop(ctx.currentTime + 0.06);
      }, i * 65);
    }

    // Grand unlocking resonant chime
    setTimeout(() => {
      this.playCelestaNote(523.25, 0.6, 0.8); // C5
      setTimeout(() => this.playCelestaNote(659.25, 0.7, 0.9), 120); // E5
      setTimeout(() => this.playCelestaNote(783.99, 0.9, 1.0), 240); // G5
      setTimeout(() => this.playCelestaNote(1046.50, 1.4, 1.2), 360); // C6
    }, 200);
  }

  /**
   * Expecto Patronum: Majestic silver chord swell and ethereal whoosh
   */
  public playExpectoPatronum() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Ethereal swell
    [220, 277.18, 329.63, 440, 554.37, 659.25].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12 * this.volume, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 2.6);
    });

    // Silver stardust cascade
    [880, 1108.73, 1318.5, 1760, 2217.46].forEach((f, idx) => {
      setTimeout(() => {
        this.playCelestaNote(f, 0.8, 0.7);
      }, 400 + idx * 100);
    });
  }

  /**
   * Wingardium Leviosa: Swish and flick with floating ascending glissando
   */
  public playWingardiumLeviosa() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Wand swish
    const swishOsc = ctx.createOscillator();
    const swishGain = ctx.createGain();
    swishOsc.type = 'sine';
    swishOsc.frequency.setValueAtTime(300, now);
    swishOsc.frequency.exponentialRampToValueAtTime(900, now + 0.25);
    swishGain.gain.setValueAtTime(0.01, now);
    swishGain.gain.linearRampToValueAtTime(0.2 * this.volume, now + 0.1);
    swishGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    swishOsc.connect(swishGain);
    swishGain.connect(ctx.destination);
    swishOsc.start(now);
    swishOsc.stop(now + 0.36);

    // Floating upward melody (swish and flick)
    setTimeout(() => {
      [440, 554.37, 659.25, 880, 1108.73].forEach((f, idx) => {
        setTimeout(() => this.playCelestaNote(f, 0.5, 0.7), idx * 90);
      });
    }, 280);
  }

  /**
   * Accio: Sonic pull whoosh + magnetic snap
   */
  public playAccio() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const pullOsc = ctx.createOscillator();
    const pullGain = ctx.createGain();
    pullOsc.type = 'triangle';
    pullOsc.frequency.setValueAtTime(150, now);
    pullOsc.frequency.exponentialRampToValueAtTime(800, now + 0.3);

    pullGain.gain.setValueAtTime(0.01, now);
    pullGain.gain.linearRampToValueAtTime(0.25 * this.volume, now + 0.2);
    pullGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    pullOsc.connect(pullGain);
    pullGain.connect(ctx.destination);
    pullOsc.start(now);
    pullOsc.stop(now + 0.5);

    setTimeout(() => {
      this.playCelestaNote(783.99, 0.7, 0.9);
      setTimeout(() => this.playCelestaNote(1174.66, 0.9, 1.1), 80);
    }, 280);
  }

  /**
   * Expelliarmus: Red energy bolt crack and resonant shockwave
   */
  public playExpelliarmus() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Shockwave zap
    const zapOsc = ctx.createOscillator();
    const zapGain = ctx.createGain();
    zapOsc.type = 'sawtooth';
    zapOsc.frequency.setValueAtTime(900, now);
    zapOsc.frequency.exponentialRampToValueAtTime(110, now + 0.3);

    zapGain.gain.setValueAtTime(0.3 * this.volume, now);
    zapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    zapOsc.connect(zapGain);
    zapGain.connect(ctx.destination);
    zapOsc.start(now);
    zapOsc.stop(now + 0.36);

    // Wand discharge bell
    setTimeout(() => {
      this.playCelestaNote(440, 0.5, 0.8);
      this.playCelestaNote(880, 0.6, 0.9);
    }, 120);
  }

  /**
   * Hogwarts Express steam train whistle
   */
  public playHogwartsExpress() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Dual-tone steam whistle (F4 + A4)
    [349.23, 440.00].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18 * this.volume, now + 0.1);
      gain.gain.setValueAtTime(0.18 * this.volume, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.75);
    });

    // Second whistle blast
    setTimeout(() => {
      const laterNow = ctx.currentTime;
      [349.23, 440.00].forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, laterNow);

        gain.gain.setValueAtTime(0.01, laterNow);
        gain.gain.linearRampToValueAtTime(0.2 * this.volume, laterNow + 0.1);
        gain.gain.setValueAtTime(0.2 * this.volume, laterNow + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, laterNow + 1.0);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(laterNow);
        osc.stop(laterNow + 1.05);
      });
    }, 750);
  }

  /**
   * Sorting Hat Ceremony fanfare
   */
  public playSortingFanfare() {
    if (this.isMuted) return;
    const fanfareNotes: [number, number][] = [
      [392.00, 180], // G4
      [523.25, 180], // C5
      [659.25, 220], // E5
      [783.99, 450], // G5
      [659.25, 200], // E5
      [783.99, 600], // G5
    ];
    let accum = 0;
    fanfareNotes.forEach(([f, duration]) => {
      setTimeout(() => {
        this.playCelestaNote(f, duration / 1000, 1.0);
      }, accum);
      accum += duration;
    });
  }

  /**
   * Wand tap / UI hover sparkle
   */
  public playWandSpark() {
    if (this.isMuted) return;
    const sparkFreqs = [1318.51, 1567.98, 1760.00, 2093.00];
    const f = sparkFreqs[Math.floor(Math.random() * sparkFreqs.length)];
    this.playCelestaNote(f, 0.25, 0.35);
  }

  /**
   * Quill scratch / parchment rustle sound
   */
  public playQuillSound() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now);
    gain.gain.setValueAtTime(0.05 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }
}

export const wizardAudio = new WizardAudioEngine();
