import React from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"

const CategoryButton = ({ children, click, transformArrow }) => (
  <button onClick={click} className="category-button">
    {children}
    <i className="arrow right"></i>
  </button>
)

export default CategoryButton
