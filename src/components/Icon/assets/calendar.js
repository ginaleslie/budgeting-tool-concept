import * as React from "react"

function SvgCalendar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 24" fill="none" {...props}>
      <path
        d="M7.34 11h2.096v2H7.34v-2zm0 4h2.096v2H7.34v-2zm4.193-4h2.097v2h-2.097v-2zm0 4h2.097v2h-2.097v-2zm4.194-4h2.097v2h-2.097v-2zm0 4h2.097v2h-2.097v-2z"
        fill="#0151A3"
      />
      <path
        d="M5.242 22h14.68c1.156 0 2.096-.897 2.096-2V6c0-1.103-.94-2-2.097-2h-2.097V2h-2.097v2h-6.29V2H7.338v2H5.242c-1.156 0-2.096.897-2.096 2v14c0 1.103.94 2 2.096 2zm14.68-14v12H5.242V8h14.68z"
        fill="#0151A3"
      />
    </svg>
  )
}

export default SvgCalendar

