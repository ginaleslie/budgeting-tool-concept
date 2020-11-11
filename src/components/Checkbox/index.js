/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import 'typeface-roboto'
import '../../gobalStyles/globalCssVariables.css'
import './styles.css'

const Checkbox = () => (
  <div className="checkbox">
    <input id="check1" type="checkbox" name="check" value="check1" />
    <label htmlFor="check1">Keep me signed in</label>
  </div>
)

export default Checkbox
