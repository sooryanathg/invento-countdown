'use client';
import { useId } from 'react';

export default function RedSemicircle() {
  const id = useId();
  const uniqueId = `red-semicircle-${id.replace(/:/g, '')}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 65px !important;
              height: 64px !important;
              left: calc(50% - 65px/2) !important;
              top: -33px !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .${uniqueId} {
              width: 130px !important;
              height: 128px !important;
              left: calc(50% - 130px/2) !important;
              top: -65px !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '163px',
          height: '160px',
          left: 'calc(50% - 163px/2 + 0.5px)',
          top: '-83px',
          background: '#C20C19',
          borderRadius: '50%',
        }}
      />
    </>
  );
}

