import React, { useContext } from "react"
import OverViewChart from "../OverViewChart"
import "./styles.css"
import "../../../src/gobalStyles/Chart.css"
import "../../../src/gobalStyles/fonts.css"
import "../../../src/gobalStyles/globalCssVariables.css"
import "../../../src/gobalStyles/colors.css"
// import Face from "./Face"

import Paste from "./Paste"
import Icon from "../Icon"
import Copy from "../Copy"
import Heading from "../Heading"

const Overview = () => (
  <div className="overview-bg">
    <div className="overview-max-width">
      {/*head*/}
      <div className="face">
        <Icon name="face" size="xxlarge" />
      </div>
      <div>
        <h1 className={"Heading-top font-xxmedium color-grey300 font-medium"}>
          <Copy>mmmh...looks like you spent over your budget today.</Copy>
        </h1>
      </div>

      {/* boxes 1*/}
      <ul className="flex-container">
        <li className="flex-item">
          <div className="catagory">
            <div className="percentage">
              <Heading color="alert500" size="large" weight="bold">
                47%
              </Heading>
            </div>
            <div className="text color-alert500">
              Spent from <br />
              your budget.
            </div>
          </div>
        </li>
        <li className="flex-item">
          <div className="catagory">
            <div className="percentage">
              <Heading color="aqua500" size="large" weight="bold">
                0.2%
              </Heading>
            </div>
            <div className="text color-aqua500">
              Saved from <br />
              your budget.
            </div>
          </div>
        </li>
      </ul>

      {/* chart boxe2*/}
      <ul className="flex-container3">
        <li className="flex-item3">
          <div className="Chart-text">
            <Copy color="blue-700" size="medium" weight="bold">
              Categories with the most spend
            </Copy>
          </div>
          <div className="Chart">
            <OverViewChart />
          </div>
        </li>
        <li className="flex-item3">
          <div className="tick">
            <Icon name="tick" size="small" />
          </div>
          <div className="budget-box">
            <div className="budget">
              <Copy color="blue-700" size="xsmall">
                Your budget
              </Copy>
            </div>

            <br />
            <p className={"font-xsmall color-grey300"}>
              Last edited 03/11/2020
            </p>
            <br />
            <h2 className="font-medium color-grey500 font-xsmall">
              Girlfriend's birthday gift
              <div className="amount">
                <Icon name="tune" size="small" />
              </div>
            </h2>
            <br />
            <p className={"font-xsmall color-grey300 font-medium"}>
              R3500 / R5000
            </p>
            <br />
            <h2 className="font-medium color-grey500 font-xsmall">
              Playstation 5
              <div className="amount">
                <Icon name="tune" size="small" />
              </div>
            </h2>
            <br />
            <p className={"font-xsmall color-grey300 font-medium"}>
              R3500 / R10 000
            </p>
            <br />
            <hr style={{ borderTop: "1px solid #EBEEF1" }} />
            <div
              className={"font-medium color-blue500 Add-product font-medium"}
            >
              <p>Add product</p>
            </div>
            <div className="Paste-icon">
              <Paste />
            </div>
          </div>
        </li>
      </ul>
      <Heading
        size="xmedium"
        color="centennial-500"
        weight="medium"
        pt="pt-large"
        pb="pb-large"
      >
        Here’s a summary of what you spent on today
      </Heading>

      {/*boxes3*/}
      <ul className="flex-container2">
        <li className="flex-item2">
          <div className="Summary1 color-grey300">
            <div className="info-dot blue"></div>
            Food
          </div>
          <p className="amount color-grey300 font-bold">-R2965,00</p>
        </li>
      </ul>
      <ul className="flex-container2">
        <li className="flex-item2">
          <Copy weight="light">
            <div className="Summary1 color-grey300">
              <div className="info-dot green font-regular"></div>
              Fuel
            </div>
          </Copy>
          <Copy>
            <p className="amount color-grey300 font-meduim">-R1500,00</p>
          </Copy>
        </li>
      </ul>
    </div>
  </div>
)

export default Overview
