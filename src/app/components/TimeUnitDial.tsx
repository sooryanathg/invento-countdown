'use client';
import { useId } from 'react';
import DialNumber from './DialNumber';

interface DialNumberConfig {
  offset: number;
  left: string;
  right: string;
  top: string;
  transform: string;
}

interface TimeUnitDialProps {
  currentValue: number;
  maxValue: number;
  numbers: DialNumberConfig[];
  containerTop: string;
  fontSize?: string;
  useMathMax?: boolean; // For hours which use Math.max(0, value) for negative offsets
}

export default function TimeUnitDial({
  currentValue,
  maxValue,
  numbers,
  containerTop,
  fontSize = '35px',
  useMathMax = false,
}: TimeUnitDialProps) {
  const id = useId();
  const uniqueId = `timeunit-${id.replace(/:/g, '')}`;
  const mobileFontSize = `${parseFloat(fontSize) * 0.4}px`;
  const isMobileSeconds = typeof window !== 'undefined' && window.innerWidth <= 768 && containerTop === '-200px';
  const displayNumbers = isMobileSeconds ? [
    { offset: -5, left: '17.5%', right: '74.63%', top: '37%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -20)' },
    { offset: -4, left: '20.5%', right: '71.63%', top: '36%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, 20)' },
    { offset: -3, left: '23%', right: '69.13%', top: '36%', transform: 'matrix(0.85, 0.52, -0.55, 0.83, 110, 45)' },
    { offset: -2, left: '26%', right: '66.13%', top: '37.5%', transform: 'matrix(0.9, 0.43, -0.46, 0.89, 130, 50)' },
    { offset: -1, left: '28%', right: '64.13%', top: '40%', transform: 'matrix(0.97, 0.26, -0.28, 0.96, 160, 40)' },
    { offset: 1, left: '64%', right: '16.13%', top: '37%', transform: 'matrix(0.9, -0.43, 0.47, 0.88, -280, -20)' },
    { offset: 2, left: '66.5%', right: '26.63%', top: '40%', transform: 'matrix(0.85, -0.52, 0.55, 0.83, -250, -10)' },
    { offset: 3, left: '69%', right: '23.13%', top: '36%', transform: 'matrix(0.78, -0.63, 0.66, 0.75, -230, -15)' },
    { offset: 4, left: '71.5%', right: '20.63%', top: '35.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -40)' },
    { offset: 5, left: '74.5%', right: '17.63%', top: '33.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -60)' },
  ] : numbers;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 692px !important;
              height: 238px !important;
              left: calc(50% - 692px/2) !important;
              top: ${containerTop === '10px' ? '220px' : containerTop === '-100px' ? '150px' : containerTop === '-200px' ? '80px' : containerTop} !important;
              transform: scale(0.4) !important;
              transform-origin: center top !important;
            }
            .${uniqueId} * {
              font-size: ${mobileFontSize} !important;
            }
            ${useMathMax ? `
            .${uniqueId} .dial-number-wrapper * {
              font-size: 100px !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              left: -50% !important;
              right: auto !important;
              top: -50% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              left: -30% !important;
              right: auto !important;
              top: -20% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              left: -10% !important;
              right: auto !important;
              top: 5% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left: auto !important;
              right: -25% !important;
              top: 25% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: auto !important;
              right: -45% !important;
              top: 5% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: auto !important;
              right: -65% !important;
              top: -35% !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-3"]):not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]):not([data-offset="3"]) {
              display: none !important;
            }
            ` : containerTop === '-100px' ? `
            .${uniqueId} .dial-number-wrapper * {
              font-size: 80px !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-4"] > * {
              top: -32% !important;
              left: -45% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              top: -28% !important;
              left: -30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              top: -20% !important;
              left: -15% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              top: -20% !important;
              left: 0% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left: auto !important;
              right: -20% !important;
              top: 0% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: auto !important;
              right: -35% !important;
              top: -20% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: auto !important;
              right: -50% !important;
              top: -50% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="4"] > * {
              left: auto !important;
              right: -60% !important;
              top: -80% !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-4"]):not([data-offset="-3"]):not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]):not([data-offset="3"]):not([data-offset="4"]) {
              display: none !important;
            }
            ` : containerTop === '-200px' ? `
            .${uniqueId} .dial-number-wrapper * {
              font-size: 50px !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-5"] > * {
              top: -30% !important;
              left: -30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-4"] > * {
              top: -30% !important;
              left: -22% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              top: -30% !important;
              left: -15% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              top: -20% !important;
              left: -7% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              top: -25% !important;
              left: 3% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left: auto !important;
              right: -15% !important;
              top: 0% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: auto !important;
              right: -22% !important;
              top: -15% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: auto !important;
              right: -30% !important;
              top: -30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="4"] > * {
              left: auto !important;
              right: -37% !important;
              top: -45% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="5"] > * {
              left: auto !important;
              right: -45% !important;
              top: -55% !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-5"]):not([data-offset="-4"]):not([data-offset="-3"]):not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]):not([data-offset="3"]):not([data-offset="4"]):not([data-offset="5"]) {
              display: none !important;
            }
            ` : ''}
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .${uniqueId} {
              transform: scale(0.7) !important;
              transform-origin: center top !important;
              top: ${containerTop === '10px' ? '50px' : containerTop === '-200px' ? '-150px' : containerTop} !important;
            }
            .${uniqueId} * {
              font-size: ${parseFloat(fontSize) * 1.2}px !important;
            }            ${containerTop === '-100px' ? `
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              left: 0% !important;
              right: auto !important;
              top: 60% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              left: -10% !important;
              top: 70% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              left: -20% !important;
              top: 65% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-4"] > * {
              left: -30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left: 45% !important;
              right: auto !important;
              top: 70% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: 55% !important;
              right: auto !important;
              top: 55% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: 62% !important;
              right: auto !important;
              top: 32% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="4"] > * {
              left: 40% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-3"]):not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]):not([data-offset="3"]) {
              display: none !important;
            }
            ` : ''}            ${useMathMax ? `
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              left: -5% !important;
              right: auto !important;
              top: 50% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              left: -15% !important;
              right: auto !important;
              top: 35% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              left: -25% !important;
              right: auto !important;
              top: 10% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left: 50% !important;
              right: auto !important;
              top: 60% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: 60% !important;
              right: auto !important;
              top: 38% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: 70% !important;
              right: auto !important;
              top: 10% !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-3"]):not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]):not([data-offset="3"]) {
              display: none !important;
            }
            ` : ''}
            ${containerTop === '-200px' ? `
            .${uniqueId} .dial-number-wrapper[data-offset="-1"] > * {
              left: 3% !important;
              right: auto !important;
              top: 45% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-2"] > * {
              left: -5% !important;
              top: 55% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-3"] > * {
              left: -30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-4"] > * {
              left: -40% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="-5"] > * {
              left: -50% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="1"] > * {
              left:45% !important;
              right: auto !important;
              top: 50% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="2"] > * {
              left: 50% !important;
              right: auto !important;
              top: 30% !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="3"] > * {
              left: 30% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="4"] > * {
              left: 40% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper[data-offset="5"] > * {
              left: 50% !important;
              right: auto !important;
            }
            .${uniqueId} .dial-number-wrapper:not([data-offset="-2"]):not([data-offset="-1"]):not([data-offset="1"]):not([data-offset="2"]) {
              display: none !important;
            }
            ` : ''}
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '1731.22px',
          height: '594.19px',
          left: '4px',
          top: containerTop,
        }}
      >
      {displayNumbers.map((num, index) => {
        let value: number;
        if (useMathMax && num.offset < 0) {
          value = Math.max(0, currentValue + num.offset);
        } else {
          value = (currentValue + num.offset + maxValue) % maxValue;
        }
        return (
          <div
            key={index}
            className={`dial-number-wrapper`}
            data-offset={num.offset}
          >
            <DialNumber
              value={value}
              left={num.left}
              right={num.right}
              top={num.top}
              transform={num.transform}
              fontSize={fontSize}
            />
          </div>
        );
      })}
      </div>
    </>
  );
}

