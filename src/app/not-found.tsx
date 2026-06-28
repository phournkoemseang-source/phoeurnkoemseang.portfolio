"use client";

import { Column, Heading, Text, Button } from "@once-ui-system/core";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const rect = blobRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      blobRef.current.style.setProperty("--mx", `${dx * 10}px`);
      blobRef.current.style.setProperty("--my", `${dy * 10}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Column as="section" fill center paddingBottom="160" gap="l">
      <div className="monster-wrapper" ref={blobRef}>
        <div className="monster">
          <div className="eye left">
            <div className="pupil" />
          </div>
          <div className="eye right">
            <div className="pupil" />
          </div>
          <div className="mouth">
            <div className="tongue" />
          </div>
          <div className="horn left" />
          <div className="horn right" />
          <div className="arm left" />
          <div className="arm right" />
          <div className="sweat" />
        </div>
      </div>

      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        PAGE NOT FOUND
      </Heading>
      <Text
        onBackground="neutral-weak"
        wrap="balance"
        align="center"
        style={{ maxWidth: 400 }}
      >
        Oopsie woopsie! 🙈 This page went for a walk and never came back...
        <br />
        Maybe it&apos;s grabbing bubble tea? 🧋
        <br />
        Try pressing the button below before our monster gets hangry! 😤
      </Text>
      <Button href="/" variant="primary" size="m" weight="default" arrowIcon>
        Take me home
      </Button>

      <style>{`
        .monster-wrapper {
          --mx: 0px;
          --my: 0px;
          margin-bottom: 1.5rem;
          transition: transform 0.1s ease;
          transform: translate(var(--mx), var(--my));
        }

        .monster {
          position: relative;
          width: 180px;
          height: 200px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          25% { transform: translateY(-12px) rotate(1deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
          75% { transform: translateY(-14px) rotate(2deg); }
        }

        .monster::before {
          content: "";
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 16px;
          background: rgba(0,0,0,0.08);
          border-radius: 50%;
          animation: shadowPulse 3s ease-in-out infinite;
        }

        @keyframes shadowPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(0.7); opacity: 0.15; }
        }

        .monster::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 45% 55% 50% 50% / 55% 50% 50% 45%;
          background: linear-gradient(
            135deg,
            var(--brand-background-strong),
            var(--accent-background-strong)
          );
          animation: morphBlob 6s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes morphBlob {
          0% { border-radius: 45% 55% 50% 50% / 55% 50% 50% 45%; }
          25% { border-radius: 50% 50% 45% 55% / 50% 55% 45% 50%; }
          50% { border-radius: 55% 45% 50% 50% / 45% 50% 55% 50%; }
          75% { border-radius: 45% 55% 55% 45% / 50% 45% 55% 50%; }
          100% { border-radius: 45% 55% 50% 50% / 55% 50% 50% 45%; }
        }

        .eye {
          position: absolute;
          z-index: 1;
          width: 32px;
          height: 36px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 48px;
          animation: eyeBounce 4s ease-in-out infinite;
        }

        @keyframes eyeBounce {
          0%, 100% { transform: scaleY(1); }
          3% { transform: scaleY(0.1); }
          6% { transform: scaleY(1); }
        }

        .eye.left {
          left: 38px;
        }

        .eye.right {
          right: 38px;
        }

        .pupil {
          width: 14px;
          height: 14px;
          background: #111;
          border-radius: 50%;
          animation: lookAround 5s ease-in-out infinite;
        }

        @keyframes lookAround {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(3px, -2px); }
          40% { transform: translate(-2px, 3px); }
          60% { transform: translate(4px, 1px); }
          80% { transform: translate(-3px, -1px); }
        }

        .mouth {
          position: absolute;
          z-index: 1;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 22px;
          border-bottom: 4px solid var(--neutral-on-background-strong);
          border-radius: 0 0 50% 50%;
          animation: mouthOpen 2s ease-in-out infinite;
        }

        @keyframes mouthOpen {
          0%, 100% { height: 22px; }
          30% { height: 8px; }
          60% { height: 30px; border-bottom-width: 3px; }
          70% { height: 22px; }
        }

        .tongue {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 0;
          background: #ff6b81;
          border-radius: 0 0 8px 8px;
          animation: tongueOut 2s ease-in-out infinite;
        }

        @keyframes tongueOut {
          0%, 100% { height: 0; }
          60% { height: 14px; }
          70% { height: 14px; }
          85% { height: 0; }
        }

        .horn {
          position: absolute;
          z-index: 1;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 30px solid var(--accent-background-strong);
          top: -8px;
          animation: hornShake 2s ease-in-out infinite;
        }

        @keyframes hornShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        .horn.left {
          left: 42px;
        }

        .horn.right {
          right: 42px;
          animation-delay: 0.3s;
        }

        .arm {
          position: absolute;
          z-index: -1;
          width: 30px;
          height: 60px;
          background: linear-gradient(
            135deg,
            var(--brand-background-strong),
            var(--accent-background-strong)
          );
          border-radius: 15px;
          top: 80px;
          animation: armWave 1.5s ease-in-out infinite;
        }

        @keyframes armWave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        .arm.left {
          left: -20px;
          transform-origin: top center;
        }

        .arm.right {
          right: -20px;
          animation-delay: 0.3s;
          transform-origin: top center;
        }

        .sweat {
          position: absolute;
          z-index: 1;
          top: 20px;
          right: 20px;
          width: 8px;
          height: 14px;
          background: rgba(255,255,255,0.5);
          border-radius: 4px;
          animation: sweatDrop 2s ease-in-out infinite;
        }

        @keyframes sweatDrop {
          0%, 100% { 
            transform: translateY(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
      `}</style>
    </Column>
  );
}
