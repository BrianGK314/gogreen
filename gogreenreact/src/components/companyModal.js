import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import "../Market.css"

function CompanyModal({emptyModalData, modalData,showModal,toggleIndModal,showContact, toggleCont}) {
  return (
    <div className='market-modal-main' style={{visibility:(showModal==true ? "visible": "hidden")}}>
        <div className='modal-card-reciepts'>
                <div className='back-to-dash'>
                    <IoIosArrowBack className='back-icon-dash' onClick={() => {toggleIndModal();emptyModalData()}}/>
                </div>
                <div className='market-modal-image-cont modal-reciept-pdf'>
                
                    <img className='company-modal-pic' src={modalData.src}/>

                </div>

                <div className='reciept-ai-info'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>{modalData.name}</p>
                    </div>
                    <div className='reciept-info-layout company-info-layout'>
                        <p className='comapmy-summary'>Summary:</p>
                        <p className='comapmy-summary-text'>Green Mountain Energy was founded in Vermont in 1997 as an offshoot of Green Mountain Power to take advantage of the deregulation of the Texas electricity market. In September 2000, the company moved its headquarters to Austin, Texas. In January 2002, Green Mountain began serving the Texas market and was the first to offer alternative energy in the state. In August 2009 Green Mountain Energy expanded to New York City, serving those in the Con Edison service territory</p>
                    </div>
                    <div className='market-modal-contact'>

                        <p className='show-contact' onClick={toggleCont}>Show Contacts</p>
                        <p className='market-individual-contact' style={{visibility:(showContact==true ? "visible" : "hidden")}}>{modalData.email}</p>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default CompanyModal