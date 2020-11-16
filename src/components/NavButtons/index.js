import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import "./styles.css"

const NavButtons = () => {
  const { activeTab, setActiveTab } = useContext(ApplicationContext)
  const buttons = ["Overview", "Track", "Budget"]
  return (
    <div>
      {buttons.map(type => (
        <button
          key={type}
          className={activeTab === type ? "active" : "notActive"}
          onClick={() => setActiveTab(type)}
        >
          {type}
        </button>
      ))}
    </div>
  )
}
export default NavButtons
