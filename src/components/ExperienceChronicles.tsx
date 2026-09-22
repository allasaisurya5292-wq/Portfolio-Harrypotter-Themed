import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Users, TrendingUp, CheckCircle, ShieldAlert, Sparkles, Clock, Target } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface ExperienceChroniclesProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  isLevitating: boolean;
}

export const ExperienceChronicles: React.FC<ExperienceChroniclesProps> = ({
  lang,
  houseTheme,
  isLevitating,
}) => {
  const experiences = RESUME_DATA.experiences;

  return (
    <section id="chronicles" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a26] border border-[#d4af37]/40 text-[#ffd700] text-xs font-cinzel mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Ministry Records & IT Guild Chronicles' : 'Ministeriumsakten & IT-Gilden-Chroniken'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#f4ecd8] mb-3">
          {lang === 'en' ? 'Professional Experience' : 'Berufserfahrung & Projektkoordination'}
        </h2>
        <p className="font-parchment text-base sm:text-lg text-[#a89b82] max-w-2xl mx-auto italic">
          {lang === 'en'
            ? 'Hands-on experiences collaborating with development teams, supporting agile sprints, and working with machine learning workflows.'
            : 'Praktische Erfahrungen in der Zusammenarbeit mit Entwicklerteams, Unterstützung in agilen Sprints und Arbeit an Machine-Learning-Pipelines.'}
        </p>
      </motion.div>

      {/* Key Metric Highlights Band */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
        {[
          {
            val: '-30%',
            labelEn: 'Scope Creep',
            labelDe: 'Scope-Änderungen',
            subEn: 'Requirements Engineering',
            subDe: 'Strukturiertes Management',
          },
          {
            val: '100%',
            labelEn: 'On-Time Sprints',
            labelDe: 'Pünktliche Sprints',
            subEn: 'Zero Milestone Delays',
            subDe: 'JIRA Meilensteinlieferung',
          },
          {
            val: '+25%',
            labelEn: 'ML Throughput',
            labelDe: 'ML-Durchsatz',
            subEn: 'Python / Flask Pipelines',
            subDe: 'Optimierte Vorverarbeitung',
          },
          {
            val: '-15%',
            labelEn: 'Cycle Duration',
            labelDe: 'Sprint-Zykluszeit',
            subEn: 'API & UI Testing Sync',
            subDe: 'Prozessoptimierung',
          },
        ].map((metric, mIdx) => (
          <motion.div
            key={mIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: mIdx * 0.08, ease: 'easeOut' }}
            className="parchment-card rounded-xl p-4 text-center border-t-2 border-t-[#d4af37]"
          >
            <div className="text-2xl sm:text-3xl font-cinzel font-bold text-[#ffd700] mb-0.5">{metric.val}</div>
            <div className="text-xs font-cinzel text-[#8f836f] uppercase">
              {lang === 'en' ? metric.labelEn : metric.labelDe}
            </div>
            <div className="text-[11px] font-parchment text-[#bdae95] mt-1 italic">
              {lang === 'en' ? metric.subEn : metric.subDe}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline Cards with Scroll-Triggered Fly-In From Left Animation */}
      <div className="relative pl-0 md:pl-6 md:border-l-2 md:border-[#d4af37]/30 space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.75,
              delay: idx * 0.18,
              ease: [0.22, 1, 0.36, 1], // Smooth swooping curve for genuine fly-in effect
            }}
            onMouseEnter={() => wizardAudio.playWandSpark()}
            className={`parchment-card rounded-2xl p-6 sm:p-8 transition-shadow duration-300 relative ${
              isLevitating ? 'animate-magical-float' : ''
            }`}
            style={{
              borderLeft: `4px solid ${houseTheme.borderGold}`,
            }}
          >
            {/* Timeline node pin on md+ screens */}
            <div
              className="hidden md:flex absolute -left-[35px] top-8 w-5 h-5 rounded-full border-2 items-center justify-center shadow-lg"
              style={{
                backgroundColor: houseTheme.primary,
                borderColor: houseTheme.borderGold,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-ping" />
            </div>

            {/* Header: Role, Period, Location */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#2d3042] pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-cinzel px-2.5 py-0.5 rounded-full bg-[#202235] text-[#ffd700] border border-[#d4af37]/40 font-bold">
                    {exp.magicalTitle[lang]}
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f2ebd9]">
                  {exp.role[lang]}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-parchment text-[#bdae95]">
                  <span className="font-bold text-[#d4af37] text-sm">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span className="italic text-[#9e917d]">{exp.department}</span>
                </div>
              </div>

              {/* Period badge */}
              <div className="flex items-center gap-2 self-start md:self-center px-3.5 py-1.5 rounded-lg bg-[#141624] border border-[#3c4059] text-xs font-cinzel text-[#dcd2be]">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullet Points with Wizard Quill Embellishments */}
            <ul className="space-y-3 mb-6">
              {exp.bulletPoints[lang].map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base font-parchment text-[#d1c6b2] leading-relaxed">
                  <span className="text-[#d4af37] text-base leading-none mt-1">✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Metrics Chips & Skill Runes */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#262838]">
              {/* Quantified Accomplishments */}
              <div className="flex flex-wrap items-center gap-2">
                {exp.metrics.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-xs font-cinzel font-semibold px-2.5 py-1 rounded-md bg-[#25201b] border border-[#a88234]/60 text-[#ffd700]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Technologies & Runes */}
              <div className="flex flex-wrap items-center gap-1.5">
                {exp.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-cinzel px-2 py-0.5 rounded bg-[#13141f] border border-[#34374b] text-[#9f947e]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
