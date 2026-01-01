'use client';

import { useState, useEffect } from 'react';

export default function SemicircularPinArc() {
  const [isFastRotation, setIsFastRotation] = useState(true);

  useEffect(() => {
    // After 2.7s (1.5s delay + 1.2s animation), switch to normal speed
    const timer = setTimeout(() => {
      setIsFastRotation(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  const WIDTH = 1728;
  const HEIGHT = 529;

  // 🔑 FULL CIRCLE (center above SVG → semicircle visible)
  const centerX = 864;
  const centerY = -314 - 30;
  const radius = 750.83;

  const pinCount = 360;
  const pinLength = 18;
  const pinStrokeWidth = 4.32929;

  const pins = Array.from({ length: pinCount }, (_, i) => {
    const angle = (i / pinCount) * 360;
    const rad = (angle * Math.PI) / 180;

    return {
      id: i,
      angle,
      x: parseFloat((centerX + radius * Math.cos(rad)).toFixed(1)),
      y: parseFloat((centerY + radius * Math.sin(rad)).toFixed(1)),
    };
  });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .pin-arc-mobile {
                transform: scale(0.35);
                transform-origin: top center;
                top: 80px !important;
                left: 50% !important;
                translate: -50% 0;
              }
            }
          `,
        }}
      />

      <div
        className="absolute pin-arc-mobile"
        style={{
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
          left: "-95px",
          top: "-150px",
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden", // mask
        }}
      >
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "100%",
            willChange: "transform",
          }}
        >
          {/* FULL RING ROTATING BEHIND WINDOW */}
          <g
            opacity="0.66"
            transform={`rotate(0 ${centerX} ${centerY})`}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${centerX} ${centerY}`}
              to={`360 ${centerX} ${centerY}`}
              dur={isFastRotation ? "12s" : "90s"}
              repeatCount="indefinite"
              calcMode="linear"
            />

            {pins.map((pin) => (
              <line
                key={pin.id}
                x1={0}
                y1={-pinLength / 2}
                x2={0}
                y2={pinLength / 2}
                stroke="black"
                strokeWidth={pinStrokeWidth}
                transform={`translate(${pin.x}, ${pin.y}) rotate(${pin.angle + 90})`}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
}
