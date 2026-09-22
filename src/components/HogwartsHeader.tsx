import React, { useState } from 'react';
import { Sparkles, Globe, Menu, X, Scroll, Award, Briefcase, Code, Mail } from 'lucide-react';
import { HOUSES, HouseType } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';
import { SortingHatIcon } from './icons/SortingHatIcon';

interface HogwartsHeaderProps {
  currentHouse: HouseType;
  onSelectHouse: (house: HouseType) => void;
  lang: 'en' | 'de';
  onToggleLang: () => void;
  onOpenSortingHat: () => void;
}

export const HogwartsHeader: React.FC<HogwartsHeaderProps> = ({
  currentHouse,
  onSelectHouse,
  lang,
  onToggleLang,
  onOpenSortingHat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeHouseTheme = HOUSES[currentHouse];

  const handleHouseChange = (h: HouseType) => {
    onSelectHouse(h);
    wizardAudio.playWandSpark();
  };

  const navLinks = [
    { href: '#acceptance-letter', label: lang === 'en' ? 'Profile' : 'Profil', icon: Scroll },
    { href: '#chronicles', label: lang === 'en' ? 'Chronicles' : 'Erfahrung', icon: Briefcase },
    { href: '#potions-skills', label: lang === 'en' ? 'Skills' : 'Kenntnisse', icon: Code },
    { href: '#quests', label: lang === 'en' ? 'Quests' : 'Projekte', icon: Sparkles },
    { href: '#order-of-merlin', label: lang === 'en' ? 'Awards' : 'Ehrungen', icon: Award },
    { href: '#owl-post', label: lang === 'en' ? 'Owl Post' : 'Eulenpost', icon: Mail },
  ];

  return (
    <header className="relative w-full border-b border-[#d4af37]/35 bg-[#0a0b12]/95 backdrop-blur-md z-30 transition-colors duration-500 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      {/* Top Hogwarts Banner Ribbon */}
      <div
        className="w-full py-1 text-center text-[11px] font-cinzel font-semibold tracking-widest border-b transition-colors duration-500 relative overflow-hidden"
        style={{
          backgroundColor: activeHouseTheme.primary,
          color: activeHouseTheme.borderGold,
          borderColor: activeHouseTheme.secondary,
        }}
      >
        <span className="inline-flex items-center gap-2 relative z-10">
          <span className="text-[#ffd700] animate-pulse">✦</span>
          <span className="tracking-widest uppercase">{activeHouseTheme.name} • {activeHouseTheme.motto[lang]}</span>
          <span className="text-[#ffd700] animate-pulse">✦</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 lg:gap-6">
        {/* Identity Section - guaranteed no squish / no wrap */}
        <div className="flex items-center gap-3 min-w-max flex-shrink-0">
          {/* Crest Shield */}
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-xl sm:text-2xl shadow-[0_0_15px_rgba(212,175,55,0.35)] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(255,215,0,0.6)]"
            style={{
              borderColor: activeHouseTheme.borderGold,
              backgroundColor: '#121422',
            }}
            onClick={() => {
              wizardAudio.playWandSpark();
              onOpenSortingHat();
            }}
            title={lang === 'en' ? 'Click to consult the Sorting Hat' : 'Klicke, um den Sprechenden Hut zu befragen'}
          >
            <span>{activeHouseTheme.crestIcon}</span>
          </div>

          <div className="flex flex-col justify-center">
            {/* Name + Student at OTH Amberg Badge Row */}
            <div className="flex items-center gap-2.5 flex-nowrap">
              <h1 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#ffd700] to-[#e6b84d] drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                Sai Surya Alla
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#d4af37]/60 bg-gradient-to-r from-[#171928] to-[#25223a] text-[#ffd700] font-cinzel text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_6px_#10b981]" />
                <span>{lang === 'en' ? 'Student at OTH Amberg' : 'Student an der OTH Amberg'}</span>
              </span>
            </div>

            {/* Academic Credential Subtitle */}
            <p className="text-xs text-[#c4b59d] font-parchment italic whitespace-nowrap flex items-center gap-1.5 mt-0.5">
              <span className="text-[#ffd700]/80">✦</span>
              <span>{lang === 'en' ? 'M.Sc. AI for Industrial Applications' : 'M.Sc. Industrielle KI-Anwendungen'}</span>
              <span className="text-[#d4af37]/60">•</span>
              <span className="text-[#e8dac1] font-semibold">{lang === 'en' ? 'OTH Amberg-Weiden, Germany' : 'OTH Amberg-Weiden, Deutschland'}</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links (Visible on xl+ screens so it never crowds the title) */}
        <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 flex-shrink min-w-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => wizardAudio.playQuillSound()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-cinzel text-[#c8bc9f] hover:text-[#ffd700] hover:bg-[#1a1c2a] border border-transparent hover:border-[#d4af37]/30 transition-all duration-200 whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Sorting Hat with Authentic Hat Icon, House Badges, Language */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Sorting Hat Button with Hat Icon & Magical Glow */}
          <button
            id="btn-open-sorting-hat"
            onClick={() => {
              wizardAudio.playWandSpark();
              onOpenSortingHat();
            }}
            className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-cinzel font-bold bg-gradient-to-r from-[#22182b] via-[#2a1d3b] to-[#1c1829] border border-[#d4af37]/70 text-[#ffd700] hover:border-[#ffd700] hover:shadow-[0_0_20px_rgba(255,215,0,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title={lang === 'en' ? 'Consult the Sorting Hat Ceremony' : 'Die Zeremonie des Sprechenden Hutes befragen'}
          >
            <SortingHatIcon className="w-4 h-4 text-[#ffd700] group-hover:rotate-12 transition-transform duration-300" glow />
            <span className="whitespace-nowrap">{lang === 'en' ? 'Sorting Hat' : 'Sprechender Hut'}</span>
            <Sparkles className="w-3 h-3 text-[#ffd700]/70 group-hover:scale-125 transition-transform duration-300" />
          </button>

          {/* House Selector Badges */}
          <div className="hidden sm:flex items-center p-0.5 rounded-xl bg-[#141520] border border-[#37394c] shadow-inner">
            {(Object.keys(HOUSES) as HouseType[]).map((h) => {
              const item = HOUSES[h];
              const isSelected = currentHouse === h;
              return (
                <button
                  key={h}
                  onClick={() => handleHouseChange(h)}
                  className={`px-2 py-1 rounded-lg text-xs font-cinzel transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#292236] to-[#1f1d2c] text-[#ffd700] font-bold border border-[#d4af37]/60 shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                      : 'text-[#8c8270] hover:text-[#e4dac5] border border-transparent'
                  }`}
                  title={`${item.name} (${item.badgeText})`}
                >
                  <span className="mr-1">{item.crestIcon}</span>
                  <span className="hidden 2xl:inline">{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Language Toggle */}
          <button
            id="btn-lang-toggle"
            onClick={() => {
              onToggleLang();
              wizardAudio.playQuillSound();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-cinzel bg-[#171926] border border-[#3e4259] text-[#e0d6c3] hover:text-[#ffd700] hover:border-[#d4af37] transition-all shadow-sm cursor-pointer"
            title={lang === 'en' ? 'Switch to German' : 'Auf Englisch umschalten'}
          >
            <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-bold">{lang === 'en' ? 'EN' : 'DE'}</span>
          </button>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              wizardAudio.playQuillSound();
            }}
            className="xl:hidden p-1.5 rounded-xl bg-[#171926] text-[#d4af37] border border-[#3e4259] hover:border-[#d4af37] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#d4af37]/35 bg-[#0c0d16]/98 backdrop-blur-xl px-4 py-4 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    wizardAudio.playQuillSound();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#161726] border border-[#2d3042] text-xs font-cinzel text-[#d4c8b0] hover:text-[#ffd700] hover:border-[#d4af37]/50 transition-all"
                >
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile House Selection */}
          <div className="pt-3 border-t border-[#2d3042]">
            <p className="text-xs font-cinzel text-[#ffd700] mb-2 font-semibold flex items-center gap-1.5">
              <span>✧</span>
              <span>{lang === 'en' ? 'Select Hogwarts House:' : 'Hogwarts Haus wählen:'}</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(HOUSES) as HouseType[]).map((h) => {
                const item = HOUSES[h];
                const isSelected = currentHouse === h;
                return (
                  <button
                    key={h}
                    onClick={() => {
                      handleHouseChange(h);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-cinzel transition-all ${
                      isSelected
                        ? 'bg-[#29221b] border border-[#d4af37] text-[#ffd700] shadow-[0_0_12px_rgba(212,175,55,0.3)] font-bold'
                        : 'bg-[#151622] border border-[#26283b] text-[#a19683] hover:text-[#e0d6c3]'
                    }`}
                  >
                    <span className="text-base">{item.crestIcon}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

