import React from "react"
import "./styles.css"
import "../../gobalStyles/globalCssVariables.css"
import "typeface-roboto"
import Icon from "../Icon"

const CreateNewButton = ({ createNewCategory }) => (
  <div>
    <button onClick={createNewCategory} className="create-new-category-button">
      Create a new category
      <Icon name="create" size="xlarge" />
    </button>
  </div>
)

export default CreateNewButton
