import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Wand2, Sparkles, Train } from 'lucide-react';
import { wizardAudio } from '../utils/audio';
import { SortingHatIcon } from './icons/SortingHatIcon';

interface AudioControllerProps {
  lang: 'en' | 'de';
  onSpellCast?: (spellName: string) => void;
}

export const AudioController: React.FC<AudioControllerProps> = ({ lang, onSpellCast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [soundFeedback, setSoundFeedback] = useState<string | null>(null);

  useEffect(() => {
    wizardAudio.setOnThemeStateChange((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const triggerFeedback = (text: string) => {
    setSoundFeedback(text);
    setTimeout(() => {
      setSoundFeedback(null);
    }, 2800);
  };

  const handleToggleTheme = () => {
    if (isPlaying) {
      wizardAudio.stopHedwigTheme();
      triggerFeedback(lang === 'en' ? 'Music Paused' : 'Musik pausiert');
    } else {
      wizardAudio.playHedwigTheme();
      triggerFeedback(lang === 'en' ? '♪ Playing Hedwig\'s Theme' : '♪ Spiele Hedwigs Thema');
    }
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    wizardAudio.setMuted(nextMuted);
    triggerFeedback(nextMuted ? (lang === 'en' ? 'Sounds Muted' : 'Ton stumm') : (lang === 'en' ? 'Sounds Active' : 'Ton aktiv'));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    wizardAudio.setVolume(val);
  };

  const playHogwartsExpress = () => {
    wizardAudio.playHogwartsExpress();
    triggerFeedback(lang === 'en' ? '🚂 Hogwarts Express Whistle!' : '🚂 Hogwarts-Express Pfeife!');
    if (onSpellCast) onSpellCast('Hogwarts Express');
  };

  const playSortingHat = () => {
    wizardAudio.playSortingFanfare();
    triggerFeedback(lang === 'en' ? '🎩 Sorting Hat Fanfare!' : '🎩 Sprechender-Hut Fanfare!');
    if (onSpellCast) onSpellCast('Sorting Fanfare');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 font-cinzel">
      {/* Sound notification badge */}
      {soundFeedback && (
        <div className="px-3.5 py-1.5 rounded-full bg-[#1b1926]/95 border border-[#d4af37]/60 text-[#ffd700] text-xs shadow-2xl backdrop-blur-md animate-bounce flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>{soundFeedback}</span>
        </div>
      )}

      {/* Main Floating Audio Widget */}
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#12131c]/90 border border-[#d4af37]/40 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        {/* Hedwig's Theme Play Button */}
        <button
          id="btn-hedwig-theme-toggle"
          onClick={handleToggleTheme}
          aria-label={isPlaying ? 'Pause Hedwig\'s Theme' : 'Play Hedwig\'s Theme'}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            isPlaying
              ? 'bg-[#740001] text-[#ffd700] border border-[#d3a625] shadow-[0_0_15px_rgba(211,166,37,0.4)]'
              : 'bg-[#1e202e] text-[#d4c29c] hover:text-[#ffd700] hover:bg-[#25283a] border border-[#3b3e54]'
          }`}
          title={lang === 'en' ? 'Original Hedwig\'s Theme Soundtrack' : 'Original Hedwigs Thema Soundtrack'}
        >
          <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">
            {isPlaying
              ? (lang === 'en' ? 'Hedwig Playing' : 'Hedwig spielt')
              : (lang === 'en' ? 'Hedwig\'s Theme' : 'Hedwigs Thema')}
          </span>
          {isPlaying && (
            <span className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 h-2 bg-[#ffd700] animate-pulse"></span>
              <span className="w-0.5 h-3 bg-[#ffd700] animate-pulse delay-75"></span>
              <span className="w-0.5 h-1.5 bg-[#ffd700] animate-pulse delay-150"></span>
            </span>
          )}
        </button>

        {/* Hogwarts Express Quick Whistle */}
        <button
          id="btn-hogwarts-express-sound"
          onClick={playHogwartsExpress}
          aria-label="Hogwarts Express Whistle"
          className="p-1.5 rounded-lg bg-[#1e202e] hover:bg-[#2e2621] text-[#d4af37] border border-[#3b3e54] transition-all"
          title={lang === 'en' ? 'Sound: Hogwarts Express Whistle' : 'Sound: Hogwarts-Express Pfeife'}
        >
          <Train className="w-4 h-4" />
        </button>

        {/* Sorting Fanfare Quick */}
        <button
          id="btn-sorting-fanfare-sound"
          onClick={playSortingHat}
          aria-label="Sorting Hat Fanfare"
          className="p-1.5 rounded-lg bg-[#1e202e] hover:bg-[#2a2336] text-[#ffd700] border border-[#3b3e54] hover:border-[#d4af37]/60 transition-all cursor-pointer"
          title={lang === 'en' ? 'Sound: Sorting Hat Fanfare' : 'Sound: Fanfare des Sprechenden Hutes'}
        >
          <SortingHatIcon className="w-4 h-4 text-[#ffd700]" />
        </button>

        {/* Volume Slider (Compact) */}
        <div className="hidden md:flex items-center gap-1.5 px-2">
          <input
            id="audio-volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-14 h-1 accent-[#d4af37] bg-[#2d3042] rounded-lg cursor-pointer"
            aria-label="Volume slider"
            title={lang === 'en' ? `Volume: ${Math.round(volume * 100)}%` : `Lautstärke: ${Math.round(volume * 100)}%`}
          />
        </div>

        {/* Master Mute Toggle */}
        <button
          id="btn-master-mute-toggle"
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute Wizarding Audio' : 'Mute Wizarding Audio'}
          className={`p-1.5 rounded-lg border transition-all ${
            isMuted
              ? 'bg-[#3d1717] text-[#ff6b6b] border-[#ff6b6b]/40'
              : 'bg-[#1e202e] text-[#d4af37] border-[#3b3e54] hover:bg-[#25283a]'
          }`}
          title={isMuted ? (lang === 'en' ? 'Unmute' : 'Ton an') : (lang === 'en' ? 'Mute' : 'Ton stumm')}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
