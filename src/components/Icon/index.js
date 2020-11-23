import React from "react"
import PropTypes from "prop-types"
import Logo from "./assets/logo"
import Menu from "./assets/menu"
import Notifications from "./assets/notifications"
import ArrowDown from "./assets/arrowDown"
import ArrowUp from "./assets/arrowUp"
import Calendar from "./assets/calendar"
import Check from "./assets/check"
import Face from "./assets/face"
import Create from "./assets/create"
import Tune from "./assets/tune"
import Tick from "./assets/tick"
import Bindie from "./assets/bindie"

const Icon = ({ name, size }) => {
  let iconSize
  switch (size) {
    case "small":
      iconSize = 10
      break
    case "lsmall":
      iconSize = 13
      break
    case "medium":
      iconSize = 18
      break
    case "large":
      iconSize = 24
      break
    case "xlarge":
      iconSize = 48
      break
    case "xxlarge":
      iconSize = 64
      break

    case "xxxlarge":
      iconSize = 90
      break
    default:
      break
  }

  let content
  switch (name) {
    case "logo":
      content = (
        <Logo
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "menu":
      content = (
        <Menu
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "notifications":
      content = (
        <Notifications
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "paste":
      content = (
        <Paste
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "arrowUp":
      content = (
        <ArrowUp
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "arrowDown":
      content = (
        <ArrowDown
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "calendar":
      content = (
        <Calendar
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "tune":
      content = (
        <Tune
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "tick":
      content = (
        <Tick
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "check":
      content = (
        <Check
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "face":
      content = (
        <Face
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "create":
      content = (
        <Create
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    case "bindie":
      content = (
        <Bindie
          style={{
            height: `${iconSize}px`,
            width: `${iconSize}px`,
          }}
        />
      )
      break

    default:
      break
  }

  return (
    <div
      style={{
        height: `${iconSize}px`,
        width: `${iconSize}px`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  /**
   * name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * size of the icon to display
   */
  size: PropTypes.oneOf([
    "small",
    "lsmall",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "xxxlarge",
  ]),
}

Icon.defaultProps = {
  size: "medium",
}

export default Icon
