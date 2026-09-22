import React from 'react';
import { Scroll, Sparkles, MapPin, Mail, Phone, Linkedin, Download, Music, Feather, CheckCircle2, Briefcase, ShieldCheck } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';
import { WizardPortrait } from './WizardPortrait';

interface HeroLetterProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenResume: () => void;
  onOpenOwlPost: () => void;
  onPlayMusic: () => void;
  isMusicPlaying: boolean;
  onOpenTelcCert?: () => void;
}

export const HeroLetter: React.FC<HeroLetterProps> = ({
  lang,
  houseTheme,
  onOpenResume,
  onOpenOwlPost,
  onPlayMusic,
  isMusicPlaying,
  onOpenTelcCert,
}) => {
  const p = RESUME_DATA.personal;

  return (
    <section id="acceptance-letter" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Hogwarts Acceptance Parchment Document */}
      <div className="parchment-paper rounded-2xl p-6 sm:p-10 lg:p-12 relative shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
        
        {/* Wax Seal Badge in corner */}
        <div
          className="absolute -top-6 right-8 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl flex flex-col items-center justify-center cursor-pointer border-2 border-[#f7e4a1] transition-transform hover:scale-110 active:scale-95 z-10"
          style={{ backgroundColor: houseTheme.primary }}
          onClick={() => {
            wizardAudio.playCelestaNote(880, 0.8, 1.0);
            wizardAudio.playWandSpark();
          }}
          title={lang === 'en' ? 'Authentic Hogwarts Wax Seal' : 'Echtes Hogwarts-Wachssiegel'}
        >
          <span className="text-2xl sm:text-3xl filter drop-shadow">⚡</span>
          <span className="text-[9px] sm:text-[10px] text-[#ffd700] font-cinzel font-bold tracking-tighter uppercase">
            Hogwarts
          </span>
        </div>

        {/* Professional Academic Letterhead Header with Wizard Portrait */}
        <div className="border-b-2 border-[#bfa87a] pb-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            {/* Clear Enchanted Photo Portrait */}
            <div className="flex-shrink-0">
              <WizardPortrait lang={lang} size="md" />
            </div>

            {/* Candidate Credentials */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#10b981]/20 border border-[#10b981] text-[#065f46] text-xs font-cinzel font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>{lang === 'en' ? 'Actively Seeking Working Student Role' : 'Sucht Werkstudentenstelle'}</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#740001]/15 border border-[#740001]/40 text-[#740001] text-xs font-cinzel font-semibold">
                  M.Sc. Artificial Intelligence
                </span>
              </div>

              <h2 className="font-cinzel font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wider text-[#1e1710]">
                SAI SURYA ALLA
              </h2>

              <p className="text-xs sm:text-sm font-cinzel font-bold tracking-widest text-[#735728] uppercase mt-1">
                {lang === 'en'
                  ? 'M.Sc. Artificial Intelligence for Industrial Applications • OTH Amberg-Weiden'
                  : 'M.Sc. Künstliche Intelligenz für industrielle Anwendungen • OTH Amberg-Weiden'}
              </p>

              <p className="text-xs font-parchment text-[#57442a] mt-1">
                Ostbayerische Technische Hochschule (OTH) Amberg-Weiden, Deutschland
              </p>

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 mt-2.5 text-xs font-parchment text-[#6e5835] font-semibold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#735728]" />
                  <span>Amberg, Deutschland</span>
                </span>
                <span>•</span>
                <button
                  onClick={() => {
                    if (onOpenTelcCert) {
                      wizardAudio.playWandSpark();
                      onOpenTelcCert();
                    }
                  }}
                  className="inline-flex items-center gap-1 text-[#740001] hover:text-[#9e0002] font-bold hover:underline cursor-pointer"
                  title={lang === 'de' ? 'Offizielles telc A2-Zertifikat ansehen' : 'View official telc A2 certificate'}
                >
                  <span>🇩🇪</span>
                  <span>{lang === 'de' ? 'Deutsch: telc A2 (B1 in Vorbereitung)' : 'German: telc A2 (Pursuing B1)'}</span>
                </button>
                <span>•</span>
                <span className="text-[#065f46] font-bold">
                  {lang === 'en' ? 'Available: 20h/wk (Immediate)' : 'Verfügbar: 20h/Woche (Sofort)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Overview / Intro */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-cinzel font-bold text-[#1f1a14] mb-1">
            {lang === 'en'
              ? 'Student Profile & Professional Focus'
              : 'Studentisches Profil & Beruflicher Schwerpunkt'}
          </h3>
          <p className="text-sm font-parchment text-[#54432c]">
            {lang === 'en'
              ? 'Ostbayerische Technische Hochschule (OTH) Amberg-Weiden • Department of Industrial AI'
              : 'Ostbayerische Technische Hochschule (OTH) Amberg-Weiden • Fakultät für Industrielle KI'}
          </p>
        </div>

        {/* Core Narrative / Bio */}
        <div className="space-y-4 text-[#261f18] text-base sm:text-lg leading-relaxed font-parchment text-justify">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-cinzel first-letter:mr-1 first-letter:float-left first-letter:text-[#740001]">
            {p.bio[lang]}
          </p>

          {/* Highlight Target Role & Recruiter Callout Box */}
          <div className="my-6 p-4 rounded-xl border-2 border-[#bfa87a] bg-gradient-to-r from-[#ebe1c8] via-[#f5edd9] to-[#ebe1c8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#740001] text-[#ffd700] border border-[#d3a625] flex-shrink-0 mt-0.5">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-cinzel font-bold text-[#684e20] uppercase tracking-wider block">
                  {lang === 'en' ? 'Target Position Seeking in Germany' : 'Gesuchte Werkstudentenstelle in Deutschland'}
                </span>
                <span className="text-sm sm:text-base font-cinzel font-bold text-[#1f1910] block">
                  {lang === 'en' 
                    ? 'Working Student: AI & Machine Learning • Full-Stack Software • IT Project Management • Cloud & DevOps'
                    : 'Werkstudent: KI / Machine Learning • Full-Stack Software • IT-Projektmanagement • Cloud & DevOps'}
                </span>
                <p className="text-xs font-parchment text-[#5e4b2d] mt-1">
                  {lang === 'en'
                    ? '15–20h/week during semester, 40h/week during breaks • Valid German Student Visa (§ 16b)'
                    : '15–20 Std./Woche im Semester, bis 40 Std./Woche in den Semesterferien • Gültiges deutsches Studienvisum (§ 16b)'}
                </p>
              </div>
            </div>
            <div className="self-end sm:self-auto flex items-center gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById('recruiter-fast-track');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  wizardAudio.playWandSpark();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] font-cinzel text-xs font-bold shadow-sm transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'en' ? '⚡ Werkstudent Overview' : '⚡ Werkstudenten-Profil'}</span>
              </button>
            </div>
          </div>

          {/* Dual Academic Credentials Accordion/Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {/* OTH Amberg-Weiden */}
            <div className="p-4 rounded-xl bg-[#f2e7cc] border border-[#cfbd97] shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-cinzel font-bold text-[#735728] uppercase">
                  {lang === 'en' ? 'Current Master Studies' : 'Masterstudium (Aktuell)'}
                </span>
                <span className="text-xs font-parchment font-bold text-[#805f24]">10/2025 – {lang === 'en' ? 'present' : 'heute'}</span>
              </div>
              <h4 className="font-cinzel font-bold text-sm sm:text-base text-[#1b150d] mb-1">
                {RESUME_DATA.education[0].degree[lang]}
              </h4>
              <p className="text-xs font-parchment text-[#4a3b25] font-semibold mb-2">
                {RESUME_DATA.education[0].institution} • {RESUME_DATA.education[0].location}
              </p>
              <p className="text-xs font-parchment text-[#57452d] italic">
                {RESUME_DATA.education[0].houseNote[lang]}
              </p>
            </div>

            {/* B.Tech KL University */}
            <div className="p-4 rounded-xl bg-[#f2e7cc] border border-[#cfbd97] shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-cinzel font-bold text-[#735728] uppercase">
                  {lang === 'en' ? 'Bachelor Degree with Honors' : 'Bachelorabschluss mit Auszeichnung'}
                </span>
                <span className="text-xs font-parchment font-bold text-[#805f24]">08/2021 – 05/2025</span>
              </div>
              <h4 className="font-cinzel font-bold text-sm sm:text-base text-[#1b150d] mb-1">
                {RESUME_DATA.education[1].degree[lang]}
              </h4>
              <p className="text-xs font-parchment text-[#4a3b25] font-semibold mb-2">
                {RESUME_DATA.education[1].institution} • {RESUME_DATA.education[1].location}
              </p>
              <div className="flex items-center gap-2 text-xs font-parchment text-[#6b4c19] font-bold">
                <span className="px-2 py-0.5 rounded bg-[#deb868]/30 border border-[#bfa87a]">
                  ★ CGPA: 9.21 / 10.0 (≈ 1,3 Note)
                </span>
                <span className="px-2 py-0.5 rounded bg-[#deb868]/30 border border-[#bfa87a]">
                  Top 5% Cohort
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Links & Badges */}
        <div className="border-t border-[#bfa87a] pt-6 mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-parchment font-bold text-[#4a3a23]">
            <a
              href={`mailto:${p.email}`}
              className="flex items-center gap-1.5 hover:text-[#8b0000] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#8f6d2b]" />
              <span>{p.email}</span>
            </a>
            <a
              href={`tel:${p.phone}`}
              className="flex items-center gap-1.5 hover:text-[#8b0000] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8f6d2b]" />
              <span>{p.phone}</span>
            </a>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0a66c2] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#8f6d2b]" />
              <span>linkedin.com/in/{p.linkedinHandle}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#8f6d2b]" />
              <span>{p.location}</span>
            </span>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {/* Recruiter Fast-Track CTA */}
            <button
              id="hero-recruiter-fast-track-btn"
              onClick={() => {
                const el = document.getElementById('recruiter-fast-track');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                wizardAudio.playWandSpark();
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-cinzel text-xs font-bold bg-[#ffd700] text-[#141624] hover:bg-[#ffe359] border border-[#d4af37] shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-[#740001]" />
              <span>{lang === 'en' ? 'Working Student Info' : 'Werkstudenten-Profil'}</span>
            </button>

            {/* Accio Resume CTA */}
            <button
              id="hero-accio-resume-btn"
              onClick={() => {
                wizardAudio.playAccio();
                onOpenResume();
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-cinzel text-xs font-bold bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625] shadow-md transition-all active:scale-95"
            >
              <Scroll className="w-4 h-4" />
              <span>{lang === 'en' ? 'Accio Resume (CV)' : 'Accio Lebenslauf'}</span>
            </button>

            {/* telc A2 Certificate CTA */}
            {onOpenTelcCert && (
              <button
                id="hero-telc-cert-btn"
                onClick={() => {
                  wizardAudio.playWandSpark();
                  onOpenTelcCert();
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-cinzel text-xs font-bold bg-[#1b261d] text-[#a7f3d0] hover:bg-[#253828] border border-[#059669]/60 shadow-md transition-all active:scale-95 cursor-pointer"
                title={lang === 'de' ? 'Offizielles telc A2-Zertifikat ansehen' : 'View official telc A2 certificate'}
              >
                <span>🇩🇪</span>
                <span>{lang === 'de' ? 'telc A2-Zertifikat' : 'telc A2 Certificate'}</span>
              </button>
            )}

            {/* Owl Post CTA */}
            <button
              id="hero-send-owl-btn"
              onClick={() => {
                wizardAudio.playQuillSound();
                onOpenOwlPost();
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-cinzel text-xs font-bold bg-[#1e2336] text-[#e0d6c3] hover:text-[#ffd700] hover:bg-[#282d45] border border-[#4b5278] shadow-md transition-all active:scale-95"
            >
              <Feather className="w-4 h-4 text-[#ffd700]" />
              <span>{lang === 'en' ? 'Send Owl Post' : 'Eulenpost senden'}</span>
            </button>

            {/* Play Hedwig's Theme */}
            <button
              id="hero-play-theme-btn"
              onClick={onPlayMusic}
              className={`p-2.5 rounded-xl border transition-all ${
                isMusicPlaying
                  ? 'bg-[#282116] border-[#d4af37] text-[#ffd700]'
                  : 'bg-[#ebd9b5] border-[#bfa87a] text-[#5e471f] hover:text-[#1f1a14]'
              }`}
              title={lang === 'en' ? 'Play Hedwig\'s Theme' : 'Hedwigs Thema abspielen'}
            >
              <Music className={`w-4 h-4 ${isMusicPlaying ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Closing Wizard Sign-off */}
        <div className="mt-6 pt-4 border-t border-[#dfcca6] flex items-center justify-between text-xs font-parchment text-[#786139] italic">
          <p>{p.quote[lang]}</p>
          <div className="font-medieval text-sm text-[#4d3a1f]">
            Sai Surya Alla
          </div>
        </div>

      </div>
    </section>
  );
};
