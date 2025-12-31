export default function MaskedEllipseLines() {
  const uniqueId = `masked-ellipse-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .${uniqueId} {
              width: 581px !important;
              height: 151px !important;
              left: calc(50% - 581px/2) !important;
              top: 60px !important;
              transform: scale(1) !important;
              transform-origin: center top !important;
            }
          }
        `
      }} />
      <div
        className={`${uniqueId} absolute`}
        style={{
          width: '1453px',
          height: '377px',
          left: 'calc(50% - 1453px/2)',
          top: '-100px',
          zIndex: 3,
        }}
      >
      <svg
        width="1453"
        height="377"
        viewBox="0 0 1453 377"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <g opacity="0.66">
          <mask
            id="mask0_507_9013"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="7"
            y="-996"
            width="1438"
            height="1364"
          >
            <g style={{ mixBlendMode: 'soft-light' }}>
              <path
                d="M1435.8 -306.411C1431.52 64.6307 1110.87 362.923 718.614 358.842C326.357 354.761 12.6816 49.8692 16.9696 -321.172C21.2577 -692.213 341.904 -990.506 734.161 -986.425C1126.42 -982.344 1440.09 -677.452 1435.8 -306.411Z"
                stroke="black"
                strokeWidth="18.183"
              />
            </g>
          </mask>
          <g mask="url(#mask0_507_9013)">
            <line y1="-2.16465" x2="1556.89" y2="-2.16465" transform="matrix(-0.923597 -0.383366 0.418716 -0.908118 1439.01 26.0469)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1555.86" y2="-2.16465" transform="matrix(-0.91701 -0.398865 0.435048 -0.900408 1433.41 37.9043)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1554.8" y2="-2.16465" transform="matrix(-0.910154 -0.414272 0.451215 -0.892416 1427.59 49.6699)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1553.71" y2="-2.16465" transform="matrix(-0.903029 -0.429581 0.467211 -0.884146 1421.56 61.3398)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1552.59" y2="-2.16465" transform="matrix(-0.895635 -0.44479 0.483032 -0.875603 1415.32 72.9062)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1551.44" y2="-2.16465" transform="matrix(-0.887975 -0.459893 0.498673 -0.86679 1408.86 84.3652)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1550.26" y2="-2.16465" transform="matrix(-0.880047 -0.474887 0.514129 -0.857713 1402.19 95.7148)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1549.06" y2="-2.16465" transform="matrix(-0.871854 -0.489767 0.529395 -0.848376 1395.32 106.957)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1547.84" y2="-2.16465" transform="matrix(-0.863396 -0.504528 0.544467 -0.838783 1388.24 118.08)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1546.59" y2="-2.16465" transform="matrix(-0.854673 -0.519167 0.55934 -0.828939 1380.95 129.086)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1545.32" y2="-2.16465" transform="matrix(-0.845688 -0.533679 0.57401 -0.818849 1373.47 139.967)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1544.03" y2="-2.16465" transform="matrix(-0.836441 -0.548059 0.588474 -0.808517 1365.79 150.725)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1542.72" y2="-2.16465" transform="matrix(-0.826933 -0.562302 0.602726 -0.797948 1357.9 161.354)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1541.39" y2="-2.16465" transform="matrix(-0.817165 -0.576404 0.616765 -0.787148 1349.83 171.85)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1540.06" y2="-2.16465" transform="matrix(-0.80714 -0.590361 0.630585 -0.77612 1341.56 182.211)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1538.7" y2="-2.16465" transform="matrix(-0.796858 -0.604168 0.644185 -0.764871 1333.1 192.434)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1537.34" y2="-2.16465" transform="matrix(-0.786321 -0.617819 0.657559 -0.753404 1324.46 202.514)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1535.96" y2="-2.16465" transform="matrix(-0.775531 -0.63131 0.670706 -0.741724 1315.64 212.449)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1534.58" y2="-2.16465" transform="matrix(-0.76449 -0.644637 0.683621 -0.729838 1306.63 222.238)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1533.19" y2="-2.16465" transform="matrix(-0.753199 -0.657794 0.696304 -0.717748 1297.44 231.875)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1531.79" y2="-2.16465" transform="matrix(-0.74166 -0.670777 0.708749 -0.705461 1288.08 241.361)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1530.39" y2="-2.16465" transform="matrix(-0.729876 -0.683581 0.720956 -0.692982 1278.54 250.688)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1528.99" y2="-2.16465" transform="matrix(-0.717848 -0.696201 0.732921 -0.680315 1268.84 259.855)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1527.59" y2="-2.16465" transform="matrix(-0.70558 -0.708631 0.744643 -0.667464 1258.97 268.863)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1526.18" y2="-2.16465" transform="matrix(-0.693073 -0.720868 0.756118 -0.654436 1248.92 277.703)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1524.79" y2="-2.16465" transform="matrix(-0.680331 -0.732906 0.767345 -0.641235 1238.72 286.379)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1523.39" y2="-2.16465" transform="matrix(-0.667356 -0.74474 0.778323 -0.627866 1228.36 294.883)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1522.01" y2="-2.16465" transform="matrix(-0.654151 -0.756365 0.789048 -0.614333 1217.85 303.213)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1520.63" y2="-2.16465" transform="matrix(-0.640718 -0.767777 0.79952 -0.600641 1207.19 311.367)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1519.26" y2="-2.16465" transform="matrix(-0.627062 -0.77897 0.809736 -0.586796 1196.38 319.348)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1517.91" y2="-2.16465" transform="matrix(-0.613185 -0.78994 0.819695 -0.572801 1185.42 327.143)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1516.56" y2="-2.16465" transform="matrix(-0.599091 -0.800682 0.829396 -0.558662 1174.33 334.758)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1515.24" y2="-2.16465" transform="matrix(-0.584784 -0.81119 0.838837 -0.544384 1163.09 342.188)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1513.93" y2="-2.16465" transform="matrix(-0.570267 -0.82146 0.848018 -0.52997 1151.72 349.428)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1512.64" y2="-2.16465" transform="matrix(-0.555545 -0.831488 0.856936 -0.515425 1140.22 356.484)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1511.36" y2="-2.16465" transform="matrix(-0.54062 -0.841268 0.865591 -0.500754 1128.58 363.346)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1510.11" y2="-2.16465" transform="matrix(-0.525498 -0.850796 0.873981 -0.485962 1116.83 370.014)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1508.89" y2="-2.16465" transform="matrix(-0.510183 -0.860067 0.882106 -0.471052 1104.95 376.486)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1507.68" y2="-2.16465" transform="matrix(-0.49468 -0.869076 0.889966 -0.45603 1092.95 382.76)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1506.51" y2="-2.16465" transform="matrix(-0.478992 -0.87782 0.897558 -0.440899 1080.85 388.836)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1505.36" y2="-2.16465" transform="matrix(-0.463125 -0.886294 0.904882 -0.425664 1068.63 394.711)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1504.24" y2="-2.16465" transform="matrix(-0.447085 -0.894493 0.911938 -0.410329 1056.31 400.381)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1503.15" y2="-2.16465" transform="matrix(-0.430875 -0.902413 0.918726 -0.394899 1043.88 405.844)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1502.09" y2="-2.16465" transform="matrix(-0.414502 -0.91005 0.925243 -0.379377 1031.36 411.104)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1501.07" y2="-2.16465" transform="matrix(-0.39797 -0.9174 0.931491 -0.363768 1018.74 416.156)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1500.08" y2="-2.16465" transform="matrix(-0.381286 -0.924458 0.937468 -0.348076 1006.03 420.996)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1499.13" y2="-2.16465" transform="matrix(-0.364454 -0.931222 0.943173 -0.332304 993.232 425.627)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1498.22" y2="-2.16465" transform="matrix(-0.347482 -0.937688 0.948608 -0.316457 980.353 430.045)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1497.34" y2="-2.16465" transform="matrix(-0.330374 -0.943851 0.953771 -0.300539 967.392 434.248)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1496.5" y2="-2.16465" transform="matrix(-0.313138 -0.949709 0.958661 -0.284554 954.357 438.236)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1495.71" y2="-2.16465" transform="matrix(-0.295778 -0.955258 0.963279 -0.268505 941.247 442.008)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1494.95" y2="-2.16465" transform="matrix(-0.278303 -0.960495 0.967625 -0.252397 928.076 445.561)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1494.24" y2="-2.16465" transform="matrix(-0.260717 -0.965416 0.971698 -0.236233 914.837 448.898)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1493.57" y2="-2.16465" transform="matrix(-0.243028 -0.97002 0.975497 -0.220017 901.54 452.016)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1492.95" y2="-2.16465" transform="matrix(-0.225243 -0.974304 0.979023 -0.203753 888.193 454.908)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1492.37" y2="-2.16465" transform="matrix(-0.207367 -0.978264 0.982276 -0.187444 874.787 457.582)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1491.84" y2="-2.16465" transform="matrix(-0.189409 -0.981899 0.985256 -0.171095 861.337 460.033)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1491.35" y2="-2.16465" transform="matrix(-0.171375 -0.985207 0.987961 -0.154708 847.841 462.262)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1490.91" y2="-2.16465" transform="matrix(-0.153272 -0.988185 0.990393 -0.138288 834.306 464.268)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1490.52" y2="-2.16465" transform="matrix(-0.135107 -0.990832 0.992551 -0.121838 820.744 466.049)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1490.18" y2="-2.16465" transform="matrix(-0.116888 -0.993146 0.994435 -0.105363 807.146 467.604)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.89" y2="-2.16465" transform="matrix(-0.0986212 -0.995126 0.996045 -0.0888639 793.521 468.932)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.64" y2="-2.16465" transform="matrix(-0.0803149 -0.996771 0.997381 -0.0723462 779.876 470.035)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.45" y2="-2.16465" transform="matrix(-0.0619761 -0.998079 0.998442 -0.0558131 766.205 470.914)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.31" y2="-2.16465" transform="matrix(-0.0436121 -0.99905 0.99923 -0.0392681 752.525 471.564)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.21" y2="-2.16465" transform="matrix(-0.0252305 -0.999683 0.999743 -0.0227146 738.845 471.99)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.17" y2="-2.16465" transform="matrix(-0.00683857 -0.999978 0.999982 -0.00615632 725.146 472.189)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.18" y2="-2.16465" transform="matrix(0.0115561 -0.999935 0.999947 0.0104033 711.451 472.158)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.23" y2="-2.16465" transform="matrix(0.0299461 -0.999553 0.999638 0.0269607 697.755 471.904)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.34" y2="-2.16465" transform="matrix(0.0483239 -0.998833 0.999054 0.0435123 684.072 471.422)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.5" y2="-2.16465" transform="matrix(0.0666822 -0.997776 0.998196 0.0600547 670.396 470.711)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.7" y2="-2.16465" transform="matrix(0.0850134 -0.996381 0.997064 0.0765842 656.732 469.775)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1489.96" y2="-2.16465" transform="matrix(0.10331 -0.99465 0.995658 0.0930973 643.087 468.615)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1490.26" y2="-2.16465" transform="matrix(0.121565 -0.992585 0.993978 0.10959 629.47 467.229)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1490.62" y2="-2.16465" transform="matrix(0.139771 -0.990185 0.992024 0.12606 615.88 465.617)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1491.02" y2="-2.16465" transform="matrix(0.157921 -0.987453 0.989796 0.142503 602.322 463.779)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1491.47" y2="-2.16465" transform="matrix(0.176007 -0.98439 0.987294 0.158914 588.798 461.721)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1491.97" y2="-2.16465" transform="matrix(0.194022 -0.980999 0.984518 0.175292 575.314 459.434)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1492.51" y2="-2.16465" transform="matrix(0.21196 -0.97728 0.981468 0.191631 561.876 456.924)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1493.1" y2="-2.16465" transform="matrix(0.229813 -0.973236 0.978145 0.207928 548.486 454.195)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1493.74" y2="-2.16465" transform="matrix(0.247574 -0.96887 0.974549 0.224181 535.15 451.244)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1494.42" y2="-2.16465" transform="matrix(0.265238 -0.964185 0.970679 0.240384 521.865 448.072)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1495.14" y2="-2.16465" transform="matrix(0.282796 -0.959182 0.966537 0.256534 508.646 444.682)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1495.91" y2="-2.16465" transform="matrix(0.300242 -0.953865 0.962121 0.272627 495.49 441.072)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1496.71" y2="-2.16465" transform="matrix(0.31757 -0.948236 0.957433 0.28866 482.396 437.246)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1497.56" y2="-2.16465" transform="matrix(0.334775 -0.9423 0.952473 0.304628 469.384 433.201)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1498.45" y2="-2.16465" transform="matrix(0.351848 -0.936059 0.94724 0.320528 456.443 428.943)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1499.37" y2="-2.16465" transform="matrix(0.368785 -0.929516 0.941736 0.336356 443.58 424.471)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1500.33" y2="-2.16465" transform="matrix(0.385579 -0.922676 0.935961 0.352108 430.806 419.789)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1501.33" y2="-2.16465" transform="matrix(0.402225 -0.915542 0.929915 0.36778 418.119 414.893)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1502.36" y2="-2.16465" transform="matrix(0.418716 -0.908119 0.923598 0.383367 405.525 409.789)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1503.43" y2="-2.16465" transform="matrix(0.435048 -0.900409 0.917011 0.398866 393.025 404.477)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1504.52" y2="-2.16465" transform="matrix(0.451215 -0.892417 0.910155 0.414272 380.626 398.957)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1505.65" y2="-2.16465" transform="matrix(0.467212 -0.884147 0.90303 0.429581 368.326 393.236)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1506.81" y2="-2.16465" transform="matrix(0.483033 -0.875604 0.895636 0.44479 356.142 387.309)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1507.99" y2="-2.16465" transform="matrix(0.498674 -0.866791 0.887976 0.459893 344.056 381.184)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1509.2" y2="-2.16465" transform="matrix(0.51413 -0.857714 0.880048 0.474887 332.095 374.859)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1510.43" y2="-2.16465" transform="matrix(0.529396 -0.848377 0.871855 0.489767 320.247 368.336)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1511.69" y2="-2.16465" transform="matrix(0.544467 -0.838784 0.863397 0.504529 308.529 361.619)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1512.96" y2="-2.16465" transform="matrix(0.55934 -0.82894 0.854674 0.519168 296.927 354.707)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1514.26" y2="-2.16465" transform="matrix(0.574011 -0.81885 0.845689 0.533679 285.458 347.605)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1515.58" y2="-2.16465" transform="matrix(0.588474 -0.808518 0.836441 0.548059 274.115 340.312)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1516.91" y2="-2.16465" transform="matrix(0.602727 -0.797949 0.826934 0.562303 262.908 332.836)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1518.25" y2="-2.16465" transform="matrix(0.616766 -0.787149 0.817166 0.576405 251.853 325.174)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1519.61" y2="-2.16465" transform="matrix(0.630586 -0.776121 0.807141 0.590362 240.935 317.332)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1520.98" y2="-2.16465" transform="matrix(0.644185 -0.764872 0.796859 0.604168 230.162 309.307)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1522.36" y2="-2.16465" transform="matrix(0.65756 -0.753405 0.786322 0.617819 219.537 301.107)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1523.75" y2="-2.16465" transform="matrix(0.670706 -0.741725 0.775532 0.631311 209.056 292.732)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1525.14" y2="-2.16465" transform="matrix(0.683622 -0.729838 0.76449 0.644638 198.747 284.184)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1526.54" y2="-2.16465" transform="matrix(0.696304 -0.717749 0.753199 0.657795 188.587 275.467)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1527.94" y2="-2.16465" transform="matrix(0.70875 -0.705462 0.741661 0.670778 178.591 266.584)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1529.35" y2="-2.16465" transform="matrix(0.720957 -0.692982 0.729876 0.683582 168.763 257.535)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1530.75" y2="-2.16465" transform="matrix(0.732922 -0.680315 0.717849 0.696201 159.099 248.326)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1532.15" y2="-2.16465" transform="matrix(0.744644 -0.667465 0.705581 0.708632 149.599 238.957)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1533.54" y2="-2.16465" transform="matrix(0.756119 -0.654437 0.693074 0.720869 140.287 229.434)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1534.93" y2="-2.16465" transform="matrix(0.767346 -0.641236 0.680332 0.732907 131.146 219.756)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1536.31" y2="-2.16465" transform="matrix(0.778324 -0.627866 0.667357 0.744741 122.185 209.93)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1537.69" y2="-2.16465" transform="matrix(0.789049 -0.614333 0.654151 0.756366 113.4 199.957)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1539.05" y2="-2.16465" transform="matrix(0.79952 -0.600642 0.640719 0.767778 104.806 189.838)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1540.4" y2="-2.16465" transform="matrix(0.809737 -0.586797 0.627063 0.778971 96.3959 179.58)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1541.74" y2="-2.16465" transform="matrix(0.819696 -0.572802 0.613186 0.789941 88.1811 169.186)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1543.06" y2="-2.16465" transform="matrix(0.829397 -0.558663 0.599092 0.800682 80.1498 158.656)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1544.36" y2="-2.16465" transform="matrix(0.838838 -0.544384 0.584785 0.811191 72.3255 147.994)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1545.64" y2="-2.16465" transform="matrix(0.848018 -0.52997 0.570268 0.821461 64.6889 137.203)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1546.91" y2="-2.16465" transform="matrix(0.856937 -0.515425 0.555545 0.831489 57.2553 126.289)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1548.15" y2="-2.16465" transform="matrix(0.865591 -0.500755 0.540621 0.841269 50.0208 115.254)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1549.37" y2="-2.16465" transform="matrix(0.873982 -0.485962 0.525499 0.850796 42.9936 104.1)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1550.57" y2="-2.16465" transform="matrix(0.882107 -0.471053 0.510184 0.860068 36.1731 92.832)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1551.74" y2="-2.16465" transform="matrix(0.889966 -0.45603 0.49468 0.869077 29.5599 81.4512)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1552.88" y2="-2.16465" transform="matrix(0.897559 -0.4409 0.478993 0.877821 23.1576 69.9648)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1553.99" y2="-2.16465" transform="matrix(0.904883 -0.425665 0.463126 0.886295 16.9622 58.3711)" stroke="black" strokeWidth="4.32929" />
            <line y1="-2.16465" x2="1555.07" y2="-2.16465" transform="matrix(0.911939 -0.41033 0.447085 0.894493 10.9856 46.6797)" stroke="black" strokeWidth="4.32929" />
          </g>
        </g>
      </svg>
      </div>
    </>
  );
}

