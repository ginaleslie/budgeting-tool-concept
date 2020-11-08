import React from 'react'
import './Chart.css'
import LocalStorage from '../components/LocalStorage'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/DoughnutChart'


export default function Home() {
  return (
    <div>
      Hello developers!
      <LocalStorage />
      <div className='chart'>
       <LineChart /> 
       <BarChart /> 
       <DoughnutChart />
      </div>
    </div>
  )
}
