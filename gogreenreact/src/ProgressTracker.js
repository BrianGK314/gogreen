//Through Cloud Functions we are able to retrive data for real-time progress located in our Cloudant DB

import React, {useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import "./ProgressTrack.css"

///add function below
import { cloudFunctionsUrls } from './cfuncs/functionList'

function ProgressTracker() {

    console.log()

    function getFunc(func){
        let val = cloudFunctionsUrls.find(item => item.name === func);
        return val
      }

    const columns=[
        { field: "id", headerName: "ID" },
        {
        field: "name",
        headerName: "Organisation",
        flex: 1,
        cellClassName: "name-column--cell",
        },
        {
        field: "age",
        headerName: "Time Elapsed (Years)",
        type: "number",
        headerAlign: "left",
        align: "left",
        },
        {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
        },
        {
        field: "email",
        headerName: "Email",
        flex: 1,
        },

        {
            field: "accessLevel",
            headerName: "Offseting Progress (%)",
            flex: 1,
            renderCell: ({ row: { access,age } }) => {
                return (
                  <div style={{
                    
                    width:`${age*100/4}%`,
                    backgroundColor:(

                        // (age*100/4) <=20 ? "orange" : "aquamarine"
                        (age*100/4) >=20 &&  (age*100/4) <=50 ? "orange" :  (age*100/4) <=20 ? "#F47560" : "aquamarine"
                    ),

                  }} className='booky'>
                    
                    <p className='admin-text' style={{color:"black", marginLeft:"5px"}}>
                      {`${Math.floor(age*100/4)}%`}
                    </p>
                  </div>
                );
              },

          }
    ]

    const [data,setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(getFunc("getProgressTracker")); // Replace with your actual API endpoint
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

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
                            <a>
                                <p className="nav-top nav-decoration">Progress Tracker</p>
                            </a>
                            <a href='/datastream'>
                                <p className="nav-top">R-T Readings</p>
                            </a>
                                <p className="nav-top">Reciepts</p>
                        </div>
                        <div className='profpic'>
                            <img className="profpic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxUjdvGd-Qh7VINaj_7jvx7FZCc30A_Sak7Gh4PGkSPrQaFffXPsltRZElo1lukxlbz0&usqp=CAU"/>
                        </div>
                    </div>
                </div>


        <div className='centre-real-time'>
            <p className='real-time-line-header'>Offset-Progress Tracker</p>
            <div className='rt-line'>
                {/* Table goes here: */}

                <DataGrid 
                
                rows ={ data}
                columns={columns}
                
                />
            </div>

        </div>

    </div>
  )
}

export default ProgressTracker