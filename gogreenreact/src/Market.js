import React ,{useEffect, useState} from 'react'
import "./Market.css"
import "./Dash.css"
import {LiaSearchSolid} from "react-icons/lia"
import {IoIosArrowBack} from "react-icons/io"
import {BiFilterAlt} from "react-icons/bi"
import {AiOutlineSend} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {FiPlus} from "react-icons/fi"
import IndividualModal from './components/individualModal'
import CompanyModal from './components/companyModal'
import LeaseLand from './components/LeaseLand'

///add function below
import { cloudFunctionsUrls } from './cfuncs/functionList'

function Market() {

  function getFunc(func){
    let val = cloudFunctionsUrls.find(item => item.name === func);
    return val
}

    const [showModal,setShowModal] = useState(false);
    const [modalData,setModalData] = useState({});


    const [showContact,setShowContact] = useState(false);

    const toggleCont =() =>{
        setShowContact(true);
    }

    const toggleContOff =() =>{
        setShowContact(false);
    }

    const toggleIndModal =(id) =>{
        setModalData(leaseData.find(x => x.id ==id))
        setShowModal(!showModal);
        toggleContOff()
    }

    const emptyModalData =() => {
        setModalData({})
    }

    const [market, setMarket] = useState(false);
    function toggleMarket(){
        setMarket(!market)
    }


    const [leaseData,setLeaseData]  = useState([])
    

  

    const [filter, setFilter] = useState('');
    const [items, setItems] = useState(leaseData);
    const [leaseLandModal,setLeaseLandModal] =  useState(false);


    const toggleModal =()=>{
        setLeaseLandModal(!leaseLandModal)
    }

    const addLease = (lease) =>{
        setLeaseData([...leaseData,lease])
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(getFunc("getLand")); // Replace with your actual API endpoint
          const result = await response.json();
          setLeaseData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    const handleInputChange = (e) => {
        setFilter(e.target.value);
        setItems(
          leaseData.filter((item) =>
            item.allowed.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      };

  return (
    <div className='market-main'>
        <div className='dash-header'>
            <div className='left-logo'>
                <img className='logo' src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-leaf-logo-design-png-image_1829919.jpg"></img>
                <a href='/'><span className='logo-text'>Go Green</span></a>
            </div>
            <div className='right-nav-profpic'>
                <div className='dash-nav'>
                    <a href='/Offsetters'>
                        <p className="nav-top nav-decoration">Market</p>
                    </a>
                    <a href="/progress">
                        <p className="nav-top">Progress Tracker</p>
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

        <h1 className='market-main-title'>Land Explorer</h1>
        <div className='market-carry'>

            <div className='market-config'>

                <div className='market-search'>
                    <input className='market-input-search' value={filter} onChange={handleInputChange}></input>
                    <LiaSearchSolid className='market-input-icon'/>
                </div>

                <div className='market-filter' onClick={toggleModal}>
                    <FiPlus className='market-filter-icon'/>
                    <span className='market-filter'>Lease</span>
                </div>

            </div>

            <div className='switch-markets'>
                <div className='arrow-align'>
                    <a  href="/Offsetters">
                        <p className='sw-mrk-text'>Company Search <AiOutlineArrowRight/> </p>
                        
                    </a>
                </div>
            </div>

            <div className='market-results'>

                {items.map(card => (

                    <div className='result-card' onClick={() => toggleIndModal(card.id)}>
                        <img className='market-image' src={card.src}></img>
                        <div className='market-card-bottom'>
                            <div className='go-to-action'>
                                <p className='market-owner'>{`Owner: ${card.owner}`}</p>
                                <p className='market-location'>{`Status: ${card.status}`}</p>
                            </div>
                            <div className='open'>
                                <AiOutlineSend className='open-market-modal'/>
                            </div>
                        </div>
                    </div>
                ))}

 

            </div>

        </div>


        <IndividualModal emptyModalData={emptyModalData} modalData={modalData} toggleCont={toggleCont} showContact={showContact} showModal={showModal} toggleIndModal={toggleIndModal}></IndividualModal>
        {/* <CompanyModal toggleCont={toggleCont} showContact={showContact} showModal={showModal} toggleIndModal={toggleIndModal}></CompanyModal> */}
        < LeaseLand leaseLandModal={leaseLandModal} toggleLease={toggleModal} addLeaseNew={addLease}/>
    </div>
  )
}

export default Market