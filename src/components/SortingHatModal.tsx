import React, { useState } from 'react';
import { X, Sparkles, Wand2 } from 'lucide-react';
import { HOUSES, HouseType } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';
import { SortingHatIcon } from './icons/SortingHatIcon';
import confetti from 'canvas-confetti';

interface SortingHatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'de';
  currentHouse: HouseType;
  onSelectHouse: (house: HouseType) => void;
}

export const SortingHatModal: React.FC<SortingHatModalProps> = ({
  isOpen,
  onClose,
  lang,
  currentHouse,
  onSelectHouse,
}) => {
  const [sortedResult, setSortedResult] = useState<HouseType | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const runSortingCeremony = (targetHouse?: HouseType) => {
    setIsThinking(true);
    wizardAudio.playCelestaNote(440, 0.4, 0.7);

    setTimeout(() => {
      wizardAudio.playSortingFanfare();
      const chosen = targetHouse || (Math.random() > 0.5 ? 'ravenclaw' : 'gryffindor');
      setSortedResult(chosen);
      onSelectHouse(chosen);
      setIsThinking(false);

      // Trigger house confetti
      const theme = HOUSES[chosen];
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.6 },
        colors: [theme.primary, theme.secondary, theme.borderGold, '#ffffff'],
      });
    }, 1800);
  };

  const house = sortedResult ? HOUSES[sortedResult] : HOUSES[currentHouse];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="parchment-card border-2 border-[#d4af37] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(212,175,55,0.3)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202235] text-[#bdae95] hover:text-[#ffd700] hover:bg-[#2b2d42] border border-[#3b3e54]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sorting Hat Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-[#2e2136] to-[#15121e] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            <SortingHatIcon className="w-10 h-10 text-[#ffd700]" glow />
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffd700] flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd700]/70" />
            <span>{lang === 'en' ? 'The Sorting Hat Ceremony' : 'Die Zeremonie des Sprechenden Hutes'}</span>
            <Sparkles className="w-4 h-4 text-[#ffd700]/70" />
          </h3>
          <p className="text-xs font-medieval text-[#a89b82] italic mt-1">
            {lang === 'en' ? '“There’s nothing hidden in your head the Sorting Hat can’t see...”' : '„Es gibt nichts, was in deinem Kopf verborgen bliebe...“'}
          </p>
        </div>

        {/* Thinking or Result State */}
        {isThinking ? (
          <div className="text-center py-8 space-y-4">
            <div className="animate-spin text-3xl inline-block">✨</div>
            <p className="font-parchment text-lg text-[#ffd700] italic animate-pulse">
              {lang === 'en'
                ? '“Hmm... Difficult, very difficult. Plenty of courage, I see. A 9.21 CGPA, and winning against 10,000 hackathon teams... Where to put you?”'
                : '„Hmm... Schwierig, sehr schwierig. Viel Mut sehe ich. Eine 9,21 Abschlussnote und Siege über 10.000 Teams... Wohin soll ich dich stecken?“'}
            </p>
          </div>
        ) : sortedResult ? (
          <div className="text-center py-4 space-y-4">
            <div className="text-4xl">{house.crestIcon}</div>
            <div>
              <span className="text-xs font-cinzel uppercase tracking-widest text-[#a89b82]">
                {lang === 'en' ? 'By decree of the Sorting Hat:' : 'Auf Beschluss des Sprechenden Hutes:'}
              </span>
              <h4
                className="font-cinzel-dec text-3xl sm:text-4xl font-bold mt-1"
                style={{ color: house.borderGold }}
              >
                {house.name.toUpperCase()}!
              </h4>
              <p className="text-xs font-cinzel text-[#ffd700] mt-1 font-semibold">
                {house.badgeText}
              </p>
            </div>
            <p className="font-parchment text-sm text-[#d4c8b2] italic max-w-sm mx-auto">
              {house.description[lang]}
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => runSortingCeremony()}
                className="px-4 py-2 rounded-xl text-xs font-cinzel bg-[#1e2030] hover:bg-[#282a40] text-[#ffd700] border border-[#d4af37]/40"
              >
                {lang === 'en' ? 'Try Again' : 'Erneut sortieren'}
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-cinzel font-bold bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625]"
              >
                {lang === 'en' ? 'Accept Placement' : 'Zuordnung annehmen'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <p className="font-parchment text-sm sm:text-base text-[#cfc4b0] leading-relaxed">
              {lang === 'en'
                ? 'Place the enchanted Sorting Hat upon Sai Surya Alla to discover his Hogwarts house affinity, based on his achievements in Artificial Intelligence and IT Project Management.'
                : 'Setze den verzauberten Sprechenden Hut auf, um Sai Suryas Hogwarts-Haus anhand seiner Erfolge in KI und IT-Projektmanagement zu ermitteln.'}
            </p>

            {/* Quick House Selector options */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-left">
              {(Object.keys(HOUSES) as HouseType[]).map((hKey) => {
                const item = HOUSES[hKey];
                return (
                  <button
                    key={hKey}
                    onClick={() => runSortingCeremony(hKey)}
                    className="p-3 rounded-xl bg-[#181a28] hover:bg-[#222438] border border-[#343850] hover:border-[#d4af37] transition-all flex items-center gap-2.5"
                  >
                    <span className="text-2xl">{item.crestIcon}</span>
                    <div>
                      <span className="font-cinzel text-xs font-bold text-[#f2e9db] block">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-parchment text-[#a39783] line-clamp-1">
                        {item.badgeText}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => runSortingCeremony()}
              className="w-full mt-4 py-3 rounded-xl text-sm font-cinzel font-bold bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625] shadow-lg flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              <span>{lang === 'en' ? 'Let the Sorting Hat Decide!' : 'Lass den Sprechenden Hut entscheiden!'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
