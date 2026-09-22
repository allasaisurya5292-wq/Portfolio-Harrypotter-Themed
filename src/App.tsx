import React, { useState, useEffect } from 'react';
import { HOUSES, HouseType } from './data/portfolioData';
import { wizardAudio } from './utils/audio';
import { HogwartsHeader } from './components/HogwartsHeader';
import { SpellBar } from './components/SpellBar';
import { HeroLetter } from './components/HeroLetter';
import { ExperienceChronicles } from './components/ExperienceChronicles';
import { SkillPotions } from './components/SkillPotions';
import { QuestsProjects } from './components/QuestsProjects';
import { OrderOfMerlinAwards } from './components/OrderOfMerlinAwards';
import { MaraudersMapSection } from './components/MaraudersMapSection';
import { OwlPostSection } from './components/OwlPostSection';
import { HogwartsFooter } from './components/HogwartsFooter';
import { AudioController } from './components/AudioController';
import { LumosCursor } from './components/LumosCursor';
import { SortingHatModal } from './components/SortingHatModal';
import { SecretVaultModal } from './components/SecretVaultModal';
import { AccioResumeModal } from './components/AccioResumeModal';

export default function App() {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [house, setHouse] = useState<HouseType>('ravenclaw');
  const [lumosActive, setLumosActive] = useState<boolean>(false);
  const [isLevitating, setIsLevitating] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const [spellToast, setSpellToast] = useState<string | null>(null);

  // Modals
  const [sortingHatOpen, setSortingHatOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    wizardAudio.setOnThemeStateChange((playing) => {
      setIsMusicPlaying(playing);
    });

    // Attempt autoplay immediately
    wizardAudio.playHedwigTheme().catch(() => {});

    // Ensure audio plays every time on first user interaction if browser autoplay blocked initial attempt
    const triggerAudioOnFirstGesture = () => {
      if (!wizardAudio.getIsPlayingTheme()) {
        wizardAudio.playHedwigTheme().catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', triggerAudioOnFirstGesture);
      window.removeEventListener('pointerdown', triggerAudioOnFirstGesture);
      window.removeEventListener('touchstart', triggerAudioOnFirstGesture);
      window.removeEventListener('keydown', triggerAudioOnFirstGesture);
      window.removeEventListener('scroll', triggerAudioOnFirstGesture);
    };

    window.addEventListener('click', triggerAudioOnFirstGesture, { passive: true });
    window.addEventListener('pointerdown', triggerAudioOnFirstGesture, { passive: true });
    window.addEventListener('touchstart', triggerAudioOnFirstGesture, { passive: true });
    window.addEventListener('keydown', triggerAudioOnFirstGesture, { passive: true });
    window.addEventListener('scroll', triggerAudioOnFirstGesture, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const triggerSpellToast = (msg: string) => {
    setSpellToast(msg);
    setTimeout(() => {
      setSpellToast(null);
    }, 3200);
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  const currentHouseTheme = HOUSES[house];

  return (
    <div
      className="min-h-screen text-[#f0e8d8] relative selection:bg-[#740001] selection:text-[#ffd700]"
      style={{
        backgroundColor: currentHouseTheme.bgDark,
        backgroundImage: `radial-gradient(ellipse at 50% 0%, ${currentHouseTheme.primary}22 0%, transparent 65%)`,
      }}
    >
      {/* Lumos Flashlight Cursor Effect */}
      <LumosCursor active={lumosActive} />

      {/* Floating Spell Cast Toast Notification */}
      {spellToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#171826]/95 border-2 border-[#ffd700] text-[#ffd700] font-cinzel text-xs sm:text-sm font-bold shadow-[0_0_30px_rgba(255,215,0,0.4)] backdrop-blur-md animate-bounce">
          {spellToast}
        </div>
      )}

      {/* Hogwarts Navigation Header */}
      <HogwartsHeader
        currentHouse={house}
        onSelectHouse={setHouse}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenSortingHat={() => {
          wizardAudio.playSortingFanfare();
          setSortingHatOpen(true);
        }}
      />

      {/* Interactive Wand Spell Deck */}
      <SpellBar
        lang={lang}
        lumosActive={lumosActive}
        onToggleLumos={() => setLumosActive(!lumosActive)}
        onOpenVault={() => setVaultOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onLevitateToggle={() => setIsLevitating(!isLevitating)}
        isLevitating={isLevitating}
        onSpellNotification={triggerSpellToast}
      />

      <main className="relative z-10">
        {/* Hogwarts Acceptance Letter & Overview */}
        <HeroLetter
          lang={lang}
          houseTheme={currentHouseTheme}
          onOpenResume={() => setResumeOpen(true)}
          onOpenOwlPost={() => {
            const el = document.getElementById('owl-post');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onPlayMusic={() => wizardAudio.toggleHedwigTheme()}
          isMusicPlaying={isMusicPlaying}
        />

        {/* Experience Chronicles (NIELIT Healthcare & CourseVita Agile PM) */}
        <ExperienceChronicles
          lang={lang}
          houseTheme={currentHouseTheme}
          isLevitating={isLevitating}
        />

        {/* Potions & Charms Lab (Skills & Tech Stack) */}
        <SkillPotions
          lang={lang}
          houseTheme={currentHouseTheme}
        />

        {/* Triwizard Projects (WhatsApp Voice-to-Text & BERT Fake News Detection) */}
        <QuestsProjects
          lang={lang}
          houseTheme={currentHouseTheme}
          isLevitating={isLevitating}
        />

        {/* Order of Merlin (Awards & Publications) */}
        <OrderOfMerlinAwards
          lang={lang}
          houseTheme={currentHouseTheme}
        />

        {/* Marauder's Map Easter Egg */}
        <MaraudersMapSection lang={lang} />

        {/* The Owlery & Direct Contact */}
        <OwlPostSection
          lang={lang}
          houseTheme={currentHouseTheme}
          onSendFeedback={triggerSpellToast}
        />
      </main>

      {/* Hogwarts Footer */}
      <HogwartsFooter
        lang={lang}
        houseTheme={currentHouseTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Floating Audio Controller for Hedwig's Theme & Hogwarts Sounds */}
      <AudioController
        lang={lang}
        onSpellCast={(name) => triggerSpellToast(`⚡ Sound: ${name}`)}
      />

      {/* Sorting Hat Ceremony Modal */}
      <SortingHatModal
        isOpen={sortingHatOpen}
        onClose={() => setSortingHatOpen(false)}
        lang={lang}
        currentHouse={house}
        onSelectHouse={setHouse}
      />

      {/* Alohomora Secret Vault Modal */}
      <SecretVaultModal
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
        lang={lang}
      />

      {/* Accio Resume Parchment Modal */}
      <AccioResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
