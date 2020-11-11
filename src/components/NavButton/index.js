import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"

const NavButtons = () => {
  const { setDisplayTrack, setDisplayBudget, setDisplayOverview } = useContext(
    ApplicationContext
  )
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
    <div>
      <button onClick={() => goToOverview()}>Overview</button>
      <button onClick={() => goToTrack()}>Track</button>
      <button onClick={() => goToBudget()}>Budget</button>
    </div>
  )
}
export default NavButtons
