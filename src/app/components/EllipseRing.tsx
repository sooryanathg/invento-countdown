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
  const uniqueId = `ellipse-${Math.random().toString(36).substr(2, 9)}`;
  const baseWidth = parseFloat(width);
  const baseHeight = parseFloat(height);
  const mobileWidth = `${baseWidth * 0.4}px`;
  const mobileHeight = `${baseHeight * 0.4}px`;
  
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

