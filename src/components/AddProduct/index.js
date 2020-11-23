import React from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"
import "typeface-roboto"
import Icon from "../Icon"
import Copy from "../Copy"
import Paste from "../Overview/Paste"


function AddProduct() {
  return (
      <div className="">
      <Copy color="blue-700" size="xsmall">
      <Paste/>Add Product
      </Copy>
    </div>
  )
}

export default AddProduct