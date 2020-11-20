import * as React from "react"

function SvgCreate(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#create_svg__filter0_d)">
        <ellipse cx={17.848} cy={17} rx={13.848} ry={14.25} fill="#fff" />
      </g>
      <path
        d="M22.463 18.086h-3.56v3.664h-1.187v-3.664h-3.561v-1.222h3.56V13.2h1.188v3.664h3.56v1.222z"
        fill="#0075C9"
      />
      <defs>
        <filter
          id="create_svg__filter0_d"
          x={0}
          y={0.75}
          width={35.695}
          height={36.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend
            mode="darken"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgCreate

