import React, { useState } from 'react';
import { 
  Briefcase, CheckCircle2, Copy, Check, Mail, Phone, ExternalLink, 
  Download, Sparkles, MapPin, Clock, ShieldCheck, FileText, Award, 
  Cpu, Code, Kanban, Cloud, ArrowRight, BookOpen
} from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface RecruiterFastTrackProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenResume: () => void;
  onOpenTelcCert: () => void;
}

export const RecruiterFastTrack: React.FC<RecruiterFastTrackProps> = ({
  lang,
  houseTheme,
  onOpenResume,
  onOpenTelcCert,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [activeTrack, setActiveTrack] = useState<'ai' | 'swe' | 'pm' | 'cloud'>('ai');

  const p = RESUME_DATA.personal;

  const handleCopySummary = () => {
    wizardAudio.playWandSpark();
    const summaryText = lang === 'en'
      ? `CANDIDATE SUMMARY - SAI SURYA ALLA:
• Student: Sai Surya Alla (M.Sc. Artificial Intelligence, OTH Amberg-Weiden, Germany)
• Looking for: Working Student (Werkstudent) role (15–20h/week during semester, up to 40h/week during breaks)
• Focus Areas: AI/ML Engineering | Full-Stack Software Development | IT Project Coordination | Cloud & DevOps
• Background Highlights:
  - Smart India Hackathon 2024: 1st prize nationwide team project (voice-to-text medical assistant prototype)
  - Agile PM Internship at CourseVita: Hands-on sprint backlog management, user stories in Jira, and team coordination
  - NLP Research: Co-authored peer-reviewed paper on BERT text classification
• Languages: English (Fluent, C1) | German (telc A2 certified, currently studying for B1) | Telugu (Native)
• Work Authorization: German Student Visa (§ 16b, up to 140 full / 280 half days per year)
• Location: Bavaria (Amberg / Nuremberg / Regensburg / Munich) & open to remote or hybrid
• Contact: allasaisurya5292@gmail.com | +49 175 7408006 | linkedin.com/in/saisurya2818
Always happy to connect, learn, and contribute to your team!`
      : `KURZPROFIL - SAI SURYA ALLA:
• Student: Sai Surya Alla (M.Sc. Künstliche Intelligenz, OTH Amberg-Weiden)
• Gesucht: Werkstudentenstelle in Deutschland (15–20 Std./Woche im Semester, bis 40 Std./Woche in den Semesterferien)
• Themenbereiche: KI/Machine Learning | Full-Stack Softwareentwicklung | IT-Projektunterstützung | Cloud & DevOps
• Erfahrungen & Stationen:
  - Smart India Hackathon 2024: 1. Platz im Team (Sprach-zu-Text-Prototyp für medizinische Dokumentation)
  - Agile PM Praktikant bei CourseVita: Sprint-Backlogs, User Stories in Jira und enge Zusammenarbeit im Entwicklerteam
  - NLP-Forschung: Mitautor eines begutachteten Papers zu BERT-Textklassifikation
• Sprachen: Englisch (fließend, C1) | Deutsch (telc A2 zertifiziert, fleißig am Lernen für B1) | Telugu (Muttersprache)
• Arbeitserlaubnis: Gültiges deutsches Studienvisum (§ 16b, 140 volle / 280 halbe Tage pro Jahr)
• Einsatzort: Bayern (Amberg / Nürnberg / Regensburg / München) sowie offen für Remote & Hybrid
• Kontakt: allasaisurya5292@gmail.com | +49 175 7408006 | linkedin.com/in/saisurya2818
Ich freue mich über jede Gelegenheit, mich einzubringen und ein nettes Team kennenzulernen!`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#10b981', '#ffffff'],
    });

    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const tracks = [
    {
      id: 'ai' as const,
      icon: Cpu,
      title: {
        en: 'AI & Machine Learning Engineer',
        de: 'Werkstudent KI & Machine Learning',
      },
      tag: 'GenAI • LLMs • PyTorch • NLP',
      summary: {
        en: 'Production LLMs, BERT text classifiers, RAG architectures, prompt engineering, and deep learning pipelines.',
        de: 'Produktionseinsatz von LLMs, BERT-Klassifikatoren, RAG-Architekturen, Prompt Engineering und Deep Learning Pipelines.',
      },
      skills: ['Python', 'PyTorch', 'BERT / Transformers', 'Hugging Face', 'Scikit-Learn', 'OpenCV', 'Pandas', 'RAG'],
    },
    {
      id: 'swe' as const,
      icon: Code,
      title: {
        en: 'Full-Stack Software Engineer',
        de: 'Werkstudent Softwareentwicklung (Full-Stack)',
      },
      tag: 'TypeScript • React • Node • APIs',
      summary: {
        en: 'High-performance React/Next.js interfaces, robust Node.js/Express REST microservices, clean TypeScript architectures.',
        de: 'Performante React/Next.js Frontends, skalierbare Node.js/Express REST-Microservices, saubere TypeScript-Architekturen.',
      },
      skills: ['TypeScript', 'React.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'PostgreSQL', 'Git'],
    },
    {
      id: 'pm' as const,
      icon: Kanban,
      title: {
        en: 'IT Project Manager & Agile PM',
        de: 'Werkstudent IT-Projektmanagement & Agile PM',
      },
      tag: 'Scrum • Jira • PRDs • Sprint Leadership',
      summary: {
        en: 'Sprint backlog grooming, user stories, PRD creation, Jira tracking, and cross-functional team coordination.',
        de: 'Sprint-Grooming, User Stories, PRDs, Jira-Tracking und cross-funktionale Koordination von Entwicklerteams.',
      },
      skills: ['Jira', 'Confluence', 'Agile / Scrum', 'Sprint Planning', 'PRD Writing', 'Stakeholder Communication'],
    },
    {
      id: 'cloud' as const,
      icon: Cloud,
      title: {
        en: 'Cloud, Data & DevOps Engineer',
        de: 'Werkstudent Cloud, Data & DevOps',
      },
      tag: 'GCP • Docker • Kubernetes • CI/CD',
      summary: {
        en: 'Docker containerization, Google Cloud Platform deployments, CI/CD pipeline automation, and structured databases.',
        de: 'Docker Containerisierung, Google Cloud Platform Bereitstellungen, CI/CD Automatisierung und strukturierte Datenbanken.',
      },
      skills: ['Google Cloud', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux', 'SQL', 'Git & GitHub'],
    },
  ];

  return (
    <section id="recruiter-fast-track" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Recruiter Fast-Track Parchment Card */}
      <div className="parchment-card rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden">
        
        {/* Top Floating Golden Seal / Beacon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#c8b488]/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#740001] to-[#990002] border-2 border-[#ffd700] flex items-center justify-center text-2xl shadow-lg">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#ffd700] bg-[#1a1c2e] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
                  {lang === 'en' ? 'Working Student Opportunities' : 'Werkstudentenstellen'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#10b981]/20 border border-[#10b981] text-[#34d399] text-xs font-cinzel font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>{lang === 'en' ? 'Open to Opportunities' : 'Offen für Stellen'}</span>
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#f5ede0] mt-1">
                {lang === 'en'
                  ? 'Interested in Working Together? Let’s Connect!'
                  : 'Interesse an einer Zusammenarbeit? Ich freue mich auf den Kontakt!'}
              </h2>
            </div>
          </div>

          {/* Quick Action Copy Summary Button */}
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffd700] hover:bg-[#ffea75] text-[#121420] font-cinzel text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
            title={lang === 'en' ? 'Copy Quick Profile Summary' : 'Kurzprofil kopieren'}
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4 text-[#065f46]" />
                <span className="text-[#065f46] font-extrabold">
                  {lang === 'en' ? 'Summary Copied!' : 'Profil kopiert!'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{lang === 'en' ? 'Copy Quick Profile Summary' : 'Kurzprofil kopieren'}</span>
              </>
            )}
          </button>
        </div>

        {/* Key Employment & Compliance Facts (Crucial for German Recruiters) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          
          {/* Work Permit */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#2e334d] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-cinzel font-bold text-[#8e98b5] uppercase block">
                {lang === 'en' ? 'Work Permit Status' : 'Arbeitserlaubnis'}
              </span>
              <p className="text-xs font-bold text-[#e6dfd1] mt-0.5">
                {lang === 'en' ? 'Valid Student Visa (Germany)' : 'Gültiges Studienvisum (§ 16b)'}
              </p>
              <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5">
                {lang === 'en' ? '140 full / 280 half days per year legal quota' : '140 ganze / 280 halbe Tage pro Jahr'}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#2e334d] flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-cinzel font-bold text-[#8e98b5] uppercase block">
                {lang === 'en' ? 'Available Hours' : 'Arbeitszeit'}
              </span>
              <p className="text-xs font-bold text-[#e6dfd1] mt-0.5">
                {lang === 'en' ? '15–20 hrs/week' : '15–20 Std./Woche'}
              </p>
              <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5">
                {lang === 'en' ? 'Up to 40 hrs/week in semester breaks' : 'Bis 40 Std./Woche in den Semesterferien'}
              </p>
            </div>
          </div>

          {/* Location & Relocation */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#2e334d] flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-cinzel font-bold text-[#8e98b5] uppercase block">
                {lang === 'en' ? 'Location & Modes' : 'Standort & Flexibilität'}
              </span>
              <p className="text-xs font-bold text-[#e6dfd1] mt-0.5">
                Bayern / Amberg / Remote
              </p>
              <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5">
                {lang === 'en' ? 'On-site, Hybrid & Remote anywhere in Germany' : 'Vor Ort, Hybrid oder Remote bundesweit'}
              </p>
            </div>
          </div>

          {/* Languages & Integration */}
          <div className="p-4 rounded-xl bg-[#141624] border border-[#2e334d] flex items-start gap-3">
            <Award className="w-5 h-5 text-[#ec4899] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-cinzel font-bold text-[#8e98b5] uppercase block">
                {lang === 'en' ? 'Languages' : 'Sprachkenntnisse'}
              </span>
              <p className="text-xs font-bold text-[#e6dfd1] mt-0.5 flex items-center gap-1">
                <span>🇩🇪 A2 (telc)</span>
                <span className="text-[#ffd700] text-[10px]">• B1 in progress</span>
              </p>
              <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5">
                🇬🇧 English C1 (Fluent)
              </p>
            </div>
          </div>

        </div>

        {/* Target Working Student Roles - Interactive Tabs */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5ede0]">
                {lang === 'en'
                  ? 'Areas I Would Love to Support You In'
                  : 'Bereiche, in denen ich Sie gerne unterstütze'}
              </h3>
              <p className="text-xs text-[#a89b82] font-parchment">
                {lang === 'en'
                  ? 'Click each track to see relevant frameworks, tools, and hands-on projects.'
                  : 'Klicken Sie auf einen Bereich, um relevante Frameworks, Tools und praktische Erfahrungen zu sehen.'}
              </p>
            </div>
          </div>

          {/* Role Filter Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {tracks.map((t) => {
              const Icon = t.icon;
              const isActive = activeTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrack(t.id);
                    wizardAudio.playQuillSound();
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? 'bg-[#202438] border-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.2)]'
                      : 'bg-[#141624] border-[#2c3047] hover:border-[#4d5378]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#740001] text-[#ffd700]' : 'bg-[#23273c] text-[#8e98b5]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />}
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-xs text-[#e6dfd1] leading-tight">
                      {t.title[lang]}
                    </h4>
                    <span className="text-[10px] text-[#ffd700] font-parchment block mt-0.5">
                      {t.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Track Highlight Details Card */}
          {(() => {
            const current = tracks.find((t) => t.id === activeTrack)!;
            const Icon = current.icon;
            return (
              <div className="p-5 rounded-2xl bg-[#171928] border border-[#3e4363] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#740001] text-[#ffd700] border border-[#d3a625]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-cinzel font-bold text-base text-[#ffd700]">
                        {current.title[lang]}
                      </h4>
                      <p className="text-xs text-[#c4b59d] font-parchment">
                        {current.summary[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {current.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#25283c] border border-[#444866] text-xs font-parchment text-[#e0d7c7] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
                  <a
                    href={`mailto:${p.email}?subject=${encodeURIComponent(
                      lang === 'en'
                        ? `Getting in Touch: Working Student Opportunity - Sai Surya Alla`
                        : `Kennenlernen: Werkstudentenstelle - Sai Surya Alla`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] font-cinzel text-xs font-bold shadow-md transition-all active:scale-95 text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Get in Touch / Say Hello' : 'Kontakt aufnehmen / Kennenlernen'}</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Background & Experiences (4 Friendly Proof Points) */}
        <div className="mt-8 pt-6 border-t border-[#c8b488]/30">
          <h4 className="font-cinzel font-bold text-sm sm:text-base text-[#ffd700] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <span>{lang === 'en' ? 'A Little More About My Journey & Experiences' : 'Ein kleiner Einblick in meinen Werdegang & Erfahrungen:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Hackathon Champion */}
            <div className="p-3.5 rounded-xl bg-[#141624] border border-[#2b2f45] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#ffd700]/10 border border-[#ffd700]/40 flex items-center justify-center text-[#ffd700] flex-shrink-0">
                🏆
              </div>
              <div>
                <h5 className="font-cinzel text-xs font-bold text-[#e6dfd1]">
                  {lang === 'en' ? 'Smart India Hackathon 2024 (Team 1st Prize)' : 'Smart India Hackathon 2024 (1. Platz im Team)'}
                </h5>
                <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5 leading-relaxed">
                  {lang === 'en'
                    ? 'Collaborated closely with an enthusiastic team to prototype an AI speech-to-text medical reporting assistant under tight timelines. A wonderful team and learning experience.'
                    : 'Zusammenarbeit im Team bei der Entwicklung eines KI-Sprach-zu-Text-Prototyps für Arztberichte unter realem Zeitdruck. Eine tolle Team- und Lernerfahrung.'}
                </p>
              </div>
            </div>

            {/* 2. Agile Project Management Experience */}
            <div className="p-3.5 rounded-xl bg-[#141624] border border-[#2b2f45] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                ⚡
              </div>
              <div>
                <h5 className="font-cinzel text-xs font-bold text-[#e6dfd1]">
                  {lang === 'en' ? 'Agile PM Internship at CourseVita' : 'Praktikum im agilen Projektmanagement bei CourseVita'}
                </h5>
                <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5 leading-relaxed">
                  {lang === 'en'
                    ? 'Helped manage sprint backlogs, authored clear user stories in Jira, and worked directly alongside developers and product mentors to learn agile coordination.'
                    : 'Unterstützung beim Sprint-Backlog-Management, Verfassen von User Stories in Jira und direkte Zusammenarbeit mit Entwicklern und Mentoren im agilen Projektalltag.'}
                </p>
              </div>
            </div>

            {/* 3. Peer-Reviewed AI Research */}
            <div className="p-3.5 rounded-xl bg-[#141624] border border-[#2b2f45] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#a855f7]/10 border border-[#a855f7]/40 flex items-center justify-center text-[#a855f7] flex-shrink-0">
                🔬
              </div>
              <div>
                <h5 className="font-cinzel text-xs font-bold text-[#e6dfd1]">
                  {lang === 'en' ? 'NLP Research with BERT Transformers' : 'Wissenschaftliche Arbeit zu BERT & NLP'}
                </h5>
                <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5 leading-relaxed">
                  {lang === 'en'
                    ? 'Co-authored a research paper exploring BERT models for text classification. A fun research project that deepened my enthusiasm for applied NLP.'
                    : 'Mitautor einer wissenschaftlichen Arbeit zur Textklassifikation mittels BERT-Modellen – ein spannendes Projekt, das mein Interesse an angewandter KI vertieft hat.'}
                </p>
              </div>
            </div>

            {/* 4. German Integration & telc Certified */}
            <div className="p-3.5 rounded-xl bg-[#141624] border border-[#2b2f45] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#10b981]/10 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] flex-shrink-0">
                🇩🇪
              </div>
              <div>
                <h5 className="font-cinzel text-xs font-bold text-[#e6dfd1]">
                  {lang === 'en' ? 'telc A2 Certified • Actively Learning German B1' : 'telc A2 zertifiziert • Fleißig am Lernen für B1'}
                </h5>
                <p className="text-[11px] text-[#9ca3af] font-parchment mt-0.5 leading-relaxed">
                  {lang === 'en'
                    ? 'Completed the telc A2 exam in Ingolstadt and consistently studying to reach B1. I love practicing German and speaking with colleagues in daily team life!'
                    : 'telc A2-Zertifikat in Ingolstadt absolviert und kontinuierlich am Lernen für B1. Ich freue mich darauf, im Team Deutsch zu sprechen und dazuzulernen!'}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Bar for Recruiters */}
        <div className="mt-8 pt-6 border-t border-[#c8b488]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Accio Resume Button */}
            <button
              onClick={() => {
                wizardAudio.playAccio();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] font-cinzel text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Complete Resume (CV)' : 'Lebenslauf (CV) ansehen'}</span>
            </button>

            {/* View telc Certificate */}
            <button
              onClick={() => {
                wizardAudio.playWandSpark();
                onOpenTelcCert();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1b261d] hover:bg-[#233526] text-[#a7f3d0] border border-[#059669]/60 font-cinzel text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>🇩🇪</span>
              <span>{lang === 'en' ? 'View Official telc A2 Cert' : 'telc A2-Zertifikat prüfen'}</span>
            </button>
          </div>

          {/* Direct Quick Contact Links */}
          <div className="flex items-center gap-4 text-xs font-cinzel text-[#c4b59d]">
            <a
              href={`mailto:${p.email}`}
              className="flex items-center gap-1.5 text-[#ffd700] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{p.email}</span>
            </a>
            <span className="text-[#685c43]">•</span>
            <a
              href={`tel:${p.phone}`}
              className="flex items-center gap-1.5 text-[#ffd700] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{p.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
