import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Sparkles, Copy, Check, Feather } from 'lucide-react';
import { RESUME_DATA, HouseTheme } from '../data/portfolioData';
import { wizardAudio } from '../utils/audio';

interface OwlPostSectionProps {
  lang: 'en' | 'de';
  houseTheme: HouseTheme;
  onSendFeedback: (msg: string) => void;
}

export const OwlPostSection: React.FC<OwlPostSectionProps> = ({ lang, houseTheme, onSendFeedback }) => {
  const p = RESUME_DATA.personal;
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [purpose, setPurpose] = useState('werkstudent');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSendOwl = (e: React.FormEvent) => {
    e.preventDefault();
    wizardAudio.playCelestaNote(1046.50, 0.7, 1.0);
    wizardAudio.playQuillSound();

    const subjectText = purpose === 'werkstudent'
      ? `Inquiry: Werkstudent IT-Projektmanagement (E-Commerce / Digital Transformation) - ${senderName || 'Recruiter'}`
      : `Hogwarts Owl Post: Opportunity for Sai Surya Alla - ${senderName || 'Contact'}`;

    const bodyText = `Hello Sai Surya,\n\n${message || 'I came across your wizarding portfolio and would like to discuss an opportunity regarding IT Project Management / AI Engineering.'}\n\nBest regards,\n${senderName}\n${senderEmail}`;

    const mailtoUrl = `mailto:${p.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.open(mailtoUrl, '_blank');

    onSendFeedback(
      lang === 'en'
        ? '🦉 Owl Post dispatched! Preparing your magical dispatch'
        : '🦉 Eulenpost abgeschickt! E-Mail-Programm geöffnet'
    );
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    wizardAudio.playWandSpark();
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="owl-post" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a26] border border-[#d4af37]/40 text-[#ffd700] text-xs font-cinzel mb-3">
          <Feather className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>{lang === 'en' ? 'The Owlery & Direct Dispatch' : 'Die Eulerei & Direkter Kontakt'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#f4ecd8] mb-3">
          {lang === 'en' ? 'Send an Owl Post' : 'Sende eine Eulenpost'}
        </h2>
        <p className="font-parchment text-base sm:text-lg text-[#a89b82] max-w-xl mx-auto italic">
          {lang === 'en'
            ? 'Seeking a Working Student role in IT Project Management (E-Commerce & Digital Transformation) in Germany. Open to discussing projects & collaborations.'
            : 'Offen für Werkstudentenstellen im Bereich IT-Projektmanagement (E-Commerce & digitale Transformation) sowie fachlichen Austausch.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Contact Info Scroll (2 cols) */}
        <div className="md:col-span-2 parchment-card rounded-2xl p-6 sm:p-7 border-t-2 border-t-[#d4af37]">
          <h3 className="font-cinzel text-lg font-bold text-[#f5ede0] mb-4 flex items-center gap-2">
            <span>🦉</span>
            <span>{lang === 'en' ? 'Direct Coordinates' : 'Direkte Kontaktdaten'}</span>
          </h3>

          <div className="space-y-4 font-parchment text-sm text-[#d4c8b2]">
            {/* Email */}
            <div className="p-3 rounded-xl bg-[#141624] border border-[#2d3042]">
              <span className="text-[11px] font-cinzel text-[#8f836f] uppercase block mb-1">
                {lang === 'en' ? 'Owl Mail (Email)' : 'E-Mail'}
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${p.email}`}
                  className="font-bold text-[#ffd700] hover:underline text-xs sm:text-sm break-all"
                >
                  {p.email}
                </a>
                <button
                  onClick={() => copyToClipboard(p.email, 'email')}
                  className="p-1 text-[#8f836f] hover:text-[#ffd700]"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="p-3 rounded-xl bg-[#141624] border border-[#2d3042]">
              <span className="text-[11px] font-cinzel text-[#8f836f] uppercase block mb-1">
                {lang === 'en' ? 'Two-Way Mirror (Phone)' : 'Telefon'}
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${p.phone}`}
                  className="font-bold text-[#ffd700] hover:underline text-xs sm:text-sm"
                >
                  {p.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(p.phone, 'phone')}
                  className="p-1 text-[#8f836f] hover:text-[#ffd700]"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="p-3 rounded-xl bg-[#141624] border border-[#2d3042]">
              <span className="text-[11px] font-cinzel text-[#8f836f] uppercase block mb-1">
                {lang === 'en' ? 'Current Residence' : 'Wohnort & Status'}
              </span>
              <p className="font-bold text-[#e0d6c3] text-xs sm:text-sm">{p.location}</p>
              <p className="text-[11px] text-[#9c8f7a] italic mt-0.5">{p.visa[lang]}</p>
            </div>

            {/* LinkedIn */}
            <div className="p-3 rounded-xl bg-[#141624] border border-[#2d3042]">
              <span className="text-[11px] font-cinzel text-[#8f836f] uppercase block mb-1">
                LinkedIn
              </span>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#ffd700] hover:underline text-xs sm:text-sm flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/{p.linkedinHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Parchment Message Composer (3 cols) */}
        <div className="md:col-span-3 parchment-paper rounded-2xl p-6 sm:p-8 relative border-2 border-[#bfa87a] shadow-xl">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1f170e] mb-1">
            {lang === 'en' ? 'Compose Magical Dispatch' : 'Nachricht verfassen'}
          </h3>
          <p className="text-xs font-parchment text-[#614e2c] mb-5 italic">
            {lang === 'en'
              ? 'Fill in the quill letter below to send an immediate inquiry to Sai Surya Alla.'
              : 'Verfasse dein Schreiben an Sai Surya Alla; öffnet die vorbereitete Nachricht direkt in deinem E-Mail-Programm.'}
          </p>

          <form onSubmit={handleSendOwl} className="space-y-4 font-parchment">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-cinzel font-bold text-[#5c4623] block mb-1">
                  {lang === 'en' ? 'Your Name / Company' : 'Ihr Name / Unternehmen'}
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Albus Dumbledore / HR Lead"
                  className="w-full px-3 py-2 rounded-lg bg-[#f0e4ca] border border-[#b8a274] text-[#1f170e] text-xs font-parchment placeholder-[#8f7954] focus:outline-none focus:border-[#740001]"
                />
              </div>

              <div>
                <label className="text-xs font-cinzel font-bold text-[#5c4623] block mb-1">
                  {lang === 'en' ? 'Your Email' : 'Ihre E-Mail'}
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="contact@company.de"
                  className="w-full px-3 py-2 rounded-lg bg-[#f0e4ca] border border-[#b8a274] text-[#1f170e] text-xs font-parchment placeholder-[#8f7954] focus:outline-none focus:border-[#740001]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-cinzel font-bold text-[#5c4623] block mb-1">
                {lang === 'en' ? 'Inquiry Topic' : 'Anliegen / Thema'}
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#f0e4ca] border border-[#b8a274] text-[#1f170e] text-xs font-cinzel focus:outline-none focus:border-[#740001]"
              >
                <option value="werkstudent">
                  {lang === 'en' ? 'Werkstudent Role: IT Project Management (E-Commerce)' : 'Werkstudent: IT-Projektmanagement (E-Commerce & Transformation)'}
                </option>
                <option value="ai">
                  {lang === 'en' ? 'AI / Data Science & ML Engineering' : 'Künstliche Intelligenz & Data Science'}
                </option>
                <option value="general">
                  {lang === 'en' ? 'General Academic or Project Collaboration' : 'Allgemeiner fachlicher Austausch / Projekt'}
                </option>
              </select>
            </div>

            <div>
              <label className="text-xs font-cinzel font-bold text-[#5c4623] block mb-1">
                {lang === 'en' ? 'Your Parchment Note' : 'Ihre Nachricht'}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === 'en'
                    ? 'Write your message regarding working student opportunities, interview dates, or technical inquiries...'
                    : 'Geben Sie hier Ihre Nachricht bezüglich Werkstudentenstellen, Vorstellungsgesprächen oder Rückfragen ein...'
                }
                className="w-full px-3 py-2 rounded-lg bg-[#f0e4ca] border border-[#b8a274] text-[#1f170e] text-xs font-parchment placeholder-[#8f7954] focus:outline-none focus:border-[#740001]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-cinzel text-xs font-bold bg-[#740001] text-[#ffd700] hover:bg-[#8f0001] border border-[#d3a625] shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'en' ? 'Dispatch Owl via Email' : 'Eule absenden (E-Mail öffnen)'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
