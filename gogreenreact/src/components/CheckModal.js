import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import {BiCheckCircle} from "react-icons/bi"
import "./Checkmodal.css"

function CheckModal({emptyModalData, modalData,checkModal,toggle,showContact, toggleCont}) {

    const animate = {animation: "growAndShrink 0.7s ease-in-out"}

  return (
    <div className='market-modal-main' style={{visibility:(checkModal==true ? "visible": "hidden")}}>
        <div className='modal-card-reciepts modal-card-checkings'>

                <div className='reciept-ai-info'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>Upload Successful</p>
                    </div>
                    <div className='reciept-info-for-check'>
                        <BiCheckCircle className='large-check' style ={checkModal && animate}/>
                    </div>
                    <div className='market-modal-contact'>

                        <p className='show-contact' onClick={toggle}>Go Back</p>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default CheckModal