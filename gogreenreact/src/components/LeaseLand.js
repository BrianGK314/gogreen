import React, {useState}from 'react'
import {IoIosArrowBack} from "react-icons/io"
import "../Market.css"
import "../Upload.css"

function LeaseLand({leaseLandModal,toggleLease, uploadFeed,addLeaseNew,modalData,toggleIndModal,showContact, toggleCont}) {


    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [actimage, setActImage] = useState('');
    const [email, setEmail] = useState('');
    const [dispute, setDispute] = useState('');
    const [area, setArea] = useState('');
    const [allowed, setAllowed] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    const handleTextChange = (e) => {
        setText(e.target.value);
      };

      const handleActImageChange = (e) => {
        setActImage(e.target.value);
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handleDisputeChange = (e) => {
        setDispute(e.target.value);
      };
      const handleAreaChange = (e) => {
        setArea(e.target.value);
      };
      const handleAllowedChange = (e) => {
        setAllowed(e.target.value);
      };

      const postData = async () => {
        const data =  {
        owner: name,
        location: location,
        disputes: dispute,
        status: "Pending",
        area: area,
        allowed: allowed,
        email: email,
        src: actimage
        }

        try {
          const response = await fetch(postLease, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const responseData = await response.json();
          console.log(responseData);
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };



  return (
    <div className='market-modal-main upload-fee-main' style={{visibility:(leaseLandModal==true ? "visible": "hidden")}}>
        <div className='modal-card-reciepts modal-upload-post modal-upload-lease'>

                <div className='reciept-ai-info add-info-for-feed add-info-for-ease'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>Land Details</p>
                    </div>
                    <div className='reciept-info-layout get-info-feed get-info-lease'>
                        {/* <label>Hellow</label> */}
                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Name:</p>
                            <input value={name} onChange={handleNameChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>


                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Location:</p>
                            <input value={text} onChange={handleTextChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>

                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Land photo (Link):</p>
                            <input value={actimage} onChange={handleActImageChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>
                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Email:</p>
                            <input value={email} onChange={handleEmailChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>
                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Disputes</p>
                            <input value={dispute} onChange={handleDisputeChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>
                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Area (Hectares):</p>
                            <input value={area} onChange={handleAreaChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>
                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Allowed activities:</p>
                            <input value={allowed} onChange={handleAllowedChange} className='input-forfeed input-forfeed-lease'></input>
                        </div>
                        {/* <p className='text-for-uplaod'>Text:</p>
                        <input value={name} onChange={handleTextChange} className='input-forfeed input-forfeed-lease'></input>
                        <p className='text-for-uplaod'>Action Image Proof:</p>
                        <input value={name} onChange={handleActChange} className='input-forfeed input-forfeed-lease'></input> */}
                    </div>
                    <div className='market-modal-contact upload-modal-action upload-lease-action'>
                        <button onClick={postData} className='show-contact submit-feed' >Go Back</button>

                        <button onClick={(e) => addLease(e)} className='show-contact submit-feed' >Submit</button>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default LeaseLand