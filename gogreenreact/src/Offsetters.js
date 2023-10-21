//Through Cloud Functions we are able to retrieve data for vetted offsetting initiatives located in our Cloudant DB


import React ,{useState} from 'react'
import "./Market.css"
import "./Dash.css"
import {LiaSearchSolid} from "react-icons/lia"
import {IoIosArrowBack} from "react-icons/io"
import {BiFilterAlt} from "react-icons/bi"
import {AiOutlineSend} from "react-icons/ai"
import IndividualModal from './components/individualModal'
import CompanyModal from './components/companyModal'
import {AiOutlineArrowRight} from "react-icons/ai"

///add function below
import { cloudFunctionsUrls } from './cfuncs/functionList'



function Offsetters() {

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
        setModalData(displayInfo.find(x => x.id ==id))
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



    // const displayInfo=[
    //     {
    //         id:0,
    //         org: "Alex Mwangi & Co",
    //         src:"https://8billiontrees.com/wp-content/uploads/2021/06/terrapass-vector-logo.webp",
    //     },
        
    // ]


      const [displayInfo,setDisplayInfo] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(getFunc("getCompanies")); // Replace with your actual API endpoint
            const result = await response.json();
            setDisplayInfo(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    const [filter, setFilter] = useState('');
    const [items, setItems] = useState(displayInfo);

    const handleInputChange = (e) => {
        setFilter(e.target.value);
        setItems(
        displayInfo.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
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

        <h1 className='market-main-title'>Offset Explorer</h1>
        <div className='market-carry'>

            <div className='market-config'>

                <div className='market-search'>
                    <input value={filter} onChange={handleInputChange} className='market-input-search'></input>
                    <LiaSearchSolid className='market-input-icon'/>
                </div>

                <div className='market-filter'>
                    <BiFilterAlt className='market-filter-icon'/>
                    <span className='market-filter'>FILTER</span>
                </div>

            </div>

            <div className='switch-markets'>
                <div className='arrow-align'>
                    <a  href="/market">
                        <p className='sw-mrk-text'>Land Search <AiOutlineArrowRight/> </p>
                        
                    </a>
                </div>
            </div>

            <div className='market-results'>

                {items.map(card => (

                    <div className='result-card' onClick={() => toggleIndModal(card.id)}>
                        <img className='market-image' src={card.src}></img>
                        <div className='market-card-bottom organisation-ttle-card'>
                            <div className='go-to-action'>
                                <p style={{textAlign:"center",margin:"0 1.5rem"}} className='market-owner'>{`Organisation: ${card.name}`}</p>
                            </div>
                            <div className='open'>
                                <AiOutlineSend className='open-market-modal company-button'/>
                            </div>
                        </div>
                    </div>
                ))}

 

            </div>

        </div>


        <CompanyModal emptyModalData={emptyModalData} modalData={modalData} toggleCont={toggleCont} showContact={showContact} showModal={showModal} toggleIndModal={toggleIndModal}></CompanyModal>
        
    </div>
  )
}

export default Offsetters