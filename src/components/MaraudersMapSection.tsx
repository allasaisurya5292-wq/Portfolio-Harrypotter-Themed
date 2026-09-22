import React, { useState } from 'react';
import { Footprints, Map, Sparkles, EyeOff } from 'lucide-react';
import { wizardAudio } from '../utils/audio';

interface MaraudersMapSectionProps {
  lang: 'en' | 'de';
}

export const MaraudersMapSection: React.FC<MaraudersMapSectionProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMap = () => {
    if (!isOpen) {
      wizardAudio.playCelestaNote(659.25, 0.5, 0.8);
      wizardAudio.playQuillSound();
      setIsOpen(true);
    } else {
      wizardAudio.playCelestaNote(493.88, 0.5, 0.8);
      setIsOpen(false);
    }
  };

  const steps = [
    {
      num: "01",
      title: lang === 'en' ? 'Clinical & Stakeholder Inception' : 'Stakeholder-Anforderungsanalyse',
      desc: lang === 'en' ? 'Elicited requirements from 4+ key figures; built DoR to cut scope creep 30%.' : 'Anforderungsanalyse mit 4+ Stakeholdern; 30 % weniger Scope Creep.',
      loc: 'Calicut & NIELIT Wing'
    },
    {
      num: "02",
      title: lang === 'en' ? 'Vectorized Preprocessing' : 'Vektorisierte ML-Pipelines',
      desc: lang === 'en' ? 'Refactored Python/Flask data flows to increase model throughput by 25%.' : 'Python & Flask Workflows optimiert; +25 % Vorhersagedurchsatz.',
      loc: 'ML Laboratory'
    },
    {
      num: "03",
      title: lang === 'en' ? 'Agile Delivery Cadence' : 'Agile Sprint-Steuerung',
      desc: lang === 'en' ? 'Facilitated Standups & Grooming across 3 web deliveries in JIRA.' : 'Stand-ups, Retrospektiven & Sprint-Planungen für 3 Webprojekte.',
      loc: 'CourseVita Tower'
    },
    {
      num: "04",
      title: lang === 'en' ? 'Synchronized API & UI QA' : 'API- & UI-Testing Synchronisation',
      desc: lang === 'en' ? 'Pre-tested Swagger schemas to shave 15% off sprint cycle duration.' : 'API-Integration und UI-Testing optimiert; 15 % kürzere Sprintzyklen.',
      loc: 'Integration Corridor'
    },
    {
      num: "05",
      title: lang === 'en' ? '100% On-Time Milestone Arrival' : '100 % Pünktliche Meilensteinlieferung',
      desc: lang === 'en' ? 'Strict risk registers & team coordination ensuring zero sprint delays.' : 'Null Verzug bei allen Sprints durch strukturiertes Risikomanagement.',
      loc: 'Great Hall of Delivery'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="parchment-paper rounded-2xl p-6 sm:p-8 border-2 border-[#bfa87a] shadow-xl text-center relative overflow-hidden">
        {/* Footprint watermark background */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Footprints className="w-5 h-5 text-[#8c6b2d] animate-bounce" />
          <h3 className="font-cinzel-dec text-xl sm:text-2xl font-bold text-[#231a10]">
            {isOpen
              ? (lang === 'en' ? 'THE MARAUDER\'S PROJECT MAP' : 'DIE KARTE DES RUMTREIBERS')
              : (lang === 'en' ? 'Messrs. Moony, Wormtail, Padfoot & Prongs' : 'Die Herren Moony, Wurmschwanz, Tatze und Krone')}
          </h3>
        </div>

        <p className="font-parchment text-xs sm:text-sm text-[#66522f] italic max-w-xl mx-auto mb-5">
          {isOpen
            ? (lang === 'en'
              ? 'Tracking Sai Surya Alla’s footsteps through the agile project corridors of Healthcare AI & Web delivery.'
              : 'Verfolge Sai Surya Allas Pfad durch die Projektkorridore von Healthcare-KI und Webentwicklung.')
            : (lang === 'en'
              ? '“I solemnly swear that I am up to no good.” Tap below to reveal the interactive project coordination map.'
              : '„Ich schwöre feierlich, dass ich ein Tunichtgut bin.“ Klicke, um den agilen Projektverlauf offenzulegen.')}
        </p>

        {/* Toggle Button */}
        <button
          id="btn-marauders-map-toggle"
          onClick={toggleMap}
          className="px-5 py-2.5 rounded-xl font-cinzel text-xs font-bold bg-[#261f16] text-[#ffd700] hover:bg-[#382d20] border border-[#d4af37] shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
        >
          {isOpen ? <EyeOff className="w-4 h-4" /> : <Map className="w-4 h-4" />}
          <span>
            {isOpen
              ? (lang === 'en' ? '“Mischief Managed” (Fold Map)' : '„Unheil angerichtet“ (Karte schließen)')
              : (lang === 'en' ? '“I solemnly swear that I am up to no good”' : '„Ich schwöre feierlich, dass ich ein Tunichtgut bin“')}
          </span>
        </button>

        {/* Revealed Map Content */}
        {isOpen && (
          <div className="mt-8 pt-6 border-t-2 border-dashed border-[#bfa87a] text-left transition-all duration-700 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {steps.map((st, i) => (
                <div
                  key={st.num}
                  className="p-3.5 rounded-xl bg-[#ebdfc4] border border-[#cfbd97] relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-cinzel text-[#8f6d2b] font-bold mb-1">
                      <span>STEP {st.num}</span>
                      <Footprints className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-cinzel text-xs font-bold text-[#1f170e] mb-1.5 leading-tight">
                      {st.title}
                    </h4>
                    <p className="text-[11px] font-parchment text-[#4f3f27] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#d8c8a7] text-[10px] font-medieval text-[#705831] italic">
                    📍 {st.loc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
