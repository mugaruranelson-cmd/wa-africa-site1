import React from 'react';

const DynamicWaves = () => {
  return (
    <div className="dynamic-waves-container" style={{
      position: 'relative',
      width: '100%',
      height: '300px',
      overflow: 'hidden',
      background: 'transparent',
      marginTop: 'var(--space-8)',
      borderRadius: 'var(--radius-xl)',
    }}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(37, 211, 102, 0.7)"
            style={{ animationDelay: '-2s', animationDuration: '7s' }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(18, 140, 126, 0.5)"
            style={{ animationDelay: '-3s', animationDuration: '10s' }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(37, 211, 102, 0.3)"
            style={{ animationDelay: '-4s', animationDuration: '13s' }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="var(--color-green)"
            style={{ animationDelay: '-5s', animationDuration: '20s' }}
          />
        </g>
      </svg>

      {/* Visual Accents for "Fast & Dynamic" */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <div style={{
          fontSize: '3rem',
          fontWeight: 900,
          color: 'var(--color-ink)',
          opacity: 0.1,
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          Agile Automation
        </div>
      </div>

      <style>{`
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% {
            transform: translate3d(85px,0,0);
          }
        }
        @media (max-width: 768px) {
          .dynamic-waves-container {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicWaves;
