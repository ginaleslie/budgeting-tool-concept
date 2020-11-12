import React, { useContext } from "react"
import "./styles.css"
import "../../gobalStyles/padding.css"
import "../../gobalStyles/padding.css"
import "../../context/Application"
import ApplicationContext from "../../context/Application"
import Icon from "../Icon"
import user from "../../../static/images/user.png"
import Heading from "../Heading"
// import NavButtons from "../NavButton"
import Overview from "../Overview"
import Track from "../Track"
import Budget from "../Budget"

import IncomeAndExpenses from "../IncomeAndExpenses"

const Navigation = ({ headingForNav }) => {
  const { setActiveTab, activeTab } = useContext(ApplicationContext)
  const buttons = ["Overview", "Track", "Budget"]

  //   const [active, setActive] = useState(buttons[0])

  return (
    <div className="navigation">
      <div className="max-width-container">
        <div className="top">
          <Icon name="logo" size="xlarge" />
          <div className="top-right">
            <Icon name="notifications" size="large" />
            <div className="pr-xsmall pl-xsmall">
              <img src={user} alt="User profile picture" />
            </div>
            <Icon name="menu" size="large" />
          </div>
        </div>
        <Heading
          size="xxmedium"
          color="white"
          weight="bold"
          pt="pt-medium"
          pb="pb-xxsmall"
        >
          {headingForNav}
        </Heading>
        <IncomeAndExpenses />

        <div>
          {buttons.map(type => (
            <button
              key={type}
              active={activeTab === type}
              onClick={() => setActiveTab(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* {(active == "Ovessssrview" && <Overview />)(active == buttons[1]) &&
        (<Track />)(active == buttons[2]) && <Budget />} */}
    </div>
  )
}
export default Navigation
