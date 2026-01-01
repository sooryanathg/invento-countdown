'use client';

import { useState, useEffect } from 'react';

export default function SemicircularDial() {
  const [isFastRotation, setIsFastRotation] = useState(true);

  useEffect(() => {
    // After 2.7s (1.5s delay + 1.2s animation), switch to normal speed
    const timer = setTimeout(() => {
      setIsFastRotation(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  const centerX = 864;
  const centerY = -314;

  const circleRadius = 830.83;
  const strokeWidth = 4.32929;

  // Half inside / half outside
  const pinRadius = circleRadius - strokeWidth / 2;

  const pinCount = 128;
  const pinWidth = 7;
  const pinHeight = 18;

  const pins = Array.from({ length: pinCount }, (_, i) => {
    const angle = (i / pinCount) * 360;
    const rad = (angle * Math.PI) / 180;

    return {
      id: i,
      angle,
      x: parseFloat((centerX + pinRadius * Math.cos(rad)).toFixed(1)),
      y: parseFloat((centerY + pinRadius * Math.sin(rad)).toFixed(1)),
    };
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .semicircular-dial-mobile {
              transform: scale(0.35);
              transform-origin: top center;
              top: 140px !important;
              left: 50% !important;
              translate: -50% 0;
            }
          }
        `,
      }} />
      <div
        className="absolute semicircular-dial-mobile"
        style={{
          width: "1728px",
          height: "529px",
          left: "-95px",
          top: "-150px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
      <svg
        width="1728"
        height="529"
        viewBox="0 0 1728 529"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <g transform={`rotate(0 ${centerX} ${centerY})`}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur={isFastRotation ? "3.5s" : "17s"}
            repeatCount="indefinite"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={circleRadius}
            fill="none"
            stroke="black"
            strokeWidth={strokeWidth}
          />

          {pins.map((pin) => (
            <rect
              key={pin.id}
              x={-pinWidth / 2}
              y={-pinHeight / 2}
              width={pinWidth}
              height={pinHeight}
              transform={`translate(${pin.x}, ${pin.y}) rotate(${pin.angle + 90})`}
              fill="black"
              stroke="black"
              strokeWidth="0.865858"
            />
          ))}
        </g>
      </svg>
      </div>
    </>
  );
}
