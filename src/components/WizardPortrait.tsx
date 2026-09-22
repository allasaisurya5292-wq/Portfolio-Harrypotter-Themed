import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ShieldCheck } from 'lucide-react';
import { wizardAudio } from '../utils/audio';
import { DEFAULT_PORTRAIT_BASE64 } from '../data/defaultPhoto';

interface WizardPortraitProps {
  lang: 'en' | 'de';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const WizardPortrait: React.FC<WizardPortraitProps> = ({
  lang,
  className = '',
  size = 'md',
  showBadge = true,
}) => {
  // Use embedded default portrait so Vercel and all deployments always display it instantly
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_PORTRAIT_BASE64 || '/myimage.jpeg');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sai_surya_custom_photo');
    if (saved) {
      setImageSrc(saved);
      setImageError(false);
    } else if (DEFAULT_PORTRAIT_BASE64) {
      setImageSrc(DEFAULT_PORTRAIT_BASE64);
      setImageError(false);
    }
  }, []);

  const handleImageError = () => {
    if (imageSrc !== DEFAULT_PORTRAIT_BASE64 && DEFAULT_PORTRAIT_BASE64) {
      setImageSrc(DEFAULT_PORTRAIT_BASE64);
    } else {
      setImageError(true);
    }
  };

  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52',
    lg: 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72',
  };

  return (
    <>
      <div className={`relative inline-block group ${className}`}>
        {/* Outer Magical Gilded Frame */}
        <div
          className={`relative ${sizeClasses[size]} rounded-2xl p-2 bg-gradient-to-b from-[#e6c670] via-[#8c6b2d] to-[#423113] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] group-hover:scale-105`}
        >
          {/* Inner Golden Rune Border */}
          <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#131522] border-2 border-[#fcedad]/80 flex items-center justify-center">
            {!imageError ? (
              <img
                src={imageSrc}
                alt="Sai Surya Alla - M.Sc. AI Student & Working Student Candidate"
                onError={handleImageError}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-105 contrast-105"
              />
            ) : (
              /* Stylized Gold Monogram Portrait */
              <div className="w-full h-full bg-gradient-to-b from-[#181a2e] to-[#0d0e1a] relative flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-amber-400 to-red-500 filter blur-xl" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#ffd700] shadow-[0_0_15px_rgba(255,215,0,0.5)] overflow-hidden bg-[#24283b] flex items-center justify-center">
                    <span className="text-3xl font-cinzel font-bold text-[#ffd700]">SA</span>
                  </div>
                  <div className="mt-2 text-[10px] font-cinzel font-bold text-[#ffd700] tracking-wider uppercase">
                    Sai Surya Alla
                  </div>
                  <div className="text-[9px] text-[#86efac] font-parchment">
                    Google Cloud Summit
                  </div>
                </div>
              </div>
            )}

            {/* Subtle Magical Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ffd700]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top-Right Quick Expand / View Icon */}
            <button
              id="view-full-portrait-btn"
              onClick={(e) => {
                e.stopPropagation();
                wizardAudio.playQuillSound();
                setIsModalOpen(true);
              }}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-[#ffd700] border border-[#ffd700]/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 cursor-pointer shadow-md"
              title={lang === 'en' ? 'View Full Portrait' : 'Porträt in voller Größe ansehen'}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Corner Ornamental Flourishes */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#fff0ad] rounded-tl-sm pointer-events-none" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#fff0ad] rounded-tr-sm pointer-events-none" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#fff0ad] rounded-bl-sm pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#fff0ad] rounded-br-sm pointer-events-none" />
        </div>

        {/* Floating Verified / Recruiter Available Status Pill */}
        {showBadge && (
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[#111320] border border-[#10b981] text-[#34d399] font-cinzel text-[10px] font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center gap-1.5 z-10">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>{lang === 'en' ? 'Working Student Ready' : 'Werkstudent Sofort'}</span>
          </div>
        )}
      </div>

      {/* Full Size Portrait Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-md w-full bg-[#171926] border-2 border-[#d4af37] rounded-2xl p-4 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-white">
            <div className="flex items-center justify-between pb-3 border-b border-[#3b3f5c]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <h4 className="font-cinzel font-bold text-sm text-[#ffd700]">
                  Sai Surya Alla — Portrait
                </h4>
              </div>
              <button
                id="close-portrait-modal-btn"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-[#22263a] hover:bg-[#740001] text-[#ffd700] transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="my-4 rounded-xl overflow-hidden border border-[#d4af37]/40 max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={imageSrc}
                alt="Sai Surya Alla"
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            <div className="flex items-center justify-center pt-2 text-xs font-parchment text-[#c4b59d]">
              <div className="flex items-center gap-1.5 text-[#34d399]">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Google Cloud Summit • M.Sc. AI Student at OTH Amberg-Weiden'
                    : 'Google Cloud Summit • M.Sc. KI-Student an der OTH Amberg-Weiden'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
