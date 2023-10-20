import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import {IoIosPaper} from "react-icons/io"
import "../Dash.css"

function ReceiptModal({modal,allModalData, changeModalData,toggle,modalData}) {
    console.log(modalData);
  return (
    
    <div className='dash-modal-reciept' style={{visibility:(modal ===true ? "visible": "hidden")}}>
            <div className='modal-card-reciepts'>
                <div className='back-to-dash'>
                    <IoIosArrowBack className='back-icon-dash' onClick={toggle}/>
                </div>
                <div className='modal-reciept-pdf'>
                
                <iframe className='modal-reciept-pdf-ifram' frameBorder="0" src={modalData.pdf}></iframe>

                </div>

                <div className='reciept-ai-info'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>{modalData.title}</p>
                    </div>
                    <div className='reciept-info-layout'>
                        <p className='reciept-info-text'>{`Supplier: ${modalData.supplier}`}</p>
                        <p className='reciept-info-text'>{`Category: ${modalData.category}`}:</p>
                        <p className='reciept-info-text'>{`Material: ${modalData.material}`}</p>
                        <p className='reciept-info-text'>{`Mass(t): ${modalData.quantity}`}</p>
                        <p className='reciept-info-text'>{`Emissions Factor(KgCO2/t): ${modalData.CO2}`}</p>
                    </div>
                    <div className='reciepts-pullup-scroll'>
                        
                        {/* SCROLL  THROUGH RECEIPTS */}
                        <div className='reciepts-pile modal-scorll-smll'>
                            
                        {allModalData.map(receipt =>(

                            <div className='lone-reciept lone-reciept-small' onClick={() =>changeModalData(receipt.id)}>
                                <IoIosPaper className='recipt-example receipt-example-sm'/>
                                <p className='receipt-exampl-text'>{receipt.title}</p>
                            </div>

                        ))}


                        </div>



                    </div>

                </div>
            </div>

        </div>

  )
}

export default ReceiptModal