import React, { useState, useRef, useContext } from "react"
import Icon from "../Icon"
import { Button } from "@indiefin/galaxy-button"
import "./styles.css"
import Copy from "../Copy"

const Accordion = ({
  title,
  date,
  amount,
  addToFood,
  addToHousehold,
  color,
}) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion-icon")

  const [displayChangeCategory, setDisplayChangeCategory] = useState(false)

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active-accordion" : "")
    setHeightState(
      setActive === "active-accordion"
        ? "0px"
        : `${content.current.scrollHeight}px`
    )
    setRotateState(setActive === "active-accordion" ? "" : "rotate")
  }

  return (
    <div className="accordion-section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className="track-flex">
          <div className="square" style={{ background: color }}></div>
          <p className="accordion-title">{title}</p>
        </div>

        <i className={`accordion-icon ${setRotate}`}></i>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div className="accordion-text">
          <div className="accordion-flex">
            <div className="transaction-details">
              <Icon name="check" size="lsmall" />
              Transaction Details
            </div>
            <Button
              kind="text"
              handleClick={() => setDisplayChangeCategory(true)}
              size="large"
            >
              Change category
            </Button>
          </div>
          <div className="accordion-flex">
            <Copy color="wealth-grey-500" size="small">
              Transaction type:
            </Copy>
            <Copy size="small">Card</Copy>
          </div>
          <div className="accordion-flex">
            <Copy color="wealth-grey-500" size="small">
              Amount:
            </Copy>
            <Copy size="small">R {amount}</Copy>
          </div>
          <div className="accordion-flex">
            <Copy color="wealth-grey-500" size="small">
              Account:
            </Copy>
            <Copy size="small">Savings</Copy>
          </div>
          <hr style={{ borderTop: "1px solid #EBEEF1" }} />
          <div className="accordion-flex pt-xxsmall">
            <Copy color="wealth-grey-500" size="small">
              Transaction date:
            </Copy>
            <Copy size="small"> {date}</Copy>
          </div>
        </div>
      </div>
      {displayChangeCategory ? (
        <div>
          <button onClick={addToFood}>food</button>
          <button onClick={addToHousehold}>household</button>
        </div>
      ) : null}
    </div>
  )
}

export default Accordion
