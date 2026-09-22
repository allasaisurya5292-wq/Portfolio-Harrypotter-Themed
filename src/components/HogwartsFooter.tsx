import React from 'react';
import { ArrowUp, Train, Sparkles, Heart } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface HogwartsFooterProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenResume: () => void;
}

export const HogwartsFooter: React.FC<HogwartsFooterProps> = ({ lang, houseTheme, onOpenResume }) => {
  const p = RESUME_DATA.personal;

  const scrollToTop = () => {
    wizardAudio.playCelestaNote(880, 0.4, 0.8);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08090f] border-t border-[#d4af37]/30 py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Deathly Hallows / Hogwarts Seal */}
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <polygon points="50,15 90,85 10,85" />
            <circle cx="50" cy="62" r="23" />
            <line x1="50" y1="15" x2="50" y2="85" />
          </svg>
          <div className="h-6 w-[1px] bg-[#3a3d54]"></div>
          <span className="font-cinzel text-lg font-bold text-[#ffd700] tracking-widest">
            SAI SURYA ALLA
          </span>
        </div>

        {/* Quote */}
        <p className="font-parchment text-sm sm:text-base text-[#b0a38f] max-w-xl italic">
          {p.quote[lang]}
        </p>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-cinzel text-[#8f826e]">
          <button
            onClick={onOpenResume}
            className="hover:text-[#ffd700] transition-colors"
          >
            {lang === 'en' ? 'Accio Resume (CV)' : 'Accio Lebenslauf'}
          </button>
          <span>•</span>
          <a href={`mailto:${p.email}`} className="hover:text-[#ffd700] transition-colors">
            allasaisurya5292@gmail.com
          </a>
          <span>•</span>
          <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-colors">
            LinkedIn Profile
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#ffd700] transition-colors text-[#d4af37]"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Ascend to Tower' : 'Nach oben'}</span>
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-4 border-t border-[#1e202e] w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-parchment text-[#6b6252] gap-2">
          <p>
            © {new Date().getFullYear()} Sai Surya Alla • OTH Amberg-Weiden, Deutschland.
          </p>
          <p className="italic">
            {lang === 'en'
              ? 'Woven with React, Tailwind CSS & Web Audio Celesta Synthesizers'
              : 'Gestaltet mit React, Tailwind CSS & Web-Audio-Celesta-Synthesizern'}
          </p>
        </div>

      </div>
    </footer>
  );
};
