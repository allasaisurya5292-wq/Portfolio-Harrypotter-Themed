import React, { useState } from 'react';
import { Sparkles, Terminal, Database, Cloud, Globe2, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface SkillPotionsProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenTelcCert?: () => void;
}

export const SkillPotions: React.FC<SkillPotionsProps> = ({ lang, houseTheme, onOpenTelcCert }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pm' | 'tech' | 'ai' | 'cloud' | 'languages'>('all');
  const s = RESUME_DATA.skills;

  const categories = [
    {
      id: 'pm',
      title: s.projectManagement.categoryName[lang],
      incantation: s.projectManagement.magicalSpell,
      icon: Layers,
      items: s.projectManagement.items,
      badge: lang === 'en' ? 'Agile & Governance' : 'Agil & Steuerung',
      color: 'border-amber-500/50 text-amber-300',
    },
    {
      id: 'ai',
      title: s.dataAi.categoryName[lang],
      incantation: s.dataAi.magicalSpell,
      icon: Database,
      items: s.dataAi.items,
      badge: lang === 'en' ? 'Neural & Data Sorcery' : 'KI & Neuronale Netze',
      color: 'border-purple-500/50 text-purple-300',
    },
    {
      id: 'tech',
      title: s.programming.categoryName[lang],
      incantation: s.programming.magicalSpell,
      icon: Terminal,
      items: s.programming.items,
      badge: lang === 'en' ? 'Core Code Incantations' : 'Programmiersprachen',
      color: 'border-emerald-500/50 text-emerald-300',
    },
    {
      id: 'web',
      title: s.webApis.categoryName[lang],
      incantation: s.webApis.magicalSpell,
      icon: BookOpen,
      items: s.webApis.items,
      badge: lang === 'en' ? 'APIs & Full-Stack' : 'Schnittstellen & Web',
      color: 'border-sky-500/50 text-sky-300',
    },
    {
      id: 'cloud',
      title: s.devOpsCloud.categoryName[lang],
      incantation: s.devOpsCloud.magicalSpell,
      icon: Cloud,
      items: s.devOpsCloud.items,
      badge: lang === 'en' ? 'Cloud & Infrastructure' : 'Cloud & DevOps',
      color: 'border-cyan-500/50 text-cyan-300',
    },
  ];

  const handleTileClick = (itemName: string) => {
    wizardAudio.playWandSpark();
  };

  return (
    <section id="potions-skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171624] border border-[#d4af37]/40 text-[#ffd700] text-xs font-cinzel mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Chamber of Potions & Spellcraft' : 'Kammer der Zaubertränke & Zauberformeln'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#f4ecd8] mb-3">
          {lang === 'en' ? 'Skills & Technical Repertoire' : 'Kenntnisse & Fachkompetenzen'}
        </h2>
        <p className="font-parchment text-base sm:text-lg text-[#a89b82] max-w-2xl mx-auto italic">
          {lang === 'en'
            ? 'Mastered frameworks, enterprise tools, and algorithms refined through real-world software delivery and research.'
            : 'Beherrschte Technologien, Enterprise-Tools und Algorithmen für agile Software- und KI-Projekte.'}
        </p>
      </div>

      {/* Grid of Cauldrons / Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="parchment-card rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/60"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#202336] border border-[#3f4361] flex items-center justify-center text-[#ffd700]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-[#f5ede0]">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-medieval text-[#a89980] italic">
                      {cat.incantation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skill Runes */}
              <div className="flex flex-wrap gap-2 mt-4">
                {cat.items.map((skill, sIdx) => {
                  const isAws = skill.includes('AWS');
                  return (
                    <button
                      key={sIdx}
                      onClick={() => handleTileClick(skill)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all border ${
                        isAws
                          ? 'bg-[#ff9900]/15 border-[#ff9900]/70 text-[#ffb84d] font-bold shadow-sm'
                          : 'bg-[#1a1c2a] border-[#363a52] text-[#d6cdbd] hover:border-[#d4af37] hover:text-[#ffd700] hover:bg-[#23263b]'
                      }`}
                      title={isAws ? 'Certified AWS Cloud Practitioner' : skill}
                    >
                      {isAws && <span className="mr-1">☁</span>}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Spoken Languages Cauldron */}
        <div className="parchment-card rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#202336] border border-[#3f4361] flex items-center justify-center text-[#ffd700]">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-[#f5ede0]">
                {s.languages.categoryName[lang]}
              </h3>
              <p className="text-[11px] font-medieval text-[#a89980] italic">
                {s.languages.magicalSpell}
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            {s.languages.items.map((langItem, idx) => {
              const isGerman = langItem.lang.includes('German');
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    isGerman
                      ? 'bg-gradient-to-r from-[#201d2d] to-[#181a28] border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.12)]'
                      : 'bg-[#181a28] border-[#2f334a]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {langItem.lang.includes('English') ? '🇬🇧' : isGerman ? '🇩🇪' : '🇮🇳'}
                      </span>
                      <div>
                        <span className="font-cinzel text-xs font-semibold text-[#f2e9db] block">
                          {langItem.lang}
                        </span>
                        {isGerman && (
                          <span className="text-[10px] text-[#ffd700]/90 font-parchment flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                            <span>{lang === 'de' ? 'Offiziell telc-zertifiziert (Ingolstadt)' : 'Official telc Certified (Ingolstadt, DE)'}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-parchment font-bold px-2 py-0.5 rounded bg-[#25283c] border border-[#444866] text-[#ffd700] inline-block">
                        {lang === 'en' ? langItem.level : langItem.deLevel}
                      </span>
                    </div>
                  </div>

                  {/* German Special Interactive Box: View telc Certificate & B1 Progress */}
                  {isGerman && (
                    <div className="mt-3 pt-2.5 border-t border-[#3e394d] flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-[10px] font-cinzel font-semibold">
                        <Sparkles className="w-2.5 h-2.5 text-[#ffd700] animate-pulse" />
                        <span>{lang === 'de' ? 'Aktuell B1 in Vorbereitung' : 'Pursuing CEFR B1'}</span>
                      </div>

                      {onOpenTelcCert && (
                        <button
                          onClick={() => {
                            onOpenTelcCert();
                            wizardAudio.playWandSpark();
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] text-[11px] font-cinzel font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>{lang === 'de' ? 'telc-Zertifikat ansehen' : 'View telc Certificate'}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
