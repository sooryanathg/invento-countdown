'use client';
import { useId } from 'react';
import DialNumber from './DialNumber';
import { daysDialConfig, DaysDialConfig } from './dialConfigs';

interface DaysDialProps {
  currentDays: number;
}

export default function DaysDial({ currentDays }: DaysDialProps) {
  const id = useId();
  const uniqueId = `daysdial-${id.replace(/:/g, '')}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 692px !important;
              height: 238px !important;
              left: calc(50% - 692px/2) !important;
              top: 350px !important;
              transform: scale(0.4) !important;
              transform-origin: center top !important;
            }
            .${uniqueId} * {
              font-size: 150px !important;
            }
            .${uniqueId} .day-dial-number:not([data-offset="-1"]):not([data-offset="1"]) {
              display: none !important;
            }
            .${uniqueId} .day-dial-number[data-offset="-1"] > * {
              left: -10% !important;
              right: auto !important;
              top: -80% !important;
            }
            .${uniqueId} .day-dial-number[data-offset="1"] > * {
              left: auto !important;
              right: -10% !important;
              top: -65% !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .${uniqueId} {
              transform: scale(0.7) !important;
              transform-origin: center top !important;
              top: 400px !important;
            }
            .${uniqueId} * {
              font-size: 180px !important;
            }
            .${uniqueId} .day-dial-number[data-offset="-1"] > * {
              left: -5% !important;
              right: auto !important;
              top: -30% !important;
            }
            .${uniqueId} .day-dial-number[data-offset="-2"] > * {
              left: -25% !important;
              top: -10% !important;
            }
            .${uniqueId} .day-dial-number[data-offset="1"] > * {
              left: 35% !important;
              right: auto !important;
              top: -10% !important;
            }
            .${uniqueId} .day-dial-number[data-offset="2"] > * {
              left: 50% !important;
              right: auto !important;
              top: -30% !important;
            }
            .${uniqueId} .day-dial-number[data-offset="-3"] {
              display: none !important;
            }
          }
          @media (min-width: 2560px) {
            .${uniqueId} {
              left: 500px !important;
              transform: scale(1.6) !important;
              transform-origin: center top !important;
              top: 240px !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '1731.22px',
          height: '594.19px',
          left: '4px',
          top: '110px',
        }}
      >
      {daysDialConfig.map((num: DaysDialConfig, index) => {
        let value: number;
        if (num.offset < 0) {
          value = currentDays + num.offset;
        } else {
          value = Math.max(0, currentDays + num.offset);
        }
        return (
          <div
            key={index}
            className={`day-dial-number day-offset-${num.offset}`}
            data-offset={num.offset}
          >
            <DialNumber
              value={value}
              left={num.left}
              right={num.right}
              top={num.top}
              transform={num.transform}
              fontSize="87.0369px"
              lineHeight="170px"
              bottom={num.bottom}
              specialWrapper={num.specialWrapper}
            />
          </div>
        );
      })}
      </div>
    </>
  );
}

