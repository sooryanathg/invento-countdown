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
          @media (max-width: 360px) {
            .${uniqueId} {
              width: 300px !important;
              height: calc(240vh + 15px) !important;
              left: calc(50% - 300px/2) !important;
            }
            .${uniqueId} svg {
              viewBox: "-218 0 718 5000" !important;
            }
            .${uniqueId} .trapezoid-path-mobile {
              d: path("M128 -100H144L500 5000H-218L128 -100Z") !important;
            }
          }
          @media (max-width: 380px) {
            .${uniqueId} {
              width: 270px !important;
              height: calc(180vh + 15px) !important;
              left: calc(50% - 140px) !important;
            }
            .${uniqueId} svg {
              viewBox: "-47 0 360 3500" !important;
            }
            .${uniqueId} .trapezoid-path-mobile {
              d: path("M136 0H144L315 3500H-23L136 0Z") !important;
            }
          }
          @media (min-width: 390px) and (max-width: 410px) {
            .${uniqueId} .trapezoid-path-mobile {
              d: path("M136 0H136L342 3015H-70L136 0Z") !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .${uniqueId} {
              width: 280px !important;
              height: calc(140vh + 15px) !important;
              left: calc(50% - 260px/2) !important;
              top: -200px !important;
            }
            .${uniqueId} svg {
              viewBox: "-20 0 300 1600" !important;
            }
            .${uniqueId} .trapezoid-path-desktop {
              d: path("M90 -200H160L280 1600H-20L90 -200Z") !important;
            }
            .${uniqueId} .trapezoid-path-mobile {
              display: none !important;
            }
          }
          @media (min-width: 1440px) and (max-width: 1440px) {
            .${uniqueId} {
              height: 1400px !important;
              top: -60px !important;
            }
            .${uniqueId} svg {
              viewBox: "0 0 272 1400" !important;
            }
            .${uniqueId} .trapezoid-path-desktop {
              d: path("M112.404 -15H155.878L272 1400H0L112.404 -15Z") !important;
            }
          }
          @media (min-width: 2560px) {
            .${uniqueId} {
              width: 300px !important;
              height: 1600px !important;
              left: calc(50% - 300px/2) !important;
              top: -140px !important;
              transform: scale(1.6) !important;
              transform-origin: center top !important;
            }
            .${uniqueId} svg {
              viewBox: "0 0 300 1600" !important;
            }
            .${uniqueId} .trapezoid-path-desktop {
              d: path("M112.404 -15H159.904L300 1600H0L112.404 -15Z") !important;
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
          d="M128 0H144L384 3015H-112L128 0Z"
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
            y2="1600"
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
            y2="4000"
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

