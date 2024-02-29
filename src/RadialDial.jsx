function RadialDial(props) {
  // function handleMouseDown(e) {
  //   e.preventDefault();
  //   let x = Math.floor(e.clientX); // Horizontal --max 550 --min 120
  //   // let y = e.clientY; // Vertical
  //   let x0 = Math.cos(x) - Math.sin(x); // Horizontal --max 550 --min 120

  //   document.documentElement.style.setProperty("rotate", x);
  //   console.log(x0);
  // }

  // function handleMouseMove(e) {
  //   let x = Math.floor(e.clientX);
  //   console.log(x);
  //   // let y = e.clientY; // Vertical
  //   // let x0 = Math.cos(x) - Math.sin(x); // Horizontal --max 550 --min 120
  // }

  return (
    <svg
      viewBox="0 0 500 500"
      style={{ scale: "1.2" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g id="Frame 1" clipPath="url(#clip0_8_2)">
        <rect width={500} height={500} fill="#D9D9D9" />
        <g id="outerRing" filter="url(#filter0_ddiiii_8_2)">
          <circle cx={250} cy={250} r={200} fill="#D1D1D1" />
        </g>
        <circle
          id="valueBar"
          cx={250}
          cy={250}
          r={153}
          stroke="url(#paint0_linear_8_2)"
          strokeWidth={5}
        />
        <g id="knotchBar">
          <circle
            id="knotches"
            cx={250}
            cy={250}
            r={125}
            stroke="url(#paint1_linear_8_2)"
            strokeWidth={5}
            strokeDasharray="1 1"
          />
          <rect
            id="minus"
            x={119}
            y={236}
            width={11}
            height={4}
            rx={2}
            fill="black"
          />
          <g id="plus">
            <path
              d="M370 238.5C370 237.395 370.895 236.5 372 236.5H379C380.105 236.5 381 237.395 381 238.5C381 239.605 380.105 240.5 379 240.5H372C370.895 240.5 370 239.605 370 238.5Z"
              fill="black"
            />
            <path
              d="M375.5 244C374.396 244 373.5 243.105 373.5 242V235C373.5 233.895 374.396 233 375.5 233C376.605 233 377.5 233.895 377.5 235V242C377.5 243.105 376.605 244 375.5 244Z"
              fill="black"
            />
          </g>
          <rect
            id="minus_2"
            x={253}
            y={119.5}
            width={11}
            height={4}
            rx={2}
            transform="rotate(90 253 119.5)"
            fill="black"
          />
          <text
            id="0%"
            fill="black"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Mina"
            fontSize={13}
            fontWeight="bold"
            letterSpacing="0em">
            <tspan x={242.153} y={144.14}>
              {"0%"}
            </tspan>
          </text>
        </g>
        <g id="knobAnimate">
          <g id="knob" filter="url(#filter1_ddddii_8_2)">
            <circle cx={250} cy={250} r={100} fill="url(#paint2_linear_8_2)" />
          </g>
          <rect
            id="knotch"
            x={247}
            y={161}
            width={7}
            height={38}
            rx={3.5}
            fill="#595959"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ddiiii_8_2"
          x={41}
          y={41}
          width={418}
          height={418}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={-1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_8_2"
            result="effect2_dropShadow_8_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_8_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={9} dy={9} />
          <feGaussianBlur stdDeviation={11.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0.9 0"
          />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_8_2" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-9} dy={-9} />
          <feGaussianBlur stdDeviation={9} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_8_2"
            result="effect4_innerShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={9} dy={-9} />
          <feGaussianBlur stdDeviation={9} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_innerShadow_8_2"
            result="effect5_innerShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-9} dy={9} />
          <feGaussianBlur stdDeviation={9} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0 0.54902 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect5_innerShadow_8_2"
            result="effect6_innerShadow_8_2"
          />
        </filter>
        <filter
          id="filter1_ddddii_8_2"
          x={-43}
          y={-15}
          width={558}
          height={558}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-55} dy={55} />
          <feGaussianBlur stdDeviation={69} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={55} dy={-55} />
          <feGaussianBlur stdDeviation={55} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_8_2"
            result="effect2_dropShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-55} dy={-55} />
          <feGaussianBlur stdDeviation={55} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_8_2"
            result="effect3_dropShadow_8_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={55} dy={55} />
          <feGaussianBlur stdDeviation={55} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_8_2"
            result="effect4_dropShadow_8_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_8_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={-2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0 0.509804 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="shape" result="effect5_innerShadow_8_2" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-2} dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect5_innerShadow_8_2"
            result="effect6_innerShadow_8_2"
          />
        </filter>
        <linearGradient
          id="paint0_linear_8_2"
          x1={250}
          y1={240.5}
          x2={250}
          y2={250}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.9999} stopColor="#1A1A1A" />
          <stop offset={1} stopColor="#808080" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8_2"
          x1={250}
          y1={222.5}
          x2={250}
          y2={229}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.9999} />
          <stop offset={1} stopColor="#808080" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8_2"
          x1={150}
          y1={150}
          x2={350}
          y2={350}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#CCCCCC" />
          <stop offset={1} stopColor="#D8D8D8" />
        </linearGradient>
        <clipPath id="clip0_8_2">
          <rect width={500} height={500} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RadialDial;
