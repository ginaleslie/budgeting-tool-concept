import React from "react"
import PropTypes from "prop-types"
import Logo from "./assets/logo"
import Menu from "./assets/menu"
import Notifications from "./assets/notifications"
import ArrowDown from "./assets/arrowDown"
import ArrowUp from "./assets/arrowUp"

const Icon = ({ name, size }) => {
  let iconSize
  switch (size) {
    case "small":
      iconSize = 10
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
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
}

Icon.defaultProps = {
  size: "medium",
}

export default Icon
