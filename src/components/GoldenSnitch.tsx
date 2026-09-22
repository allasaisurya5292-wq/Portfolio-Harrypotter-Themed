import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { wizardAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface GoldenSnitchProps {
  lang: 'en' | 'de';
  onOpenRecruiterPortal?: () => void;
}

export const GoldenSnitch: React.FC<GoldenSnitchProps> = ({
  lang,
  onOpenRecruiterPortal,
}) => {
  const [position, setPosition] = useState({ x: 80, y: 30 });
  const [isCaught, setIsCaught] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Subtle flight animation across screen bounds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!modalOpen) {
        const randomX = Math.max(10, Math.min(88, Math.random() * 85 + 5));
        const randomY = Math.max(15, Math.min(85, Math.random() * 70 + 10));
        setPosition({ x: randomX, y: randomY });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [modalOpen]);

  const handleCatch = (e: React.MouseEvent) => {
    e.stopPropagation();
    wizardAudio.playCelestaNote(1046.5, 0.8, 1.2); // High C chime
    wizardAudio.playWandSpark();

    confetti({
      particleCount: 70,
      spread: 90,
      origin: { x: position.x / 100, y: position.y / 100 },
      colors: ['#ffd700', '#fef08a', '#eab308', '#ffffff'],
    });

    setIsCaught(true);
    setModalOpen(true);
  };

  return (
    <>
      {/* Floating Interactive Golden Snitch */}
      {visible && (
        <div
          onClick={handleCatch}
          style={{
            top: `${position.y}%`,
            left: `${position.x}%`,
            transition: 'top 3.5s cubic-bezier(0.4, 0, 0.2, 1), left 3.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="fixed z-40 cursor-pointer pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 group"
          title={lang === 'en' ? '⚡ Catch the Golden Snitch!' : '⚡ Fange den Goldenen Schnatz!'}
        >
          <div className="relative flex items-center justify-center">
            
            {/* Left Fluttering Wing */}
            <div className="w-6 h-2 rounded-full bg-gradient-to-l from-[#ffd700]/90 to-white/40 shadow-[0_0_8px_rgba(255,215,0,0.8)] transform -rotate-25 origin-right animate-pulse" />

            {/* Central Golden Sphere */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#c88d08] via-[#ffd700] to-[#fff8cc] shadow-[0_0_18px_rgba(255,215,0,0.95)] border border-[#fff2a8] relative flex items-center justify-center transform group-hover:scale-125 transition-transform">
              <span className="text-[7px] text-[#593902] font-bold">⚡</span>
            </div>

            {/* Right Fluttering Wing */}
            <div className="w-6 h-2 rounded-full bg-gradient-to-r from-[#ffd700]/90 to-white/40 shadow-[0_0_8px_rgba(255,215,0,0.8)] transform rotate-25 origin-left animate-pulse" />

            {/* Golden Sparkle Trail Indicator */}
            <span className="absolute -bottom-4 text-[9px] font-cinzel font-bold text-[#ffd700] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {lang === 'en' ? 'Catch Me!' : 'Fang mich!'}
            </span>
          </div>
        </div>
      )}

      {/* Golden Snitch Victory Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-gradient-to-b from-[#1c1d2e] via-[#141524] to-[#0f101b] border-2 border-[#ffd700] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(255,215,0,0.4)] relative text-center">
            
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#23273c] hover:bg-[#740001] text-[#ffd700] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Snitch Icon & Points */}
            <div className="w-16 h-16 rounded-full bg-[#ffd700]/20 border-2 border-[#ffd700] flex items-center justify-center mx-auto mb-4 text-3xl shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-bounce">
              🏆
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-[#ffd700]/15 border border-[#ffd700]/50 text-[#ffd700] font-cinzel text-xs font-bold mb-2">
              +150 {lang === 'en' ? 'Points to Your Hiring Team!' : 'Punkte für Ihr Team!'}
            </span>

            <h3 className="font-cinzel text-2xl font-bold text-[#f5ede0] mb-2">
              {lang === 'en' ? 'You Caught the Golden Snitch!' : 'Goldener Schnatz gefangen!'}
            </h3>

            <p className="text-sm font-parchment text-[#c4b59d] mb-6 leading-relaxed">
              {lang === 'en'
                ? 'Your seeker reflexes are exceptional. You have unlocked Sai Surya Alla’s direct fast-track working student dispatch. Schedule an interview before other companies seize this high-caliber candidate!'
                : 'Hervorragende Sucher-Reflexe! Sie haben Sai Surya Allas Fast-Track-Empfehlung freigeschaltet. Vereinbaren Sie ein Gespräch für eine Werkstudentenstelle, bevor andere Firmen zugreifen!'}
            </p>

            {/* Candidate Fast-Facts Box */}
            <div className="bg-[#10121e] p-4 rounded-xl border border-[#393e5e] text-left text-xs space-y-2 mb-6 font-parchment">
              <div className="flex items-center justify-between text-[#e5ded1]">
                <span className="text-[#a09480]">Kandidat / Candidate:</span>
                <span className="font-bold text-[#ffd700]">Sai Surya Alla (M.Sc. AI)</span>
              </div>
              <div className="flex items-center justify-between text-[#e5ded1]">
                <span className="text-[#a09480]">Rolle / Role:</span>
                <span className="font-bold text-[#34d399]">Working Student (Werkstudent)</span>
              </div>
              <div className="flex items-center justify-between text-[#e5ded1]">
                <span className="text-[#a09480]">Verfügbarkeit / Availability:</span>
                <span className="font-bold text-[#38bdf8]">Sofort / Immediate (Bayern & Remote)</span>
              </div>
              <div className="flex items-center justify-between text-[#e5ded1]">
                <span className="text-[#a09480]">Sprachen / Languages:</span>
                <span>🇬🇧 C1 (Fluent) • 🇩🇪 A2 telc (B1 in prep)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:allasaisurya5292@gmail.com?subject=Golden%20Snitch%20Interview%20Invitation%20-%20Working%20Student%20Sai%20Surya%20Alla"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] font-cinzel text-xs font-bold shadow-lg transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'en' ? 'Schedule Fast-Track Interview' : 'Direktgespräch vereinbaren'}</span>
              </a>

              <button
                onClick={() => {
                  setModalOpen(false);
                  if (onOpenRecruiterPortal) {
                    onOpenRecruiterPortal();
                  } else {
                    const el = document.getElementById('recruiter-fast-track');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#23273c] hover:bg-[#323754] text-[#e0d6c3] border border-[#484e75] font-cinzel text-xs font-semibold transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Open Recruiter Portal' : 'Zum Recruiter-Portal'}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
