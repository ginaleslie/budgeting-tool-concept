import React from "react"
import "./styles.css"

const LoginButton = ({ click }) => (
  <button className="login-btn" type="button" onClick={click}>
    Login
  </button>
)
export default LoginButton
