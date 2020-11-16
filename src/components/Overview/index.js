import React, { useContext } from "react"
import Bar from "../../components/BarChart"
import "./styles.css"
import "../../../src/gobalStyles/Chart.css"
import "../../../src/gobalStyles/fonts.css"
import "../../../src/gobalStyles/globalCssVariables.css"
import "../../../src/gobalStyles/colors.css"
import styled from "styled-components"
import Calander from "./Calander"
// import Face from "./Face"
import Tick from "./Tick"
import Paste from "./Paste"
import Icon from "../Icon"
import Copy from "../Copy"

const Spent = styled.div`
  background-color: #ffffff;
  color: #f26901;
  position: relative;
`

const Saved = styled.div`
  background-color: #ffffff;
  color: #76c2b6;
  position: relative;
`
const H1 = styled.h1`
  left: 25%;
  bottom: 15%;
  position: absolute;
  font-weight: bold;
  font-size: 80px;
`

const H4 = styled.h4`
  right: 20%;
  bottom: 25%;
  position: absolute;
`

const Budget = styled.div`
  background-color: #e6f1fa;
  position: relative;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  right: 35px;
  top: -30px;
  border-radius: 20px;
  height: 40px;
  width: 150px;
`

const Overview = () => (
  <div className="body">
    <div>
      <p className={"Summary font-xxmedium color-grey500 font-medium"}>
        Summary 10/11/2020 <Calander />
      </p>
    </div>
    <div className="grid-container">
      <h1 className={"Heading-top font-xxmedium color-grey300 font-medium"}>
        <div className="face">
          <Icon name="face" size="xxlarge" />
        </div>
        <Copy>mmmh...looks like you spent over your budget today.</Copy>
      </h1>
    </div>
    <div className="face">
      <Icon name="face" size="xxlarge" />
    </div>
    <div className="box">
      <div className="grid-container">
        <Spent className="grid-item">
          <H1>47%</H1>
          <H4>
            Spent from <br />
            your budget
          </H4>
        </Spent>

        <Saved className="grid-item">
          <H1>0.2%</H1>
          <H4>
            Saved from <br /> your budget
          </H4>
        </Saved>
      </div>
    </div>

    <div class="box">
      <div>
        <div className="grid-item">
          <p className="Heading-chart font-xxmedium color-blue700 font-bold">
            Catagories with the most spend
          </p>
          <div className="Chart">
            <Bar />
          </div>
        </div>
      </div>
      <div>
        <div className="grid-item">
          <Budget>
            <p className={"font-medium color-blue500 font-medium"}>
              <Tick />
              Your Budget
            </p>
          </Budget>
          <p className={"font-medium color-grey300"}>Last edited 03/11/2020</p>
          <br />
          <h2 className="font-xxmedium color-grey500">
            Girlfriend's birthday gift
          </h2>
          <br />
          <p className={"font-xxmedium color-grey300 font-medium"}>
            R3500 / R5000
          </p>
          <br />
          <h2 className="font-xxmedium color-grey500 font-medium">
            Playstation 5
          </h2>
          <br />
          <p className={"font-xxmedium color-grey300"}>R3500 / R10 000</p>
          <br />
          <hr className="line" />
          <div
            className={"font-xxmedium color-blue500 Add-product font-medium"}
          >
            <p>Add product</p>
          </div>
          <div className="Paste-icon">
            <Paste />
          </div>
        </div>
      </div>
    </div>

    <div>
      <p
        className={
          "Heading-bottom font-xxmedium color-contenial500 pl-xxxlarge font-medium"
        }
      >
        Here’s a summary of what you spent on today
      </p>
    </div>

    <div className="box">
      <div className="grid-container2">
        <div className="grid-item2">
          <p className="catagory color-grey300">
            <div className="info-dot blue"></div>
            Food
          </p>
          <p className="price color-grey300 font-bold">-R2965,00</p>
        </div>

        <div className="grid-item2">
          <p className="catagory color-grey300">
            <div className="info-dot2 green"></div>
            Fuel
          </p>
          <p className="price color-grey300">-R1500,00</p>
        </div>
      </div>
    </div>
  </div>
)

export default Overview
