import React, { useState, useContext } from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"
import "typeface-roboto"
import ApplicationContext from "../../context/Application"

const CreateNewCategory = ({ click }) => {
  const { newCategory, setNewCategory } = useContext(ApplicationContext)

  const handleColorChange = e => {
    setNewCategory({ ...newCategory, color: e.target.value })
  }

  const handleNameChange = e => {
    setNewCategory({ ...newCategory, name: e.target.value })
  }
  console.log(newCategory)

  return (
    <div>
      <div className="create-category-text-input">
        <p style={{ paddingLeft: "16px" }}>Category name :</p>
        <input
          type="text"
          placeholder="Type name here"
          onChange={handleNameChange}
          className="radio-btn-input"
        />
      </div>

      <div className="create-category-text-input">
        <p style={{ paddingLeft: "16px" }}>Category spend limit :</p>
        <input
          type="text"
          placeholder="Type amount here"
          className="radio-btn-input"
        />
      </div>

      <div className="create-category-text-input">
        <p style={{ paddingLeft: "16px" }}>Activate limit:</p>
        <p className="radio-btn-input-limit">
          <input type="radio" placeholder="Type amount here" />
          Daily
        </p>
        <p className="radio-btn-input-limit">
          <input type="radio" placeholder="Type amount here" />
          Weekly
        </p>
        <p className="radio-btn-input-limit">
          <input type="radio" placeholder="Type amount here" />
          Monthly
        </p>
      </div>

      <ul className="radio-colors-group">
        <li>
          <input
            type="radio"
            value="red"
            checked={newCategory.color === "red"}
            onChange={handleColorChange}
            className="color-radio-btn radio-red"
          />
        </li>

        <li>
          <input
            type="radio"
            value="yellow"
            checked={newCategory.color === "yellow"}
            onChange={handleColorChange}
            className="color-radio-btn radio-yellow"
          />
        </li>

        <li>
          <input
            type="radio"
            value="purple"
            checked={newCategory.color === "purple"}
            onChange={handleColorChange}
            className="color-radio-btn radio-purple"
          />
        </li>

        <li>
          <input
            type="radio"
            value="green"
            checked={newCategory.color === "green"}
            onChange={handleColorChange}
            className="color-radio-btn radio-green"
          />
        </li>

        <li>
          <input
            type="radio"
            value="lime"
            checked={newCategory.color === "lime"}
            onChange={handleColorChange}
            className="color-radio-btn radio-lime"
          />
        </li>
      </ul>

      <button onClick={click} className="radio-save">
        Save
      </button>
    </div>
  )
}
export default CreateNewCategory
