import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import "../Market.css"

function IndividualModal({emptyModalData, modalData,showModal,toggleIndModal,showContact, toggleCont}) {
  return (
    <div className='market-modal-main' style={{visibility:(showModal==true ? "visible": "hidden")}}>
        <div className='modal-card-reciepts'>
                <div className='back-to-dash'>
                    <IoIosArrowBack className='back-icon-dash' onClick={() =>{toggleIndModal();emptyModalData()}}/>
                </div>
                <div className='market-modal-image-cont modal-reciept-pdf'>
                
                    <img className='market-modal-land' src={modalData.src} />

                </div>

                <div className='reciept-ai-info'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>Land Information</p>
                    </div>
                    <div className='reciept-info-layout'>
                        <p className='reciept-info-text'>{`Owner: ${modalData.owner}`}</p>
                        <p className='reciept-info-text'>{`Location: ${modalData.location}`}</p>
                        <p className='reciept-info-text'>{`Land Disputes: ${modalData.disputes}`}</p>
                        <p className='reciept-info-text'>{`Area: ${modalData.area}`}</p>
                        <p className='reciept-info-text'>{`Allowed Activities: ${modalData.allowed}`}</p>
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

export default IndividualModal