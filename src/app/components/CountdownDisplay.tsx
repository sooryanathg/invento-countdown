interface CountdownDisplayProps {
  value: number;
  top: string;
  fontSize: string;
  left?: string;
  lineHeight?: string;
}

export default function CountdownDisplay({
  value,
  top,
  fontSize,
  left = 'calc(50% - 59.96px/2 - -5px)',
  lineHeight,
}: CountdownDisplayProps) {
  // Default lineHeight based on fontSize if not provided
  const defaultLineHeight = fontSize === '80px' ? '196px' : '147px';
  
  // Calculate mobile values (approximately 0.4x scale for mobile)
  const baseFontSize = parseFloat(fontSize || '50px');
  const mobileFontSize = `${baseFontSize * 0.4}px`;
  const baseLineHeight = parseFloat(lineHeight || defaultLineHeight);
  const mobileLineHeight = `${baseLineHeight * 0.4}px`;
  const mobileWidth = '24px';
  const uniqueId = `countdown-${Math.random().toString(36).substr(2, 9)}`;
  
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
          width: '59.96px',
          left,
          top,
          fontFamily: "'Amanojaku Demo', sans-serif",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize,
          lineHeight: lineHeight || defaultLineHeight,
          color: '#C20C19',
          transform: 'matrix(1, -0.09, 0.1, 0.99, 0, 0)',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
    </>
  );
}

