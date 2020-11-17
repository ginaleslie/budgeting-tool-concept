import React from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"
import "typeface-roboto"

const CategoryButton = ({ children, click, transformArrow }) => (
  <button onClick={click} className="category-button">
    {children}
    <i className="arrow right-arrow"></i>
  </button>
)

export default CategoryButton
