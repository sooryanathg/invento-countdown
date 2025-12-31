interface TimeLabelProps {
  label: string;
  top: string;
  fontSize?: string;
  left?: string;
}

export default function TimeLabel({
  label,
  top,
  fontSize = '20px',
  left = 'calc(50% - 132.37px/2 + 25px)',
}: TimeLabelProps) {
  // Calculate mobile values (approximately 0.4x scale for mobile)
  const baseFontSize = parseFloat(fontSize || '20px');
  const mobileFontSize = `${baseFontSize * 0.4}px`;
  const mobileLineHeight = `${73 * 0.4}px`;
  const mobileWidth = '48px';
  const uniqueId = `timelabel-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: ${mobileWidth} !important;
              font-size: ${mobileFontSize} !important;
              line-height: ${mobileLineHeight} !important;
              left: calc(50% - ${mobileWidth}/2) !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute flex items-center z-10`}
        style={{
          width: '120px',
          left,
          top,
          fontFamily: "'Amanojaku Demo', sans-serif",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize,
          lineHeight: '73px',
          color: '#C20C19',
          transform: 'matrix(1, 0, 0, 1, 0, 0)',
        }}
      >
        {label}
      </div>
    </>
  );
}

