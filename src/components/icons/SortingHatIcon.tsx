import React from 'react';

interface SortingHatIconProps {
  className?: string;
  glow?: boolean;
}

export const SortingHatIcon: React.FC<SortingHatIconProps> = ({
  className = 'w-5 h-5',
  glow = false,
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'filter drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]' : ''}`}
    >
      {/* Magic Sparkles at tip */}
      <path
        d="M32 4L33 1L34 4L37 5L34 6L33 9L32 6L29 5L32 4Z"
        fill="#FFD700"
      />
      <circle cx="39" cy="9" r="1" fill="#FFE082" />
      <circle cx="27" cy="3" r="0.8" fill="#FFE082" />

      {/* Pointed Cone with iconic slouching peak */}
      <path
        d="M24 6C27 6 31 7 32 10C33 13 30 15 28 17C26 19 28 22 30 25C32.5 28.5 35 32 37 36C31 35 17 35 11 36C13 32 15.5 28.5 18 25C20 22 22 19 20 17C18 15 21 6 24 6Z"
        fill="url(#hatLeatherGrad)"
        stroke="#D4AF37"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Sorting Hat Folds: The Eyes */}
      <path
        d="M17 25C19 23.5 21 23.5 23 25"
        stroke="#120D08"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 25C19 23.5 21 23.5 23 25"
        stroke="#FFD700"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <path
        d="M25 25C27 23.5 29 23.5 31 25"
        stroke="#120D08"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 25C27 23.5 29 23.5 31 25"
        stroke="#FFD700"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Sorting Hat Crease: The Speaking Mouth */}
      <path
        d="M19 30C21.5 32 26.5 32 29 30"
        stroke="#120D08"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M19 30C21.5 32 26.5 32 29 30"
        stroke="#FFD700"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Hat Patch Stitching */}
      <path
        d="M27 15L31 17M28 14L32 16"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Wide Curved Brim */}
      <path
        d="M5 39C9 36 18 36.5 24 36.5C30 36.5 39 36 43 39C45 40.5 41 43 24 43C7 43 3 40.5 5 39Z"
        fill="url(#brimGrad)"
        stroke="#D4AF37"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 39C15 37.8 33 37.8 39 39"
        stroke="#FFE082"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />

      <defs>
        <linearGradient id="hatLeatherGrad" x1="24" y1="6" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#543A24" />
          <stop offset="0.5" stopColor="#3B2615" />
          <stop offset="1" stopColor="#24150B" />
        </linearGradient>
        <linearGradient id="brimGrad" x1="24" y1="36.5" x2="24" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A311C" />
          <stop offset="1" stopColor="#1E1208" />
        </linearGradient>
      </defs>
    </svg>
  );
};
