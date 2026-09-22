import React from 'react';
import { X, Unlock, Key, CheckCircle, Zap, Shield, Target, BookOpen } from 'lucide-react';
import { wizardAudio } from '../utils/audio';

interface SecretVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'de';
}

export const SecretVaultModal: React.FC<SecretVaultModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="parchment-card border-2 border-[#d4af37] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(212,175,55,0.25)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202235] text-[#bdae95] hover:text-[#ffd700] hover:bg-[#2b2d42] border border-[#3b3e54]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vault Header */}
        <div className="flex items-center gap-3 border-b border-[#3a3d56] pb-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#231e2c] border border-[#d4af37] flex items-center justify-center text-[#ffd700]">
            <Unlock className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-cinzel px-2 py-0.5 rounded bg-[#2e1d1d] text-[#ff9e9e] border border-[#ff6b6b]/40 font-bold uppercase">
                {lang === 'en' ? 'Unlocked with Alohomora' : 'Mit Alohomora entriegelt'}
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffd700]">
              {lang === 'en' ? 'The Room of Requirement: PM Grimoire' : 'Raum der Wünsche: PM-Methodik'}
            </h3>
            <p className="text-xs font-parchment text-[#a89b82] italic">
              {lang === 'en'
                ? 'Deep dive into Sai Surya Alla’s Agile orchestration & problem-solving playbooks'
                : 'Detaillierter Einblick in Sai Suryas agile Vorgehensweisen und Erfolgsfaktoren'}
            </p>
          </div>
        </div>

        {/* Deep Dive Pillars */}
        <div className="space-y-6">
          {/* Pillar 1: Scope Creep Mitigation */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#303348]">
            <div className="flex items-center gap-2 mb-2 text-[#ffd700]">
              <Shield className="w-4 h-4 text-[#ffd700]" />
              <h4 className="font-cinzel text-sm font-bold">
                {lang === 'en'
                  ? 'How Scope Creep Was Slashed by 30% (NIELIT Healthcare Platform)'
                  : 'Wie Scope Creep um 30 % gesenkt wurde (NIELIT Plattform)'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm font-parchment text-[#cfc4b0] leading-relaxed mb-2">
              {lang === 'en'
                ? 'Coordinating 4+ clinical stakeholders often leads to scope volatility. Sai introduced structured Requirements Engineering workshops, defining clear Acceptance Criteria and a strict Definition of Ready (DoR) before sprint commitment. Change requests were triaged into future sprint backlogs rather than disrupting in-flight delivery.'
                : 'Durch strukturierte Anforderungsworkshops mit 4+ klinischen Stakeholdern wurden klare Akzeptanzkriterien und Definition of Ready etabliert. Neue Änderungswünsche wurden diszipliniert priorisiert, wodurch Scope Creep um 30 % reduziert wurde.'}
            </p>
          </div>

          {/* Pillar 2: 100% On-Time Milestone Delivery */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#303348]">
            <div className="flex items-center gap-2 mb-2 text-[#ffd700]">
              <Target className="w-4 h-4 text-[#ffd700]" />
              <h4 className="font-cinzel text-sm font-bold">
                {lang === 'en'
                  ? '100% On-Time Delivery & 15% Faster Cycles (CourseVita)'
                  : '100 % Pünktliche Sprints & 15 % schnellere Zyklen (CourseVita)'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm font-parchment text-[#cfc4b0] leading-relaxed mb-2">
              {lang === 'en'
                ? 'Across 3 web projects, sprint retrospectives pinpointed bottlenecks in API-frontend handoffs. By establishing Swagger contracts early and running parallel UI mock testing, cycle times dropped by 15%. Daily standups focused strictly on blocker resolution in JIRA.'
                : 'Bei 3 Webprojekten wurden API-Schnittstellen durch Swagger frühzeitig synchronisiert und UI-Tests parallelisiert. Dadurch verkürzte sich die Zykluszeit um 15 %, bei 100 % pünktlicher Meilensteinlieferung.'}
            </p>
          </div>

          {/* Pillar 3: ML Vector Optimization */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#303348]">
            <div className="flex items-center gap-2 mb-2 text-[#ffd700]">
              <Zap className="w-4 h-4 text-[#ffd700]" />
              <h4 className="font-cinzel text-sm font-bold">
                {lang === 'en'
                  ? '+25% Throughput in Python/Flask ML Pipelines'
                  : '+25 % Durchsatz in Python/Flask ML-Pipelines'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm font-parchment text-[#cfc4b0] leading-relaxed mb-2">
              {lang === 'en'
                ? 'Refactored raw preprocessing loops into vectorized NumPy/Pandas pipelines and optimized Flask serialization for high-frequency healthcare data streaming.'
                : 'Refactoring zeitintensiver Vorverarbeitungsschritte mit vektorisierten NumPy- und Pandas-Pipelines zur Beschleunigung des Vorhersagedurchsatzes um 25 %.'}
            </p>
          </div>
        </div>

        {/* Action Close */}
        <div className="mt-6 pt-4 border-t border-[#3a3d56] flex justify-end">
          <button
            onClick={() => {
              wizardAudio.playQuillSound();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs font-cinzel font-bold bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625]"
          >
            {lang === 'en' ? 'Close Archives' : 'Archiv schließen'}
          </button>
        </div>
      </div>
    </div>
  );
};
