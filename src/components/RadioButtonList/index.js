import React from "react"
import RadioButton from "../RadioButton"
import { Button } from "@indiefin/galaxy-button"
import CreateNewButton from "../CreateNewButton"

const RadioButtonList = ({
  onChange,
  value,
  saveCategoryPreference,
  categories,
  createNewCategory,
}) => {
  return (
    <div>
      {categories.map((item, index) => (
        <RadioButton
          radioColor={item.color}
          item={item}
          key={`${item.name}_${index}`}
          checked={item.name === value}
          onChange={onChange}
        />
      ))}
      <div style={{ float: "right" }}>
        <CreateNewButton createNewCategory={createNewCategory} />
        <div style={{ float: "right", marginTop: "20px" }}>
          <Button
            kind="filled"
            color="blue"
            size="regular"
            handleClick={saveCategoryPreference}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RadioButtonList
