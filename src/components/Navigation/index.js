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
import IncomeAndExpenses from "../IncomeAndExpenses"

const Navigation = ({ headingForNav }) => {
  const {
    incomeSum,
    expensesSum,
    setDisplayTrack,
    setDisplayBudget,
    setDisplayOverview,
  } = useContext(ApplicationContext)
  console.log(incomeSum)

  const goToBudget = () => {
    setDisplayBudget(true)
    setDisplayOverview(false)
    setDisplayTrack(false)
  }
  const goToOverview = () => {
    setDisplayBudget(false)
    setDisplayOverview(true)
    setDisplayTrack(false)
  }

  const goToTrack = () => {
    setDisplayBudget(false)
    setDisplayOverview(false)
    setDisplayTrack(true)
  }

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
      </div>
      <div>
        <button onClick={() => goToOverview()}>Overview</button>
        <button onClick={() => goToTrack()}>Track</button>
        <button onClick={() => goToBudget()}>Budget</button>
      </div>
    </div>
  )
}
export default Navigation
