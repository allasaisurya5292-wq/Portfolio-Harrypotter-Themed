import React from 'react';
import { Sparkles, MessageSquare, Newspaper, ExternalLink, GitBranch, CheckCircle2, Award, Zap } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface QuestsProjectsProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  isLevitating: boolean;
}

export const QuestsProjects: React.FC<QuestsProjectsProps> = ({
  lang,
  houseTheme,
  isLevitating,
}) => {
  const projects = RESUME_DATA.projects;

  return (
    <section id="quests" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a26] border border-[#d4af37]/40 text-[#ffd700] text-xs font-cinzel mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Triwizard Tasks & Artifact Engineering' : 'Trimagische Aufgaben & Software-Projekte'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#f4ecd8] mb-3">
          {lang === 'en' ? 'Featured Software & AI Projects' : 'Ausgewählte Projekte & Veröffentlichungen'}
        </h2>
        <p className="font-parchment text-base sm:text-lg text-[#a89b82] max-w-2xl mx-auto italic">
          {lang === 'en'
            ? 'Production NLP pipelines, WhatsApp real-time webhooks, and conference-published transformer models.'
            : 'Produktionsreife NLP-Pipelines, WhatsApp-Echtzeitintegrationen und publizierte Transformer-Modelle.'}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => {
          const isBert = proj.id === 'bert-fake-news';
          return (
            <div
              key={proj.id}
              onMouseEnter={() => wizardAudio.playWandSpark()}
              className={`parchment-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#d4af37] ${
                isLevitating ? 'animate-magical-float' : ''
              }`}
              style={{
                borderTop: `4px solid ${isBert ? '#946b2d' : '#740001'}`,
              }}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-cinzel px-2.5 py-0.5 rounded-full bg-[#202235] text-[#ffd700] border border-[#d4af37]/40 font-bold">
                    {proj.magicalArtifact}
                  </span>
                  <span className="text-xs font-parchment px-2 py-0.5 rounded bg-[#171926] text-[#b0a38f] border border-[#303348]">
                    {proj.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f2ebd9] mb-3 flex items-center gap-2">
                  {isBert ? <Newspaper className="w-5 h-5 text-[#ffd700]" /> : <MessageSquare className="w-5 h-5 text-[#ffd700]" />}
                  <span>{proj.title}</span>
                </h3>

                {/* Citation/Accuracy Callout if present */}
                {proj.starsOrCitations && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#272115] border border-[#d4af37]/60 text-[#ffd700] text-xs font-cinzel font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#ffd700]" />
                    <span>{proj.starsOrCitations}</span>
                  </div>
                )}

                {/* Description */}
                <p className="font-parchment text-sm sm:text-base text-[#cfc4b0] mb-5 leading-relaxed">
                  {proj.description[lang]}
                </p>

                {/* Key Accomplishments Highlights */}
                <div className="space-y-2.5 mb-6">
                  {proj.highlights[lang].map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-parchment text-[#b8ab95]">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-[#262838] flex flex-wrap items-center gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-cinzel px-2.5 py-1 rounded-md bg-[#131420] border border-[#373a50] text-[#cfc4b0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
