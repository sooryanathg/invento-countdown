export default function RedSemicircle() {
  const uniqueId = `red-semicircle-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 65px !important;
              height: 64px !important;
              left: calc(50% - 65px/2) !important;
              top: -33px !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '163px',
          height: '160px',
          left: 'calc(50% - 163px/2 + 0.5px)',
          top: '-83px',
          background: '#C20C19',
          borderRadius: '50%',
        }}
      />
    </>
  );
}

