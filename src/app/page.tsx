'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TimeUnitDial from './components/TimeUnitDial';
import DaysDial from './components/DaysDial';
import CountdownDisplay from './components/CountdownDisplay';
import TimeLabel from './components/TimeLabel';
import SemicircularDial from './components/SemicircularDial';
import EllipseRing from './components/EllipseRing';
import MaskedEllipseLines from './components/MaskedEllipseLines';
import RedSemicircle from './components/RedSemicircle';
import TrapezoidGradient from './components/TrapezoidGradient';
import { hoursDialConfig, minutesDialConfig, secondsDialConfig } from './components/dialConfigs';

export default function CountdownPage() {
  const eventDate = new Date('2026-01-29T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [showInvento, setShowInvento] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  useEffect(() => {
    setShowInvento(true);
  }, []);

  return (
    <div className="h-screen bg-white relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes inventoSlideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .invento-animate {
            animation: inventoSlideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards 1.5s;
          }
        `,
      }} />

      <SemicircularDial />
      <EllipseRing
        width="1120px"
        height="1093px"
        left="calc(50% - 1120px/2 - 10px)"
        top="-915px"
      />
      <EllipseRing
        width="1100px"
        height="1073px"
        left="calc(50% - 1100px/2 - 10px)"
        top="-905px"
      />
      <MaskedEllipseLines />
      <TimeUnitDial
        currentValue={timeLeft.hours}
        maxValue={24}
        numbers={hoursDialConfig}
        containerTop="10px"
        fontSize="40px"
        useMathMax={true}
      />

      <DaysDial currentDays={timeLeft.days} />
      <TimeUnitDial
        currentValue={timeLeft.minutes}
        maxValue={60}
        numbers={minutesDialConfig}
        containerTop="-100px"
        fontSize="35px"
      />
      <TimeUnitDial
        currentValue={timeLeft.seconds}
        maxValue={60}
        numbers={secondsDialConfig}
        containerTop="-200px"
        fontSize="35px"
      />

      <div data-countdown="hours">
        <CountdownDisplay value={timeLeft.hours} top="32%" fontSize="50px" />
      </div>
      <div data-label="hours">
        <TimeLabel label="Hours" top="42%" fontSize="30px" left="calc(50% - 132.37px/2 + 20px)" />
      </div>
      <div data-countdown="minutes">
        <CountdownDisplay value={timeLeft.minutes} top="19%" fontSize="35px" />
      </div>
      <div data-label="minutes">
        <TimeLabel label="Minutes" top="28%" fontSize="20px" left="calc(50% - 132.37px/2 + 20px)" />
      </div>
      <div data-countdown="seconds">
        <CountdownDisplay value={timeLeft.seconds} top="6%" fontSize="30px" />
      </div>
      <div data-label="seconds">
        <TimeLabel label="Seconds" top="15%" fontSize="18px" left="calc(50% - 132.37px/2 + 25px)" />
      </div>
      <div data-countdown="days">
        <CountdownDisplay value={timeLeft.days} top="48%" fontSize="80px" left="calc(50% - 59.96px/2 - 5px)" />
      </div>
      <div data-label="days">
        <TimeLabel label="Days" top="63.5%" fontSize="40px" left="calc(50% - 132.37px/2 + 10px)" />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            [data-countdown="hours"] > * {
              top: 25% !important;
              font-size: 40px !important;
              left: calc(50% - 59.96px/2 - -8px) !important;
            }
            [data-label="hours"] > * {
              top: 30% !important;
              font-size: 20px !important;
            }
            [data-countdown="minutes"] > * {
              top: 15.5% !important;
              font-size: 32px !important;
              left: calc(50% - 59.96px/2 - -15px) !important;
            }
            [data-label="minutes"] > * {
              top: 20% !important;
              font-size: 15px !important;
              left: calc(50% - 59.96px/2 - 0px) !important;
            }
            [data-countdown="seconds"] > * {
              top: 7% !important;
              font-size: 20px !important;

            }
            [data-label="seconds"] > * {
              top: 11% !important;
              font-size: 15px !important;
              left: calc(50% - 59.96px/2) !important;
            }
            [data-countdown="days"] > * {
              top: 36.5% !important;
              font-size: 63.5px !important;
              left: calc(50% - 59.96px/2 - 10px) !important;
            }
            [data-label="days"] > * {
              top: 44% !important;
              font-size: 30px !important;
              left: calc(50% - 59.96px/2 - 10px) !important;
            }
          }
          @media (max-width: 389px) {
            [data-countdown="hours"] > * {
              top: 36% !important;
              left: calc(50% - 59.96px/2 - -18px) !important;
            }
            [data-label="hours"] > * {
              top: 43% !important;
            }
            [data-countdown="minutes"] > * {
              top: 22% !important;
            }
            [data-label="minutes"] > * {
              top: 28% !important;
            }
            [data-countdown="seconds"] > * {
              top: 10.5% !important;
            }
            [data-label="seconds"] > * {
              top: 16% !important;
            }
            [data-countdown="days"] > * {
              top: 50% !important;
            }
            [data-label="days"] > * {
              top: 60% !important;
            }
          }
          
          @media (max-width: 360px) {
            [data-countdown="hours"] > * {
              top: 32% !important;
              left: calc(50% - 59.96px/2 - -10px) !important;
            }
            [data-label="hours"] > * {
              top: 38% !important;
              left: calc(50% - 59.96px/2 - -2px) !important;
            }
            [data-countdown="minutes"] > * {
              top: 20% !important;
            }
            [data-label="minutes"] > * {
              top: 25% !important;
            }
            [data-countdown="seconds"] > * {
              top: 10% !important;
            }
            [data-label="seconds"] > * {
              top: 14% !important;
            }
            [data-countdown="days"] > * {
              top: 45% !important;
            }
            [data-label="days"] > * {
              top: 55% !important;
            }
          }
          @media (min-width: 390px) and (max-width: 393px) {
            [data-countdown="hours"] > * {
              top: 29% !important;
              left: calc(50% - 59.96px/2 - -10px) !important;
            }
            [data-label="hours"] > * {
              top: 34% !important;
            }
            [data-countdown="minutes"] > * {
              top: 17% !important;
            }
            [data-label="minutes"] > * {
              top: 22% !important;
            }
            [data-countdown="seconds"] > * {
              top: 8% !important;
            }
            [data-label="seconds"] > * {
              top: 12% !important;
            }
            [data-countdown="days"] > * {
              top: 41% !important;
            }
            [data-label="days"] > * {
              top: 50% !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            [data-countdown="hours"] > * {
              font-size: 45px !important;
              top: 20% !important;
              left: calc(50% - 132.37px/2 + 32px) !important;
            }
            [data-label="hours"] > * {
              font-size: 25px !important;
              top: 26% !important;
              left: calc(50% - 132.37px/2 +  30px) !important;
            }
            [data-countdown="minutes"] > * {
              font-size: 30px !important;
              top: 10% !important;
              left: calc(50% - 132.37px/2 + 50px) !important;
            }
            [data-label="minutes"] > * {
              font-size: 18px !important;
              top: 15% !important;
              left: calc(50% - 132.37px/2 + 33px) !important;
            }
            [data-countdown="seconds"] > * {
              font-size: 25px !important;
              top: 2% !important;
              left: calc(50% - 132.37px/2 + 50px) !important;
            }
            [data-label="seconds"] > * {
              font-size: 16px !important;
              top: 7% !important;
              left: calc(50% - 132.37px/2 + 32px) !important;
            }
            [data-countdown="days"] > * {
              font-size: 130px !important;
              top: 32% !important;
              left: calc(50% - 59.96px/2 - 32px) !important;
            }
            [data-label="days"] > * {
              font-size: 65px !important;
              top: 45% !important;
              left: calc(50% - 132.37px/2 + -10px) !important;
            }
          }
          @media (min-width: 1024px) and (max-width: 1024px) {
            [data-countdown="hours"] > * {
              top: 20% !important;
            }
            [data-label="hours"] > * {
              top: 25% !important;
            }
          }
          @media (min-width: 1440px) and (max-width: 1440px) {
            [data-countdown="hours"] > * {
              top: 17% !important;
            }
            [data-label="hours"] > * {
              top: 22% !important;
            }
            [data-countdown="minutes"] > * {
              top: 10% !important;
            }
            [data-label="minutes"] > * {
              top: 14% !important;
            }
            [data-countdown="seconds"] > * {
              top: 3% !important;
            }
            [data-label="seconds"] > * {
              top: 8% !important;
            }
            [data-countdown="days"] > * {
              top: 25% !important;
            }
            [data-label="days"] > * {
              top: 35% !important;
            }
          }
          @media (min-width: 2560px) {
            [data-countdown="hours"] > * {
              top: 35% !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-label="hours"] > * {
              top: 42% !important;
              left: calc(50% - 132.37px/2 + 40px) !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-countdown="minutes"] > * {
              top: 24% !important;
              left: calc(50% - 132.37px/2 + 60px) !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-label="minutes"] > * {
              top: 30% !important;
              left: calc(50% - 132.37px/2 + 40px) !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-countdown="seconds"] > * {
              top: 9% !important;
              left: calc(50% - 132.37px/2 + 60px) !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-label="seconds"] > * {
              top: 18% !important;
              left: calc(50% - 132.37px/2 + 50px) !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-countdown="days"] > * {
              top: 50% !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
            [data-label="days"] > * {
              top: 60% !important;
              transform: scale(1.6) !important;
              transform-origin: center !important;
            }
          }
        `
      }} />

      <RedSemicircle />
      <TrapezoidGradient />
      <div
        className="birds-image absolute z-10"
        style={{
          width: '256px',
          height: '144px',
          left: '90px',
          top: '350px',
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .birds-image {
                width: 102px !important;
                height: 58px !important;
                left: 20px !important;
                top: 500px !important;
              }
            }
            @media (max-width: 393px) {
              .birds-image {
                top: 400px !important;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              .birds-image {
                top: 600px !important;
              }
            }
            @media (min-width: 1440px) and (max-width: 1440px) {
              .birds-image {
                top: 650px !important;
              }
            }
            @media (min-width: 2560px) {
              .birds-image {
                top: 700px !important;
                transform: scale(1.6) !important;
                transform-origin: center !important;
              }
            }
          `
        }} />
        <img
          src="/countdown-left.webp"
          alt="Flying birds silhouette"
          className="w-full h-full object-contain block"
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
        />
      </div>
      <div
        className={`invento-text absolute ${showInvento ? 'invento-animate' : ''}`}
        style={{
          width: '998px',
          maxWidth: '90vw',
          height: '229.09px',
          left: 'calc(50% - 998px/2 + 50px)',
          top: 'calc(50% - 229.09px/2 + 243.05px)',
          fontFamily: "'Akira Expanded', sans-serif",
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '160px',
          lineHeight: '190px',
          letterSpacing: '-0.05em',
          background: 'linear-gradient(176.98deg, #C51D28 20.57%, #FFFFFF 65.71%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0,
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .invento-text {
                width: 399px !important;
                height: 92px !important;
                left: calc(50% - 399px/2) !important;
                top: calc(50% - 92px/2 + 200px) !important;
                font-size: 64px !important;
                line-height: 76px !important;
              }
            }
            @media (max-width: 393px) {
              .invento-text {
                width: 320px !important;
                height: 74px !important;
                left: calc(50% - 320px/2) !important;
                top: calc(50% - 74px/2 + 200px) !important;
                font-size: 52px !important;
                line-height: 62px !important;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              .invento-text {
                top: calc(50% - 229.09px/2 + 340px) !important;
              }
            }
            @media (min-width: 1440px) and (max-width: 1440px) {
              .invento-text {
                top: calc(50% - 229.09px/2 + 380px) !important;
              }
            }            @media (min-width: 2560px) {
              .invento-text {
                top: calc(50% - 229.09px/2 + 450px) !important;
                transform: scale(1.6) !important;
                transform-origin: center !important;
              }
            }          `
        }} />
        INVENTO
      </div>

      {/* Bottom decorative image */}
      <div
        className="bottom-image-container absolute bottom-0 left-0 w-full"
        style={{
          height: '50vh',
          filter: 'drop-shadow(0px -24px 50.9px rgba(0, 0, 0, 0.24))',
          overflow: 'hidden',
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .bottom-image-container img {
              transform: none;
              transform-origin: center bottom;
              object-position: center center;
            }
            @media (max-width: 768px) {
              .bottom-image-container {
                overflow: visible !important;
              }
              .bottom-image-container img {
                transform: scaleX(-1) scale(1.8) translateY(-100px) !important;
                transform-origin: center !important;
              }
            }
            @media (max-width: 393px) {
              .bottom-image-container img {
                transform: scaleX(-1) scale(1.8) translateY(-50px) !important;
              }
            }
            @media (min-width: 390px) and (max-width: 410px) {
              .invento-text {
                top: calc(50% - 92px/2 + 240px) !important;
              }
            }
          `
        }} />
        <img
          src="/countdown-bottom.webp"
          alt="Countdown bottom decoration"
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
}
