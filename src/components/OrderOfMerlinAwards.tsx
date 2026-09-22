import React from 'react';
import { Award, Trophy, BookOpen, Star, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface OrderOfMerlinAwardsProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenTelcCert?: () => void;
}

export const OrderOfMerlinAwards: React.FC<OrderOfMerlinAwardsProps> = ({ lang, houseTheme, onOpenTelcCert }) => {
  const awards = RESUME_DATA.awards;

  return (
    <section id="order-of-merlin" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a26] border border-[#d4af37]/40 text-[#ffd700] text-xs font-cinzel mb-3">
          <Trophy className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>{lang === 'en' ? 'The Order of Merlin & Honors' : 'Orden des Merlin & Auszeichnungen'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#f4ecd8] mb-3">
          {lang === 'en' ? 'Awards, Certifications & Publications' : 'Auszeichnungen, Zertifikate & Publikationen'}
        </h2>
        <p className="font-parchment text-base sm:text-lg text-[#a89b82] max-w-2xl mx-auto italic">
          {lang === 'en'
            ? 'Official language certifications, nationwide hackathon championships, and peer-reviewed scientific papers.'
            : 'Offizielle Sprachzertifikate, bundesweite Hackathon-Siege und begutachtete wissenschaftliche Publikationen.'}
        </p>
      </div>

      {/* Awards Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, idx) => {
          const isTelc = award.id === 'telc-a2-2026';
          return (
            <div
              key={award.id}
              onMouseEnter={() => wizardAudio.playWandSpark()}
              className={`parchment-card rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 hover:border-[#ffd700] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] ${
                isTelc ? 'bg-gradient-to-br from-[#1b1c2b] to-[#12131f] border-[#d4af37]/70' : ''
              }`}
              style={{
                borderTop: `3px solid ${isTelc ? '#10b981' : houseTheme.borderGold}`,
              }}
            >
              <div>
                {/* Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-cinzel font-bold px-2 py-0.5 rounded border ${
                    isTelc 
                      ? 'bg-[#10b981]/20 border-[#10b981]/60 text-[#34d399]' 
                      : 'bg-[#272115] border-[#d4af37]/60 text-[#ffd700]'
                  }`}>
                    {award.badge}
                  </span>
                  <span className="text-xs font-cinzel text-[#8e836f]">{award.year}</span>
                </div>

                {/* Magical Title */}
                <p className="text-xs font-medieval text-[#a89980] mb-1 italic">
                  {award.magicalTrophy}
                </p>

                {/* Title */}
                <h3 className="font-cinzel text-lg font-bold text-[#f5ede0] mb-2 leading-snug">
                  {award.title[lang]}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-parchment font-semibold text-[#c7ba9f] mb-3">
                  {award.issuer[lang]}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm font-parchment text-[#b8ab95] leading-relaxed mb-4">
                  {award.description[lang]}
                </p>

                {/* Special Button for telc Certification */}
                {isTelc && onOpenTelcCert && (
                  <div className="mb-2">
                    <button
                      onClick={() => {
                        wizardAudio.playWandSpark();
                        onOpenTelcCert();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] text-xs font-cinzel font-bold shadow-md transition-all hover:scale-105 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{lang === 'de' ? 'telc A2-Zertifikat ansehen' : 'View Official telc A2 Certificate'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Seal */}
              <div className="pt-4 mt-4 border-t border-[#262838] flex items-center justify-between text-xs font-cinzel text-[#a69982]">
                <span className="flex items-center gap-1.5 text-[#ffd700]">
                  <Star className="w-3.5 h-3.5 fill-[#ffd700]" />
                  <span>{isTelc ? (lang === 'de' ? 'Offiziell zertifiziert' : 'Officially Certified') : (lang === 'en' ? 'First Prize / Distinction' : '1. Platz / Auszeichnung')}</span>
                </span>
                <span>#{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
