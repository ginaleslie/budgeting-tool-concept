import React from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"
import "typeface-roboto"

const ColorPickerButton = React.memo(function ColorPickerButton({
  item,
  checked,
  onChange,
  radioColor,
}) {
  return (
    <div className="radio-button">
      <div className="flex-radio-btn">
        <div
          style={{
            background: radioColor,
            height: "9px",
            width: "9px",
            marginRight: "10px",
          }}
        ></div>
        {item.name}
      </div>
      <input
        type="radio"
        value={item.name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
})

export default ColorPickerButton
