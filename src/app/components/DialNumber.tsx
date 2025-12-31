interface DialNumberProps {
  value: number;
  left: string;
  right: string;
  top: string;
  transform: string;
  fontSize?: string;
  lineHeight?: string;
  bottom?: string;
  specialWrapper?: boolean; // For days-3 special case
}

export default function DialNumber({
  value,
  left,
  right,
  top,
  transform,
  fontSize = '35px',
  lineHeight = '98px',
  bottom,
  specialWrapper = false,
}: DialNumberProps) {
  const content = (
    <div
      style={{
        position: specialWrapper ? 'relative' : 'absolute',
        left: specialWrapper ? undefined : left,
        right: specialWrapper ? undefined : right,
        top: specialWrapper ? '-80px' : top,
        bottom: specialWrapper ? undefined : bottom,
        zIndex: 20,
        fontFamily: "'Amanojaku Demo', sans-serif",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize,
        lineHeight,
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        transform,
      }}
    >
      {String(value).padStart(2, '0')}
    </div>
  );

  if (specialWrapper) {
    return (
      <div
        style={{
          position: 'absolute',
          left,
          right,
          top,
          bottom,
          zIndex: 20,
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}

