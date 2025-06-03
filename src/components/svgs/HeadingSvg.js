import React from "react";

const HeadingSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="61"
      viewBox="0 0 70 61"
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        d="M38.5 0.772461V60.5215M22.6301 60.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184M54.3699 60.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184"
        stroke="url(#linear-gradient-bg-lines)"
        strokeWidth="2"
      ></path>
      <g data-v-89efd6b1>
        <path
          d="M54.3699 80.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184L90 -20"
          stroke="url(#glow_gradient_0.2di21yu20tr)"
          strokeWidth="1.2"
          mask="url(#glow_mask_0.2di21yu20tr)"
          className="svg-path"
          data-v-89efd6b1
        ></path>
        <circle
          cx="55.11899948120117"
          cy="30.064228057861328"
          r="3"
          fill="#ce9bf4"
          className="circle-dot"
          style={{ "--dot-color": "#ce9bf4" }}
          data-v-89efd6b1
        ></circle>
        <defs data-v-89efd6b1>
          <mask id="glow_mask_0.2di21yu20tr" data-v-89efd6b1>
            <path
              d="M54.3699 80.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184L90 -20"
              fill="black"
              data-v-89efd6b1
            ></path>
            <circle
              cx="55.11899948120117"
              cy="30.064228057861328"
              r="30"
              fill="white"
              data-v-89efd6b1
            ></circle>
          </mask>
          <radialGradient
            id="glow_gradient_0.2di21yu20tr"
            cx="55.11899948120117"
            cy="30.064228057861328"
            r="30"
            gradientUnits="userSpaceOnUse"
            data-v-89efd6b1
          >
            <stop
              offset="0%"
              stopColor="#BD34FE"
              stopOpacity="1"
              data-v-89efd6b1
            ></stop>
            <stop
              offset="100%"
              stopColor="#BD34FE"
              stopOpacity="0"
              data-v-89efd6b1
            ></stop>
          </radialGradient>
        </defs>
      </g>

      <defs>
        <linearGradient
          id="linear-gradient-bg-lines"
          x1="38.5"
          y1="0.772461"
          x2="38.5"
          y2="60.7725"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#404040" stopOpacity="0"></stop>
          <stop offset="0.5" stopColor="#737373"></stop>
          <stop offset="1" stopColor="#404040" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeadingSvg;
