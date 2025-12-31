'use client';

import Image from 'next/image';

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Bird Silhouette Image - Responsive Positioning */}
      {/* Mobile: 150px × 84.38px, left: 0px, top: 498px */}
      <Image
        src="/countdown-left.webp"
        alt="Flying birds silhouette"
        width={150}
        height={84}
        className="absolute left-0 top-[498px] w-[150px] h-[84.38px] md:hidden"
      />
      
      {/* Desktop: 256px × 144px, left: 110px, top: 300px */}
      <Image
        src="/countdown-left.webp"
        alt="Flying birds silhouette"
        width={256}
        height={144}
        className="absolute left-[110px] top-[300px] w-[256px] h-[144px] hidden md:block"
      />

      {/* Red Circle - Mobile: 90.68px × 90.68px, left: calc(50% - 33px), top: -42px */}
      <div
        className="absolute rounded-full bg-[#C20C19] md:hidden"
        style={{
          width: '90.68px',
          height: '90.68px',
          left: 'calc(50% - 33px)',
          top: '-42px',
        }}
      />

      {/* Red Circle - Desktop: 163px × 163px, left: calc(50% - 81px), top: -83px */}
      <div
        className="absolute rounded-full bg-[#C20C19] hidden md:block"
        style={{
          width: '163px',
          height: '163px',
          left: 'calc(50% - 81px)',
          top: '-83px',
        }}
      />

      {/* Linked Path Group - Mobile: 895.59px × 934.47px, left: -239.51px, top: -766.39px, rotate(-0.79deg) */}
      <svg
        className="absolute md:hidden"
        width="895.59"
        height="934.47"
        viewBox="0 0 895.59 934.47"
        style={{
          left: '-239.51px',
          top: '-766.39px',
          transform: 'rotate(-0.79deg)',
        }}
      >
        {/* Add path data here */}
      </svg>

      {/* Linked Path Group - Desktop: 1609.94px × 1679.83px, left: 16px, top: -1386px, rotate(-0.79deg) */}
      <svg
        className="absolute hidden md:block"
        width="1609.94"
        height="1679.83"
        viewBox="0 0 1609.94 1679.83"
        style={{
          left: '16px',
          top: '-1386px',
          transform: 'rotate(-0.79deg)',
        }}
      >
        {/* Add path data here */}
      </svg>
    </div>
  );
}

