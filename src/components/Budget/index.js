import React from "react"
import "./styles.css"
import "../../../src/gobalStyles/colors.css"
import "../../../src/gobalStyles/fonts.css"
import Face from "./Face"
import Copy from "../Copy"
import Warning1 from "./Warning1"
import Warning2 from "./Warning2"
import YourBudget from "./YourBudget"
import Needhelp2 from "./Needhelp2"
import ChartBox from "./ChartBox"
import Edit from "./Edit"

const Budget = () => (
  <div className="budget-max-width">
    <div className="box">
      <div className="grid-container">
        <div className="grid-item">
          <p className="catagory color-grey300">
            <br></br>
            <YourBudget />
          </p>
        </div>
        <div className="grid-item">
          <p className="color-grey300">
            <h1>Girlfriend's birthday </h1>
            <div className="edit-budget">
              <Edit />
            </div>

            <br></br>
            <div className="amount-1">
              <Warning2 /> 20 days until Girlfriend’s birthday
            </div>
          </p>

          <p className={"amount-1 price"}>-R2965,00</p>
        </div>
        <div className="grid-item">
          <p className="color-grey300">
            <h1>Playstation 5</h1>
            <div className="edit-budget">
              <Edit />
            </div>
            <br></br>
            <div className="amount-2">
              <Warning1 /> 100 days until Playstation
            </div>
          </p>

          <p className={"amount-1 price"}>-R2965,00</p>
        </div>

        <div>
          <h2 className="budget-h1">Summary</h2>
          <div className="grid-item">
            <div>
              <div className="budget-face-wrapper">
                <div className="budget-face-wrapper-padding">
                  <Face />
                </div>
                <div>
                  <Copy size="medium">Consistency is key, Thabiso </Copy>
                  <Copy size="small" pt="pt-xxsmall">
                    You had quite a good start, however, your biggest drawback
                    is spending on fuel. To reach your goals, you'll need to cut
                    back on fuel spend. Here's how, Read for more tips
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-container">
          <div class="need">
            <Needhelp2 />
          </div>

          <br></br>
          <br></br>

          <div class="chartHelp">
            <ChartBox />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Budget
