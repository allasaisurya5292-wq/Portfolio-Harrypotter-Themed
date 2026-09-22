import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Scroll, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface AccioResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'de';
  onOpenTelcCert?: () => void;
}

export const AccioResumeModal: React.FC<AccioResumeModalProps> = ({ isOpen, onClose, lang: initialLang, onOpenTelcCert }) => {
  const [lang, setLang] = useState<'en' | 'de'>(initialLang);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const p = RESUME_DATA.personal;

  const handlePrint = () => {
    wizardAudio.playQuillSound();
    window.print();
  };

  const handleCopy = () => {
    const text = `
SAI SURYA ALLA
${p.location} | ${p.phone} | ${p.email} | ${p.linkedin}
${p.nationality[lang]} | ${p.visa[lang]}

PROFIL
${p.bio[lang]}
Target: ${p.targetRole[lang]}

AUSBILDUNG / EDUCATION
• ${RESUME_DATA.education[0].degree[lang]} - ${RESUME_DATA.education[0].institution}, ${RESUME_DATA.education[0].location} (${RESUME_DATA.education[0].period})
• ${RESUME_DATA.education[1].degree[lang]} - ${RESUME_DATA.education[1].institution}, ${RESUME_DATA.education[1].location} (${RESUME_DATA.education[1].period}) | Grade: 9.21 / 10.0 (Top 5%)

BERUFSERFAHRUNG / WORK EXPERIENCE
• ${RESUME_DATA.experiences[0].role[lang]} - ${RESUME_DATA.experiences[0].company} (${RESUME_DATA.experiences[0].period})
${RESUME_DATA.experiences[0].bulletPoints[lang].map(b => '  - ' + b).join('\n')}

• ${RESUME_DATA.experiences[1].role[lang]} - ${RESUME_DATA.experiences[1].company} (${RESUME_DATA.experiences[1].period})
${RESUME_DATA.experiences[1].bulletPoints[lang].map(b => '  - ' + b).join('\n')}

PROJEKTE / PROJECTS
• ${RESUME_DATA.projects[0].title} (${RESUME_DATA.projects[0].tech.join(', ')})
${RESUME_DATA.projects[0].highlights[lang].map(h => '  - ' + h).join('\n')}

• ${RESUME_DATA.projects[1].title} (${RESUME_DATA.projects[1].tech.join(', ')})
${RESUME_DATA.projects[1].highlights[lang].map(h => '  - ' + h).join('\n')}

KENNTNISSE / SKILLS
Project Management: ${RESUME_DATA.skills.projectManagement.items.join(', ')}
Programming: ${RESUME_DATA.skills.programming.items.join(', ')}
Web & APIs: ${RESUME_DATA.skills.webApis.items.join(', ')}
AI & Data: ${RESUME_DATA.skills.dataAi.items.join(', ')}
DevOps & Cloud: ${RESUME_DATA.skills.devOpsCloud.items.join(', ')}
Languages: English C1 (Fluent), German A2 (telc Certified • Pursuing B1), Telugu (Native)

PUBLIKATIONEN & AUSZEICHNUNGEN
• ${RESUME_DATA.awards[0].title[lang]} - ${RESUME_DATA.awards[0].issuer[lang]}
• ${RESUME_DATA.awards[1].title[lang]} - ${RESUME_DATA.awards[1].issuer[lang]}
• ${RESUME_DATA.awards[2].title[lang]} - ${RESUME_DATA.awards[2].issuer[lang]}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    wizardAudio.playWandSpark();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="parchment-paper rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative max-h-[92vh] overflow-y-auto shadow-[0_0_60px_rgba(212,175,55,0.35)] text-[#211a14] border-2 border-[#bfa87a]">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-[#c8b488] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#740001] text-[#ffd700] flex items-center justify-center text-sm font-bold border border-[#d3a625]">
              📜
            </span>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1f170f]">
                {lang === 'en' ? 'Official Resume Scroll (Curriculum Vitae)' : 'Offizieller Lebenslauf (Curriculum Vitae)'}
              </h3>
              <p className="text-xs font-parchment text-[#6e5831] italic">
                {lang === 'en' ? 'Summoned via Accio charm' : 'Per Accio-Zauber herbeigerufen'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Lang switcher */}
            <div className="flex rounded-lg bg-[#ded0b1] p-0.5 border border-[#baaa82]">
              <button
                onClick={() => setLang('de')}
                className={`px-2 py-0.5 rounded text-xs font-cinzel ${
                  lang === 'de' ? 'bg-[#740001] text-[#ffd700] font-bold' : 'text-[#5e4b2a]'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-xs font-cinzel ${
                  lang === 'en' ? 'bg-[#740001] text-[#ffd700] font-bold' : 'text-[#5e4b2a]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-[#ded0b1] hover:bg-[#cfc09f] text-[#3d2e15] border border-[#baaa82] transition-colors"
              title={lang === 'en' ? 'Print or Save as PDF' : 'Drucken oder als PDF speichern'}
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-[#ded0b1] hover:bg-[#cfc09f] text-[#3d2e15] border border-[#baaa82] transition-colors"
              title={lang === 'en' ? 'Copy Resume Text' : 'Text kopieren'}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#ded0b1] hover:bg-[#cfc09f] text-[#3d2e15] border border-[#baaa82] transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-6 font-parchment text-sm sm:text-base leading-relaxed print:p-0">
          {/* Header info */}
          <div className="text-center border-b border-[#c8b488] pb-5">
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1a1309] tracking-wider mb-1">
              Sai Surya Alla
            </h1>
            <p className="text-xs sm:text-sm font-parchment text-[#574426] font-semibold">
              {p.location} | {p.phone} | {p.email} | linkedin.com/in/{p.linkedinHandle}
            </p>
            <p className="text-xs font-parchment text-[#705a33] mt-1 italic">
              {p.nationality[lang]} | {p.visa[lang]}
            </p>
            <div className="mt-2.5 inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981] text-[#065f46] text-xs font-cinzel font-bold">
              <span>⚡ {p.targetRole[lang]}</span>
              <span className="text-[#059669]">•</span>
              <span>{lang === 'en' ? 'Available Immediately (Up to 20h/wk)' : 'Sofort verfügbar (bis 20h/Woche)'}</span>
            </div>
          </div>

          {/* Profil */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Professional Profile' : 'Profil'}
            </h2>
            <p className="text-xs sm:text-sm text-[#2b2216] leading-relaxed text-justify">
              {p.bio[lang]}
            </p>
          </div>

          {/* Ausbildung */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Education' : 'Ausbildung'}
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-cinzel text-sm font-bold text-[#1a1309]">
                    {RESUME_DATA.education[0].degree[lang]}
                  </h3>
                  <span className="text-xs text-[#6e5831] font-bold">10/2025 – {lang === 'en' ? 'present' : 'heute'}</span>
                </div>
                <p className="text-xs text-[#4d3c22]">
                  {RESUME_DATA.education[0].institution}, {RESUME_DATA.education[0].location}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-cinzel text-sm font-bold text-[#1a1309]">
                    {RESUME_DATA.education[1].degree[lang]}
                  </h3>
                  <span className="text-xs text-[#6e5831] font-bold">08/2021 – 05/2025</span>
                </div>
                <p className="text-xs text-[#4d3c22]">
                  {RESUME_DATA.education[1].institution}, {RESUME_DATA.education[1].location}
                </p>
                <p className="text-xs text-[#5c4728] italic font-semibold">
                  • {lang === 'en' ? 'Graduation Grade: 9.21 / 10.0 (~1.3 German scale); Top 5% of class cohort' : 'Abschlussnote: 9,21 / 10,0 (ca. 1,3 dt. Notenskala); Top 5 % des Jahrgangs'}
                </p>
              </div>
            </div>
          </div>

          {/* Berufserfahrung */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Work Experience' : 'Berufserfahrung'}
            </h2>
            <div className="space-y-4">
              {RESUME_DATA.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-cinzel text-sm font-bold text-[#1a1309]">
                      {exp.role[lang]}
                    </h3>
                    <span className="text-xs text-[#6e5831] font-bold">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#4d3c22] font-semibold mb-1">
                    {exp.company}, {exp.location}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#2b2216]">
                    {exp.bulletPoints[lang].map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projekte */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Projects' : 'Projekte'}
            </h2>
            <div className="space-y-3">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-cinzel text-sm font-bold text-[#1a1309]">
                      {proj.title}
                    </h3>
                    <span className="text-xs text-[#6e5831] font-semibold">{proj.tech.slice(0, 3).join(', ')}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#2b2216]">
                    {proj.highlights[lang].map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Kenntnisse */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Skills' : 'Kenntnisse'}
            </h2>
            <div className="space-y-1.5 text-xs text-[#2b2216]">
              <p>
                <strong className="font-cinzel text-[#1a1309]">{lang === 'en' ? 'Project Management:' : 'Projektmanagement:'}</strong>{' '}
                {RESUME_DATA.skills.projectManagement.items.join(', ')}
              </p>
              <p>
                <strong className="font-cinzel text-[#1a1309]">{lang === 'en' ? 'Programming:' : 'Programmierung:'}</strong>{' '}
                {RESUME_DATA.skills.programming.items.join(', ')}
              </p>
              <p>
                <strong className="font-cinzel text-[#1a1309]">Web & APIs:</strong>{' '}
                {RESUME_DATA.skills.webApis.items.join(', ')}
              </p>
              <p>
                <strong className="font-cinzel text-[#1a1309]">{lang === 'en' ? 'Data & AI:' : 'Daten & KI:'}</strong>{' '}
                {RESUME_DATA.skills.dataAi.items.join(', ')}
              </p>
              <p>
                <strong className="font-cinzel text-[#1a1309]">DevOps & Cloud:</strong>{' '}
                {RESUME_DATA.skills.devOpsCloud.items.join(', ')}
              </p>
              <p className="flex flex-wrap items-center gap-1.5">
                <strong className="font-cinzel text-[#1a1309]">{lang === 'en' ? 'Languages:' : 'Sprachen:'}</strong>{' '}
                <span>
                  {lang === 'en'
                    ? 'English C1 (Fluent) | German A2 (Officially telc Certified • Pursuing B1) | Telugu (Native)'
                    : 'Englisch C1 (fließend) | Deutsch A2 (offiziell telc-zertifiziert • B1 in Vorbereitung) | Telugu (Muttersprache)'}
                </span>
                {onOpenTelcCert && (
                  <button
                    onClick={() => {
                      wizardAudio.playWandSpark();
                      onOpenTelcCert();
                    }}
                    className="ml-1 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625] text-[10px] font-cinzel font-bold cursor-pointer transition-all"
                  >
                    <span>{lang === 'en' ? 'View telc A2 Cert' : 'telc A2-Zertifikat ansehen'}</span>
                  </button>
                )}
              </p>
            </div>
          </div>

          {/* Publikationen & Auszeichnungen */}
          <div>
            <h2 className="font-cinzel text-base font-bold text-[#1a1309] border-b border-[#c8b488] pb-0.5 mb-2 uppercase tracking-wide">
              {lang === 'en' ? 'Publications & Awards' : 'Publikationen & Auszeichnungen'}
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#2b2216]">
              <li>
                <strong>{lang === 'en' ? 'Certification:' : 'Zertifizierung:'}</strong>{' '}
                {lang === 'en' 
                  ? 'Official telc German A2 Language Certificate (Start Deutsch 2) – telc gGmbH, Ingolstadt (Score: 36.5/60). Pursuing CEFR B1.'
                  : 'Offizielles telc-Sprachzertifikat Deutsch A2 (Start Deutsch 2) – telc gGmbH, Ingolstadt (36,5/60 Punkte). B1 in Vorbereitung.'}
              </li>
              <li>
                <strong>{lang === 'en' ? 'Publication:' : 'Veröffentlichung:'}</strong> „Fake News Detection using BERT-based NLP Models“ – IRF International Conference, 2024. Peer-reviewed; in 2 Folgepublikationen zitiert.
              </li>
              <li>
                <strong>{lang === 'en' ? 'Winner:' : 'Gewinner –'}</strong> Smart India Hackathon 2024 (Bundesministerium für Bildung, Regierung Indien) – ausgewählt aus 10.000+ Teams.
              </li>
              <li>
                <strong>{lang === 'en' ? 'Winner:' : 'Gewinner –'}</strong> AI for Andhra Police Hackathon 2025 – KI-basierte Lösung für den Strafverfolgungsbereich.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
