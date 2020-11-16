import * as React from "react"

function SvgFace(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.677 22c-3.584 0-5.864-2.615-5.864-6s2.28-6 5.864-6h.162c3.588 0 5.786 2.61 5.786 6s-2.198 6-5.786 6h-.162zm27.563 0c-3.584 0-5.865-2.615-5.865-6s2.28-6 5.864-6h.163c3.588 0 5.785 2.61 5.785 6s-2.197 6-5.785 6h-.163zM13.875 40a6 6 0 000 12h35.25a6 6 0 000-12h-35.25z"
        fill="url(#face_svg__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="face_svg__paint0_linear"
          x1={-15.75}
          y1={31}
          x2={25.96}
          y2={77.924}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0075C9" />
          <stop offset={1} stopColor="#76C2B6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgFace

