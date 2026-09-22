import React from 'react';
import { Scroll, Sparkles, MapPin, Mail, Phone, Linkedin, Download, Music, Feather, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface HeroLetterProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onOpenResume: () => void;
  onOpenOwlPost: () => void;
  onPlayMusic: () => void;
  isMusicPlaying: boolean;
}

export const HeroLetter: React.FC<HeroLetterProps> = ({
  lang,
  houseTheme,
  onOpenResume,
  onOpenOwlPost,
  onPlayMusic,
  isMusicPlaying,
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

        {/* Professional Academic Letterhead Header */}
        <div className="text-center border-b-2 border-[#bfa87a] pb-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-[#5c4a2a] mb-1 font-cinzel">
            <h2 className="font-cinzel font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wider text-[#1e1710]">
              SAI SURYA ALLA
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-cinzel font-bold tracking-widest text-[#735728] uppercase mt-1">
            {lang === 'en'
              ? 'M.Sc. Artificial Intelligence for Industrial Applications • OTH Amberg-Weiden'
              : 'M.Sc. Künstliche Intelligenz für industrielle Anwendungen • OTH Amberg-Weiden'}
          </p>
          <p className="text-xs font-parchment text-[#57442a] mt-1">
            {lang === 'en'
              ? 'Ostbayerische Technische Hochschule (OTH) Amberg-Weiden, Deutschland'
              : 'Ostbayerische Technische Hochschule (OTH) Amberg-Weiden, Deutschland'}
          </p>
          <div className="flex justify-center items-center gap-3 mt-2 text-xs font-parchment text-[#6e5835] font-semibold">
            <span>Amberg, Deutschland</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Student at OTH Amberg-Weiden' : 'Student an der OTH Amberg-Weiden'}</span>
            <span>•</span>
            <span>{p.targetRole[lang]}</span>
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

          {/* Highlight Target Role Box */}
          <div className="my-6 p-4 rounded-xl border border-[#bfa87a] bg-[#ebe1c8]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#8f6d2b] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-cinzel font-bold text-[#684e20] uppercase tracking-wider block">
                  {lang === 'en' ? 'Target Position Seeking' : 'Angestrebte Position'}
                </span>
                <span className="text-sm sm:text-base font-cinzel font-semibold text-[#1f1910]">
                  {p.targetRole[lang]}
                </span>
              </div>
            </div>
            <div className="text-xs font-parchment font-semibold text-[#664b18] px-3 py-1 rounded bg-[#dfcfad] border border-[#bfa87a] self-end sm:self-auto whitespace-nowrap">
              {lang === 'en' ? 'Available in Germany' : 'Verfügbar in Deutschland'}
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
