export default function SemicircularDial() {
  const uniqueId = `semicircular-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 691px !important;
              height: 212px !important;
              left: calc(50% - 691px/2) !important;
              top: 100px !important;
              transform: scale(1) !important;
              transform-origin: center top !important;
              z-index: 0 !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '1728px',
          height: '529px',
          left: '-80px',
          top: '-150px',
          zIndex: 1,
        }}
      >
      <svg
        width="1728"
        height="529"
        viewBox="0 0 1728 529"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <g filter="url(#filter0_d_510_10242)">
          <path
            d="M849.496 -1144.83C1316.95 -1144.83 1695.83 -772.82 1695.83 -314C1695.83 144.82 1316.95 516.835 849.496 516.835C382.04 516.835 3.16077 144.82 3.16077 -314C3.16077 -772.82 382.04 -1144.83 849.496 -1144.83Z"
            stroke="black"
            strokeWidth="4.32929"
            shapeRendering="crispEdges"
          />
        </g>
        <rect
          x="-0.608235"
          y="0.14948"
          width="6.97639"
          height="18.4549"
          transform="matrix(-0.53768 0.843149 -0.86725 -0.497872 1578.91 130.041)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="1601.66"
          y="93.9041"
          width="7.777"
          height="19.9147"
          transform="rotate(121.176 1601.66 93.9041)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <path
          d="M1616.66 62.0581L1599.62 51.7486L1603.64 45.0945L1620.68 55.404L1616.66 62.0581Z"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <path
          d="M1634.63 26.5581L1617.59 16.2486L1621.62 9.5945L1638.66 19.904L1634.63 26.5581Z"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.616129"
          y="0.116465"
          width="6.99717"
          height="18.406"
          transform="matrix(-0.583495 0.812116 -0.839667 -0.543101 1552.49 169.204)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.622056"
          y="0.0830294"
          width="7.01878"
          height="18.3549"
          transform="matrix(-0.627276 0.778797 -0.809578 -0.587012 1523.83 206.948)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.626185"
          y="0.0469938"
          width="7.04249"
          height="18.2985"
          transform="matrix(-0.67167 0.740851 -0.774722 -0.632302 1492.23 243.998)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.627975"
          y="0.0129468"
          width="7.0651"
          height="18.2444"
          transform="matrix(-0.711075 0.703116 -0.73945 -0.673211 1459.3 278.459)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.627635"
          y="-0.0235577"
          width="7.08933"
          height="18.1861"
          transform="matrix(-0.750689 0.660656 -0.699052 -0.71507 1423.68 311.755)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.625183"
          y="-0.0578669"
          width="7.11192"
          height="18.1314"
          transform="matrix(-0.785505 0.618855 -0.658571 -0.752518 1386.8 342.514)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.620261"
          y="-0.0944501"
          width="7.13558"
          height="18.0738"
          transform="matrix(-0.820099 0.572221 -0.612608 -0.790387 1347.54 371.678)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.612931"
          y="-0.130901"
          width="7.15849"
          height="18.0177"
          transform="matrix(-0.85199 0.523559 -0.563787 -0.82592 1306.65 398.586)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.603852"
          y="-0.164834"
          width="7.17901"
          height="17.9672"
          transform="matrix(-0.87935 0.476176 -0.515454 -0.856917 1264.64 422.931)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.591798"
          y="-0.200633"
          width="7.19957"
          height="17.9163"
          transform="matrix(-0.905733 0.423849 -0.46123 -0.887281 1220.81 445.13)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.578277"
          y="-0.23368"
          width="7.21731"
          height="17.8721"
          transform="matrix(-0.927743 0.373221 -0.407989 -0.912987 1175.99 464.695)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.562622"
          y="-0.26608"
          width="7.2333"
          height="17.8322"
          transform="matrix(-0.947016 0.321187 -0.352554 -0.935792 1129.97 481.744)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.543608"
          y="-0.29975"
          width="7.24812"
          height="17.795"
          transform="matrix(-0.964445 0.264285 -0.291205 -0.956661 1082.76 496.241)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.523671"
          y="-0.330306"
          width="7.25967"
          height="17.7659"
          transform="matrix(-0.977745 0.209795 -0.231855 -0.97275 1034.89 507.99)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.501777"
          y="-0.359714"
          width="7.26873"
          height="17.743"
          transform="matrix(-0.988011 0.154383 -0.171017 -0.985268 986.352 517.012)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.478035"
          y="-0.387809"
          width="7.27511"
          height="17.7269"
          transform="matrix(-0.995161 0.0982601 -0.109027 -0.994039 937.329 523.278)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.452584"
          y="-0.414429"
          width="7.27868"
          height="17.7179"
          transform="matrix(-0.999132 0.0416606 -0.0462683 -0.998929 888.011 526.772)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.423741"
          y="-0.441035"
          width="7.2793"
          height="17.7163"
          transform="matrix(-0.999821 -0.0189445 0.0210431 -0.999779 835.207 527.465)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.397257"
          y="-0.462672"
          width="7.27713"
          height="17.7218"
          transform="matrix(-0.997413 -0.0718912 0.0798103 -0.99681 785.874 525.264)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.367787"
          y="-0.48406"
          width="7.27205"
          height="17.7347"
          transform="matrix(-0.99174 -0.128267 0.142209 -0.989837 736.733 520.31)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.335321"
          y="-0.504764"
          width="7.2636"
          height="17.756"
          transform="matrix(-0.982221 -0.187729 0.20768 -0.978197 687.911 512.589)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.304116"
          y="-0.522167"
          width="7.25303"
          height="17.7826"
          transform="matrix(-0.970124 -0.242612 0.267663 -0.963513 639.758 502.126)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.27234"
          y="-0.537627"
          width="7.24008"
          height="17.8152"
          transform="matrix(-0.955045 -0.29646 0.325981 -0.945376 592.379 488.973)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.240146"
          y="-0.551166"
          width="7.22501"
          height="17.8529"
          transform="matrix(-0.937083 -0.349106 0.382383 -0.924004 545.97 473.196)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.205491"
          y="-0.563531"
          width="7.20686"
          height="17.8981"
          transform="matrix(-0.914859 -0.403774 0.440206 -0.897897 500.408 454.762)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.172821"
          y="-0.573225"
          width="7.18819"
          height="17.9445"
          transform="matrix(-0.891255 -0.453503 0.492065 -0.870559 456.379 433.955)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.137881"
          y="-0.581599"
          width="7.16683"
          height="17.9972"
          transform="matrix(-0.863233 -0.504806 0.544749 -0.838599 413.367 410.572)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.105111"
          y="-0.587662"
          width="7.14571"
          height="18.049"
          transform="matrix(-0.834389 -0.551176 0.591599 -0.806232 372.29 385.131)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.0702004"
          y="-0.592277"
          width="7.12234"
          height="18.1061"
          transform="matrix(-0.800968 -0.598708 0.638815 -0.76936 332.356 357.176)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.0353813"
          y="-0.59503"
          width="7.0984"
          height="18.1642"
          transform="matrix(-0.764888 -0.644163 0.683163 -0.730266 294.109 327.034)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="-0.0028519"
          y="-0.595959"
          width="7.0757"
          height="18.219"
          transform="matrix(-0.728717 -0.684815 0.722129 -0.691758 258.327 295.408)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="0.0317004"
          y="-0.595215"
          width="7.0515"
          height="18.277"
          transform="matrix(-0.687692 -0.726003 0.760915 -0.648852 223.807 261.268)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="0.0639372"
          y="-0.592907"
          width="7.02908"
          height="18.3305"
          transform="matrix(-0.646994 -0.762495 0.794679 -0.607029 192.041 226.092)"
          fill="black"
          stroke="black"
          strokeWidth="0.865858"
        />
        <rect
          x="0.110877"
          y="-0.680304"
          width="8.09273"
          height="21.2303"
          transform="matrix(-0.604183 -0.796845 0.825937 -0.563762 168.298 196.987)"
          fill="black"
          stroke="black"
        />
        <rect
          x="0.150136"
          y="-0.673567"
          width="8.06666"
          height="21.2918"
          transform="matrix(-0.556247 -0.831017 0.856518 -0.516117 146.244 166.82)"
          fill="black"
          stroke="black"
        />
        <rect
          x="0.150136"
          y="-0.673567"
          width="8.06666"
          height="21.2918"
          transform="matrix(-0.556247 -0.831017 0.856518 -0.516117 123.627 134.631)"
          fill="black"
          stroke="black"
        />
        <rect
          x="0.150136"
          y="-0.673567"
          width="8.06666"
          height="21.2918"
          transform="matrix(-0.556247 -0.831017 0.856518 -0.516117 103.834 100.65)"
          fill="black"
          stroke="black"
        />
        <rect
          x="0.150136"
          y="-0.673567"
          width="8.06666"
          height="21.2918"
          transform="matrix(-0.556247 -0.831017 0.856518 -0.516117 84.8523 68.1446)"
          fill="black"
          stroke="black"
        />
        <rect
          x="0.150136"
          y="-0.673567"
          width="8.06666"
          height="21.2918"
          transform="matrix(-0.556247 -0.831017 0.856518 -0.516117 64.8534 26.1446)"
          fill="black"
          stroke="black"
        />
        <defs>
          <filter
            id="filter0_d_510_10242"
            x="-2.46771"
            y="-1147"
            width="1703.93"
            height="1672.93"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.46343" />
            <feGaussianBlur stdDeviation="1.73172" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_510_10242"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_510_10242"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      </div>
    </>
  );
}

