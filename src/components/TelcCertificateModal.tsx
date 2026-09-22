import React, { useState } from 'react';
import { X, ExternalLink, Printer, CheckCircle2, Award, ShieldCheck, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { wizardAudio } from '../utils/audio';

interface TelcCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'de';
}

export const TelcCertificateModal: React.FC<TelcCertificateModalProps> = ({
  isOpen,
  onClose,
  lang = 'de',
}) => {
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [copiedId, setCopiedId] = useState(false);

  if (!isOpen) return null;

  const certId = 'telc-GDrbcvJ';
  const verifyUrl = 'https://results.telc.net';

  const handlePrint = () => {
    wizardAudio.playQuillSound();
    window.print();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(certId);
    setCopiedId(true);
    wizardAudio.playWandSpark();
    setTimeout(() => setCopiedId(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121420] text-[#1c1a17] border border-[#d4af37]/60 rounded-2xl max-w-4xl w-full shadow-[0_0_50px_rgba(212,175,55,0.35)] overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Top Magical & Official Header Bar */}
        <div className="bg-gradient-to-r from-[#171926] via-[#211f33] to-[#171926] border-b border-[#d4af37]/40 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#740001] border border-[#d3a625] flex items-center justify-center text-lg shadow-md">
              🇩🇪
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#ffd700] tracking-wide">
                  {lang === 'de' ? 'Offizielles telc-Sprachzertifikat' : 'Official telc Language Certificate'}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-cinzel font-bold bg-[#10b981]/20 border border-[#10b981]/60 text-[#34d399]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>CEFR A2</span>
                </span>
              </div>
              <p className="text-xs text-[#c4b59d] font-parchment flex items-center gap-2">
                <span>Start Deutsch 2 • Ingolstadt, Deutschland</span>
                <span className="text-[#d4af37]">•</span>
                <span className="text-[#ffd700] font-semibold">
                  {lang === 'de' ? '⚡ Aktuell B1 in Vorbereitung' : '⚡ Currently Pursuing CEFR B1'}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Page Switcher */}
            <div className="flex items-center bg-[#0d0e17] p-1 rounded-xl border border-[#3e4259]">
              <button
                onClick={() => {
                  setActivePage(1);
                  wizardAudio.playQuillSound();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-cinzel font-bold transition-all ${
                  activePage === 1
                    ? 'bg-[#d4af37] text-[#121420] shadow-sm'
                    : 'text-[#a39783] hover:text-white'
                }`}
              >
                {lang === 'de' ? 'Seite 1: Zertifikat' : 'Page 1: Certificate'}
              </button>
              <button
                onClick={() => {
                  setActivePage(2);
                  wizardAudio.playQuillSound();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-cinzel font-bold transition-all ${
                  activePage === 2
                    ? 'bg-[#d4af37] text-[#121420] shadow-sm'
                    : 'text-[#a39783] hover:text-white'
                }`}
              >
                {lang === 'de' ? 'Seite 2: Kriterien' : 'Page 2: Criteria'}
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#1e2133] hover:bg-[#282c44] text-[#d4af37] border border-[#484c6e] hover:border-[#d4af37] transition-all cursor-pointer"
              title={lang === 'de' ? 'Zertifikat drucken / Als PDF speichern' : 'Print Certificate / Save as PDF'}
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                onClose();
                wizardAudio.playQuillSound();
              }}
              className="p-2 rounded-xl bg-[#1e2133] hover:bg-[#740001] text-[#e0d6c3] hover:text-[#ffd700] border border-[#484c6e] transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Document Canvas (Authentic white / light cream official document) */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#2d3042]/50 flex justify-center items-start">
          <div className="bg-[#ffffff] text-[#111827] w-full max-w-2xl rounded-xl shadow-2xl p-6 sm:p-10 border border-[#e5e7eb] relative font-sans text-sm">
            
            {activePage === 1 ? (
              /* PAGE 1: OFFICIAL TELC ZERTIFIKAT */
              <div>
                {/* Header Logo */}
                <div className="flex items-start justify-between mb-8 border-b border-gray-200 pb-4">
                  <div>
                    <div className="text-3xl font-extrabold tracking-tighter text-gray-700 flex items-center">
                      <span>telc</span>
                      <span className="text-gray-400 text-xs ml-1 font-normal">LANGUAGE TESTS</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-emerald-50 text-emerald-800 font-semibold text-xs px-2.5 py-1 rounded border border-emerald-300">
                      Offizielles Dokument
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="mb-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-1">
                    Zertifikat
                  </h1>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Start Deutsch 2
                  </h2>
                  <p className="text-xs text-gray-500 italic">
                    Europaratsstufe A2 · Council of Europe level A2
                  </p>
                </div>

                {/* Candidate Particulars */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-b border-gray-200 py-4 mb-6 bg-gray-50/70 px-4 rounded-lg">
                  <div>
                    <p className="text-base font-bold text-gray-900">Alla</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">Name</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Sai Surya</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">Vorname</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">28.12.2003</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">Geburtsdatum</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Guntur, Andhra Pradesh / IN</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">Geburtsort</p>
                  </div>
                </div>

                {/* Scores Breakdown */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Prüfungsergebnisse nach Fertigkeiten
                  </h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <tbody>
                        <tr className="border-b border-gray-100 bg-white">
                          <td className="py-2.5 px-3 font-medium text-gray-700">• Hören (Listening)</td>
                          <td className="py-2.5 px-3 text-right font-bold text-gray-900">10,0</td>
                          <td className="py-2.5 px-3 text-gray-500 text-right">/ 15 Punkte</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="py-2.5 px-3 font-medium text-gray-700">• Lesen (Reading)</td>
                          <td className="py-2.5 px-3 text-right font-bold text-gray-900">7,0</td>
                          <td className="py-2.5 px-3 text-gray-500 text-right">/ 15 Punkte</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-white">
                          <td className="py-2.5 px-3 font-medium text-gray-700">• Schreiben (Writing)</td>
                          <td className="py-2.5 px-3 text-right font-bold text-gray-900">9,0</td>
                          <td className="py-2.5 px-3 text-gray-500 text-right">/ 15 Punkte</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="py-2.5 px-3 font-medium text-gray-700">• Sprechen (Speaking)</td>
                          <td className="py-2.5 px-3 text-right font-bold text-gray-900">10,5</td>
                          <td className="py-2.5 px-3 text-gray-500 text-right">/ 15 Punkte</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="py-2.5 px-3 text-gray-900">Summe (Total)</td>
                          <td className="py-2.5 px-3 text-right text-gray-900 text-sm">36,5</td>
                          <td className="py-2.5 px-3 text-gray-700 text-right">/ 60 Punkte</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Outcome & Verification Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gray-200 rounded-lg p-4 mb-6 bg-amber-50/30">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">Ergebnis:</span>
                      <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Ausreichend (Pass)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">Datum der Prüfung:</span>
                      <span className="font-semibold text-gray-800">28.07.2026</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">Datum der Ausstellung:</span>
                      <span className="font-semibold text-gray-800">02.09.2026</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">Prüfungsort:</span>
                      <span className="font-semibold text-gray-800">Ingolstadt / DE</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-gray-200 sm:pl-4 pt-2 sm:pt-0">
                    <div className="text-xs">
                      <span className="text-gray-500 font-medium block">Identifikationsnummer:</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono font-bold text-gray-800">
                          {certId}
                        </code>
                        <button
                          onClick={handleCopyId}
                          className="text-[10px] text-blue-600 hover:text-blue-800 font-semibold underline cursor-pointer"
                        >
                          {copiedId ? 'Kopiert!' : 'Kopieren'}
                        </button>
                      </div>
                    </div>
                    <div className="text-xs pt-1">
                      <span className="text-gray-500 font-medium block">Prüfungszentrum:</span>
                      <span className="font-semibold text-gray-800 text-[11px] leading-tight block mt-0.5">
                        Zentrum für fremdsprachliche Bildung Ingolstadt GmbH & Co. KG
                      </span>
                    </div>
                  </div>
                </div>

                {/* Seals & Signatures Row */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-200">
                  {/* Circular Stamp */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-center p-1 text-[9px] text-gray-600 font-mono">
                      <span className="font-bold text-[8px] tracking-tighter">telc</span>
                      <span className="text-[7px] leading-tight">LANGUAGE CERTIFICATES</span>
                      <span className="text-[7px]">EUROPEAN</span>
                    </div>
                    <div className="text-left">
                      <div className="font-serif italic text-lg text-gray-700 leading-none">
                        J. Keller
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-tight mt-1 border-t border-gray-300 pt-0.5">
                        Geschäftsführer
                      </div>
                    </div>
                  </div>

                  {/* QR Verification Box */}
                  <div className="flex items-center gap-2.5 bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="w-10 h-10 bg-white border border-gray-300 p-0.5 flex items-center justify-center">
                      {/* Stylized QR representation */}
                      <div className="grid grid-cols-3 gap-0.5 w-full h-full p-0.5">
                        <div className="bg-black" />
                        <div className="bg-black" />
                        <div className="bg-white" />
                        <div className="bg-white" />
                        <div className="bg-black" />
                        <div className="bg-black" />
                        <div className="bg-black" />
                        <div className="bg-white" />
                        <div className="bg-black" />
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-600 max-w-[140px] leading-tight">
                      <span>Online-Verifikation unter</span>
                      <a
                        href={verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block font-semibold text-blue-600 hover:underline"
                      >
                        results.telc.net
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* PAGE 2: ASSESSMENT CRITERIA & DESCRIPTIONS */
              <div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Beschreibung der Sprachkompetenzen
                    </h2>
                    <p className="text-xs text-gray-500">
                      Start Deutsch 2 • Europariatsstufe A2 / Council of Europe level A2
                    </p>
                  </div>
                  <span className="text-xs font-mono text-gray-400">Ref: 9226386</span>
                </div>

                {/* German Competencies */}
                <div className="space-y-4 text-xs text-gray-700 leading-relaxed mb-6">
                  <p className="font-semibold text-gray-900 bg-gray-50 p-2.5 rounded border-l-4 border-emerald-500">
                    Mit erfolgreichem Abschluss der Prüfung <strong>Start Deutsch 2</strong> hat der Prüfungsteilnehmer nachgewiesen, dass er fähig ist:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-gray-700">
                    <li>
                      die wichtigsten Informationen aus kurzen Zeitungstexten, alltagsbezogenen Anzeigen und öffentlichen Hinweistafeln zu entnehmen,
                    </li>
                    <li>
                      die wichtigsten Informationen in alltäglichen Gesprächen, kurze Ansagen aus dem Radio sowie Nachrichten am Telefon zu verstehen,
                    </li>
                    <li>
                      kurze Mitteilungen zu schreiben, die sich auf das unmittelbare Lebensumfeld beziehen,
                    </li>
                    <li>
                      sich in Alltagsgesprächen über die eigene Lebenssituation auszutauschen sowie Informationsfragen zu stellen und zu beantworten.
                    </li>
                  </ul>
                </div>

                {/* Grade Scale Table */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                    Prädikate & Notenspiegel / Grades Scale
                  </h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden text-xs">
                    <table className="w-full text-center">
                      <thead className="bg-gray-100 text-gray-700 border-b border-gray-200">
                        <tr>
                          <th className="py-2 px-2 text-left font-semibold">Ergebnis / Grade</th>
                          <th className="py-2 px-2 font-semibold">Sehr gut</th>
                          <th className="py-2 px-2 font-semibold">Gut</th>
                          <th className="py-2 px-2 font-semibold">Befriedigend</th>
                          <th className="py-2 px-2 font-bold bg-emerald-50 text-emerald-800">Ausreichend ★</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-2 text-left font-medium text-gray-700">Punkte / Points</td>
                          <td className="py-2 px-2 text-gray-600">54 – 60</td>
                          <td className="py-2 px-2 text-gray-600">48 – 53,5</td>
                          <td className="py-2 px-2 text-gray-600">42 – 47,5</td>
                          <td className="py-2 px-2 font-bold bg-emerald-50 text-emerald-800">36 – 41,5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2 italic">
                    ★ Um die Prüfung zu bestehen, müssen 60 % der Höchstpunktzahl (36 von 60 Punkten) erreicht werden. Erreicht: 36,5 Punkte.
                  </p>
                </div>

                {/* Current Progression: B1 in Vorbereitung */}
                <div className="p-3.5 rounded-lg bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-300 text-xs text-amber-900">
                  <div className="flex items-center gap-2 font-bold text-amber-950 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Aktueller Status: B1-Niveau in intensiver Vorbereitung</span>
                  </div>
                  <p className="text-amber-800 leading-normal">
                    Nach erfolgreichem Abschluss des telc A2-Zertifikats vertieft Sai Surya Alla aktuell aktiv seine Deutschkenntnisse auf <strong>Niveau B1 (Gemeinsamer Europäischer Referenzrahmen)</strong> im Rahmen seines Studiums an der OTH Amberg-Weiden für den Einsatz in professionellen Arbeits- und Projektumgebungen.
                  </p>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#171926] border-t border-[#d4af37]/30 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#c4b59d] font-parchment">
            <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
            <span>
              {lang === 'de' 
                ? 'Authentifiziertes Dokument: telc Start Deutsch 2 (CEFR A2)' 
                : 'Authenticated Document: telc Start Deutsch 2 (CEFR A2)'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://results.telc.net"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25283c] hover:bg-[#343852] text-[#ffd700] border border-[#4d5275] font-cinzel font-semibold transition-all shadow-sm"
            >
              <span>{lang === 'de' ? 'Offiziell verifizieren' : 'Verify Online'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                onClose();
                wizardAudio.playQuillSound();
              }}
              className="px-4 py-1.5 rounded-lg bg-[#740001] hover:bg-[#8f0001] text-[#ffd700] border border-[#d3a625] font-cinzel font-bold transition-all shadow-sm cursor-pointer"
            >
              {lang === 'de' ? 'Schließen' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
