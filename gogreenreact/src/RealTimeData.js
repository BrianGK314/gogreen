import React from 'react'
import "./RealTimeData.css"
import UpdatingLineChart from './UpdatingLineChart'

function RealTimeData() {
  return (
    <div className='main-linechart'>

        <div className='dash-header'>
                    <div className='left-logo'>
                        <img className='logo' src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-leaf-logo-design-png-image_1829919.jpg"></img>
                        <a href='/'><span className='logo-text'>Go Green</span></a>
                    </div>
                    <div className='right-nav-profpic'>
                        <div className='dash-nav'>
                            <a href='/Offsetters'>
                                <p className="nav-top">Market</p>
                            </a>
                            <a href="/progress">
                                <p className="nav-top">Progress Tracker</p>
                            </a>
                            <a href='/datastream'>
                                <p className="nav-top nav-decoration">R-T Readings</p>
                            </a>
                                <p className="nav-top">Reciepts</p>
                        </div>
                        <div className='profpic'>
                            <img className="profpic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxUjdvGd-Qh7VINaj_7jvx7FZCc30A_Sak7Gh4PGkSPrQaFffXPsltRZElo1lukxlbz0&usqp=CAU"/>
                        </div>
                    </div>
                </div>


        <div className='centre-real-time'>
            <p className='real-time-line-header'>Real-time CO2 Emissions</p>
            <div className='rt-line'>
                <UpdatingLineChart/>

            </div>

        </div>

    </div>
  )
}

export default RealTimeData
