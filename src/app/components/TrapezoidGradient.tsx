'use client';
import { useId } from 'react';

export default function TrapezoidGradient() {
  const id = useId();
  const uniqueId = `trapezoid-${id.replace(/:/g, '')}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 200px !important;
              height: calc(150vh + 15px) !important;
              left: calc(50% - 200px/2) !important;
              top: -500px !important;
            }
            .${uniqueId} svg {
              height: 100% !important;
              width: 100% !important;
              viewBox: "0 0 272 3015" !important;
              preserveAspectRatio: none !important;
            }
            .${uniqueId} .trapezoid-path-desktop {
              display: none !important;
            }
            .${uniqueId} .trapezoid-path-mobile {
              display: block !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '272px',
          height: '1117px',
          left: 'calc(50% - 272px/2)',
          top: '-15px',
        }}
      >
      <svg
        width="272"
        height="1117"
        viewBox="0 0 272 1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <path
          className="trapezoid-path-desktop"
          d="M112.404 -15H155.878L272 1117H0L112.404 -15Z"
          fill="url(#paint0_linear_580_8906)"
          fillOpacity="0.5"
        />
        <path
          className="trapezoid-path-mobile"
          d="M106 0H166L272 3015H0L106 0Z"
          fill="url(#paint0_linear_580_8906_mobile)"
          fillOpacity="0.5"
          style={{ display: 'none' }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_580_8906"
            x1="136"
            y1="-15"
            x2="157.5"
            y2="760.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C20C19" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint0_linear_580_8906_mobile"
            x1="136"
            y1="0"
            x2="154"
            y2="2000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C20C19" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      </div>
    </>
  );
}

