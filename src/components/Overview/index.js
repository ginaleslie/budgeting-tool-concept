import React, { useContext } from "react"
import Bar from "../../components/BarChart"
import "./styles.css"
import '../../../src/gobalStyles/Chart.css'
import '../../../src/gobalStyles/fonts.css'
import '../../../src/gobalStyles/colors.css'
import styled from "styled-components"

const Spent = styled.div`
background-color: #ffffff;
color:#f26901;
position: relative;
`

const Saved = styled.div`
background-color: #ffffff;
color:#76C2B6;
position: relative;
`
const H1 = styled.h1`
left: 25%;
bottom:15%;
position: absolute;
font-weight: bold;
font-size: 80px;
`

const H4 = styled.h4`
right: 20%;
bottom:25%;
position: absolute;
`

const Budget = styled.div`
background-color: #E6F1FA;
position:relative;
text-align: center;
display: table-cell;
vertical-align: middle;
right:35px;
top:-30px;
border-radius: 20px;
height: 40px;
width: 200px;
`


const Overview = () => (
    <div className="body">
        <div className="grid-container">
            <h1 className={'font-xxmedium color-grey300'}>mmmh...looks like you spent over your budget today.</h1>
        </div>
        <div className="grid-container">
            <Spent className="grid-item"> <H1>47%</H1> <H4>Spent from <br/> your budget</H4></Spent>
            <Saved className="grid-item"><H1>0.2%</H1> <H4>Saved from <br/> your budget</H4></Saved>   
        </div>
        <div className="grid-container">
            <div className="grid-item">
                <div className='Chart'>
                    <Bar /> 
                </div>
            </div>
            <div className="grid-item">
                <Budget><p className={'font-medium color-blue500'}>Your Budget</p></Budget>
                <p className={'font-medium color-grey300'}>Last edited 03/11/2020</p>
                    <br />
                        <h2 className= 'font-xxmedium'>Girlfriend's birthday gift</h2>
                            <br />
                                <p className={'font-xxmedium color-grey300'}>R3500 / R5000</p>
                            <br />
                        <h2 className= 'font-xxmedium'>Playstation 5</h2>
                    <br />
                <p className={'font-xxmedium color-grey300'}>R3500 / R10 000</p>    
            </div>   
        </div>

        <div className="grid-container2">
            <div className="grid-item2">
                <div className='Chart'>
                   food
                </div>
            </div>
        </div>
        <div>
        <div className="Summery">
            <dive className="left">
                content
            </dive>
            <dive className="Right"> 
                content
            </dive>
        </div>
        <div className="Summery">
            <dive className="left">
                content
            </dive>
            <dive className="Right"> 
                content
            </dive>
        </div>
        </div>

            <div class="flex-grid">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    </div>

        
    </div>

)

export default Overview
