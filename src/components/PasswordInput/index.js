import React from 'react'
import 'typeface-roboto'
import './styles.css'
import '../../gobalStyles/globalCssVariables.css'

const PasswordInput = () => {
  function togglePW() {
    document.querySelector('.eye').classList.toggle('slash')
    const password = document.getElementById('password')
    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text')
    } else {
      password.setAttribute('type', 'password')
    }
  }

  return (
    <div>
      <input type="password" name="password" placeholder="" id="password" />
      <div
        className="eye slash"
        onClick={() => togglePW()}
        role="button"
        onKeyDown={() => togglePW()}
        tabIndex={0}
      >
        <div />
        <div />
      </div>
    </div>
  )
}

export default PasswordInput
