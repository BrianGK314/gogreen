import React, {useState}from 'react'
import {IoIosArrowBack} from "react-icons/io"
import "../Market.css"
import "../Upload.css"

function UploadPost({emptyModalData,toggleFeed, uploadFeed,addFeed,modalData,toggleIndModal,showContact, toggleCont}) {


    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [actimage, setActImage] = useState('');


    const handleTextChange = (e) => {
        setText(e.target.value);
      };

    const handleActChange = (e) => {
        setActImage(e.target.value);
      };

    const addfeed =(e)=>{
        if((text !=="")){
            e.preventDefault()
            postData()
            toggleFeed()

        }else{
            toggleFeed()
        }
    }

    const postData = async () => {
        const data =  {
            name:name,
            text:text,
            actsrc:actimage,
            profpic:actimage,
            likes:0
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
    <div className='market-modal-main upload-fee-main' style={{visibility:(uploadFeed==true ? "visible": "hidden")}}>
        <div className='modal-card-reciepts modal-upload-post'>

                <div className='reciept-ai-info add-info-for-feed'>
                    <div className='reciept-id'>
                        <p className='recipet-title-text'>Post Details</p>
                    </div>
                    <div className='reciept-info-layout get-info-feed'>
                        {/* <label>Hellow</label> */}
                        {/* <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Name:</p>
                            <input value={name} onChange={handleNameChange} className='input-forfeed'></input>
                        </div> */}

                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Text:</p>
                            <input value={text} onChange={handleTextChange} className='input-forfeed'></input>
                        </div>

                        <div className='text-input-for-feed'>
                            <p className='text-for-uplaod' >Proof of acton (Link):</p>
                            <input value={actimage} onChange={handleActChange} className='input-forfeed'></input>
                        </div>
                        {/* <p className='text-for-uplaod'>Text:</p>
                        <input value={name} onChange={handleTextChange} className='input-forfeed'></input>
                        <p className='text-for-uplaod'>Action Image Proof:</p>
                        <input value={name} onChange={handleActChange} className='input-forfeed'></input> */}
                    </div>
                    <div className='market-modal-contact upload-modal-action'>
                        <button onClick={toggleFeed} className='show-contact submit-feed' >Go Back</button>

                        <button onClick={(e) => addfeed(e)} className='show-contact submit-feed' >Submit</button>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default UploadPost