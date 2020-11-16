import React, { useContext } from "react"
import "./styles.css"
import "../../gobalStyles/padding.css"
import "../../gobalStyles/padding.css"
import "../../context/Application"
import StoredData from "../StoredData"
import Icon from "../Icon"
import user from "../../../static/images/user.png"
import Heading from "../Heading"
import NavButtons from "../NavButtons"
import IncomeAndExpenses from "../IncomeAndExpenses"

const Navigation = ({ headingForNav }) => {
  return (
    <div>
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
        </div>

        <div className="nav-absolute">
          <NavButtons />
        </div>
      </div>
      <StoredData />
    </div>
  )
}
export default Navigation
