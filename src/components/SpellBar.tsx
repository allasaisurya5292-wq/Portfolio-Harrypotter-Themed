import React from 'react';
import { Sparkles, Wand, Eye, Unlock, Shield, Feather, FileText, Zap, Briefcase, Droplets } from 'lucide-react';
import { wizardAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface SpellBarProps {
  lang: 'en' | 'de';
  lumosActive: boolean;
  onToggleLumos: () => void;
  onOpenVault: () => void;
  onOpenResume: () => void;
  onLevitateToggle: () => void;
  isLevitating: boolean;
  onSpellNotification: (msg: string) => void;
  onOpenRecruiterPortal?: () => void;
}

export const SpellBar: React.FC<SpellBarProps> = ({
  lang,
  lumosActive,
  onToggleLumos,
  onOpenVault,
  onOpenResume,
  onLevitateToggle,
  isLevitating,
  onSpellNotification,
  onOpenRecruiterPortal,
}) => {
  const castSpell = (spell: string) => {
    switch (spell) {
      case 'werkstudent':
        wizardAudio.playCelestaNote(987.77, 0.8, 1.2);
        wizardAudio.playWandSpark();
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.3 },
          colors: ['#ffd700', '#10b981', '#ffffff'],
        });
        if (onOpenRecruiterPortal) {
          onOpenRecruiterPortal();
        } else {
          const el = document.getElementById('recruiter-fast-track');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        onSpellNotification(
          lang === 'en'
            ? '⚡ Accio Werkstudent! Summoning Recruiter Working Student Portal'
            : '⚡ Accio Werkstudent! Recruiter- & Werkstudentenportal herbeigerufen'
        );
        break;

      case 'aguamenti':
        wizardAudio.playCelestaNote(659.25, 0.5, 0.8);
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#38bdf8', '#0284c7', '#bae6fd'],
        });
        onSpellNotification(
          lang === 'en'
            ? '💧 Aguamenti! Crystal clear focus & refreshed build pipelines'
            : '💧 Aguamenti! Kristallklarer Fokus & erfrischte CI/CD Pipelines'
        );
        break;

      case 'lumos':
        wizardAudio.playLumos();
        onToggleLumos();
        onSpellNotification(
          lumosActive
            ? (lang === 'en' ? 'Nox! Wand light extinguished' : 'Nox! Zauberstablicht erloschen')
            : (lang === 'en' ? '✨ Lumos Maxima! Illuminating the parchment' : '✨ Lumos Maxima! Pergament erleuchtet')
        );
        break;

      case 'alohomora':
        wizardAudio.playAlohomora();
        onOpenVault();
        onSpellNotification(
          lang === 'en' ? '🔓 Alohomora! Unlocking the Secret Archives' : '🔓 Alohomora! Geheimarchiv entriegelt'
        );
        break;

      case 'patronum':
        wizardAudio.playExpectoPatronum();
        // Silver stardust patronus burst
        confetti({
          particleCount: 55,
          spread: 100,
          origin: { y: 0.65 },
          colors: ['#e2e8f0', '#94a3b8', '#38bdf8', '#ffffff'],
          shapes: ['circle', 'star'],
        });
        onSpellNotification(
          lang === 'en'
            ? '🦌 Expecto Patronum! Silver shield against bugs & delays'
            : '🦌 Expecto Patronum! Silberschild gegen Verzögerungen'
        );
        break;

      case 'leviosa':
        wizardAudio.playWingardiumLeviosa();
        onLevitateToggle();
        onSpellNotification(
          isLevitating
            ? (lang === 'en' ? 'Finitum! Levitation ceased' : 'Finitum! Schwebung beendet')
            : (lang === 'en' ? '🪶 Wingardium Leviosa! Swish and flick' : '🪶 Wingardium Leviosa! Schwingen und schnipsen')
        );
        break;

      case 'accio':
        wizardAudio.playAccio();
        onOpenResume();
        onSpellNotification(
          lang === 'en' ? '📜 Accio Resume! Summoning Sai\'s Parchment CV' : '📜 Accio Lebenslauf! Sai\'s Lebenslauf herbeigerufen'
        );
        break;

      case 'expelliarmus':
        wizardAudio.playExpelliarmus();
        // Red spark surge
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#ef4444', '#b91c1c', '#f59e0b', '#ffd700'],
        });
        onSpellNotification(
          lang === 'en'
            ? '⚡ Expelliarmus! Disarming scope creep and roadblocks'
            : '⚡ Expelliarmus! Entwaffnet Scope Creep und Hindernisse'
        );
        break;
    }
  };

  const spells = [
    {
      id: 'werkstudent',
      name: 'Accio Werkstudent',
      icon: Briefcase,
      hint: lang === 'en' ? 'Summon Recruiter Portal & Working Student Availability' : 'Recruiter- & Werkstudentenportal rufen',
      active: false,
      color: 'hover:border-emerald-400 hover:text-emerald-300 font-bold bg-[#142319]/80 border-[#10b981]/50 text-[#34d399]',
    },
    {
      id: 'lumos',
      name: lumosActive ? 'Nox / Lumos' : 'Lumos',
      icon: Eye,
      hint: lang === 'en' ? 'Toggle Wand Light' : 'Zauberstablicht umschalten',
      active: lumosActive,
      color: 'hover:border-amber-400 hover:text-amber-300',
    },
    {
      id: 'alohomora',
      name: 'Alohomora',
      icon: Unlock,
      hint: lang === 'en' ? 'Unlock Secret Vault' : 'Geheimtresor öffnen',
      active: false,
      color: 'hover:border-emerald-400 hover:text-emerald-300',
    },
    {
      id: 'aguamenti',
      name: 'Aguamenti',
      icon: Droplets,
      hint: lang === 'en' ? 'Cool Down & Refresh Focus' : 'Erfrischender Fokuszauber',
      active: false,
      color: 'hover:border-sky-400 hover:text-sky-300',
    },
    {
      id: 'patronum',
      name: 'Patronus',
      icon: Shield,
      hint: lang === 'en' ? 'Summon Silver Shield' : 'Silberpatronus rufen',
      active: false,
      color: 'hover:border-sky-300 hover:text-sky-200',
    },
    {
      id: 'leviosa',
      name: isLevitating ? 'Leviosa (On)' : 'Leviosa',
      icon: Feather,
      hint: lang === 'en' ? 'Float Chronicles' : 'Karten schweben lassen',
      active: isLevitating,
      color: 'hover:border-indigo-400 hover:text-indigo-300',
    },
    {
      id: 'accio',
      name: 'Accio CV',
      icon: FileText,
      hint: lang === 'en' ? 'Summon Official Resume' : 'Lebenslauf herbeirufen',
      active: false,
      color: 'hover:border-amber-400 hover:text-amber-200',
    },
    {
      id: 'expelliarmus',
      name: 'Expelliarmus',
      icon: Zap,
      hint: lang === 'en' ? 'Disarm Obstacles' : 'Hindernisse entwaffnen',
      active: false,
      color: 'hover:border-rose-500 hover:text-rose-400',
    },
  ];

  return (
    <div className="w-full bg-[#111219]/90 border-y border-[#d4af37]/30 py-2.5 px-4 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Spell title indicator */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#740001]/60 border border-[#d3a625] flex items-center justify-center text-[#ffd700]">
            <Wand className="w-4 h-4 animate-pulse" />
          </div>
          <span className="font-cinzel text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
            {lang === 'en' ? 'Wand Spell Deck' : 'Zauberstab-Zauberleiste'}
          </span>
          <span className="hidden sm:inline-block text-[11px] text-[#a49987] font-parchment italic">
            ({lang === 'en' ? 'Click any spell to cast with audio' : 'Klicke zum Zaubern mit Ton'})
          </span>
        </div>

        {/* Spells Grid */}
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {spells.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                id={`spell-btn-${s.id}`}
                onClick={() => castSpell(s.id)}
                title={s.hint}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-cinzel transition-all border ${
                  s.active
                    ? 'bg-[#d4af37]/20 border-[#ffd700] text-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.35)]'
                    : 'bg-[#1a1b26] border-[#383a4f] text-[#c9bfa8] hover:bg-[#232535] ' + s.color
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${s.active ? 'text-[#ffd700]' : ''}`} />
                <span className="whitespace-nowrap">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
