import React, { useContext, useEffect, useCallback } from "react"
import "typeface-roboto"
import ApplicationContext from "../../context/Application"
import "./styles.css"
import "../../gobalStyles/padding.css"
import "../../gobalStyles/globalCssVariables.css"
import Heading from "../Heading"
import Copy from "../Copy"
import TextInput from "../TextInput"
import PasswordInput from "../PasswordInput"
import CheckBox from "../Checkbox"
import gif from "../../../static/images/loader.gif"

const Login = () => {
  const { setUserLoggedin, setActiveTab } = useContext(ApplicationContext)
  const buttons = ["Overview", "Track", "Budget"]

  const login = () => {
    const haventLoggedIn = localStorage.haventLoggedIn === "true" // change "true" to true and others to false
    setUserLoggedin(haventLoggedIn)
    localStorage.setItem("haventLoggedIn", !haventLoggedIn)
    setActiveTab(buttons[0])
  }
  useEffect(() => {
    setUserLoggedin()
  })
  return (
    <>
      {" "}
      <div className="login-container">
        <img src={gif} alt="loading..." />
        <Heading
          size="xxmedium"
          color="centennial-500"
          weight="bold"
          pt="pt-medium"
          pb="pb-xxsmall"
        >
          Welcome
        </Heading>
        <Heading
          size="xmedium"
          color="wealth-grey-300"
          weight="medium"
          pb="pb-large"
        >
          Sign in to continue
        </Heading>
        <form>
          <Copy color="wealth-grey-500" pb="pb-medium" pt="pt-medium">
            Email address
          </Copy>
          <TextInput />
          <Copy color="wealth-grey-500" pb="pb-medium" pt="pt-medium">
            Password
          </Copy>
          <PasswordInput />
          <div className="float">
            <Copy
              size="xsmall"
              color="wealth-grey-300"
              pb="pb-xxsmall"
              pt="pt-xxsmall"
            >
              Forget your password?
            </Copy>
          </div>
          <div className="pt-large">
            <CheckBox />
          </div>
          <button type="button" className="login-btn" onClick={() => login()}>
            Login
          </button>
          <Copy
            size="medium"
            color="wealth-grey-300"
            pb="pb-xxsmall"
            pt="pt-medium"
          >
            Don’t have an account yet? Create an account
          </Copy>
        </form>
      </div>
    </>
  )
}

export default Login
