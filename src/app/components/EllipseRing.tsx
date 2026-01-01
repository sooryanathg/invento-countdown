'use client';
import { useId } from 'react';

interface EllipseRingProps {
  width: string;
  height: string;
  left: string;
  top: string;
  zIndex?: number;
}

export default function EllipseRing({
  width,
  height,
  left,
  top,
  zIndex = 2,
}: EllipseRingProps) {
  const id = useId();
  const uniqueId = `ellipse-${id.replace(/:/g, '')}`;
  const mobileWidth = `${parseFloat(width) * 0.4}px`;
  const mobileHeight = `${parseFloat(height) * 0.4}px`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: ${mobileWidth} !important;
              height: ${mobileHeight} !important;
              left: calc(50% - ${mobileWidth}/2) !important;
              border-width: 1px !important;
              top: -300px !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .${uniqueId} {
              width: ${parseFloat(width) * 0.7}px !important;
              height: ${parseFloat(height) * 0.7}px !important;
              left: calc(50% - ${parseFloat(width) * 0.7}px/2) !important;
              border-width: 2px !important;
              top: -600px !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId}`}
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width,
          height,
          left,
          top,
          border: '2.59758px solid #78777C',
          boxShadow: '0px 3.46343px 3.46343px rgba(0, 0, 0, 0.25)',
          transform: 'matrix(1, -0.01, 0.01, 1, 0, 0)',
          borderRadius: '50%',
          zIndex,
        }}
      />
    </>
  );
}

