import React, {useEffect, useState} from 'react'
import './Dash.css'
import {FaHeart, FaUpload} from "react-icons/fa"
import {IoIosPaper} from "react-icons/io"
import {IoIosArrowBack} from "react-icons/io"
import {FaFileUpload} from "react-icons/fa"
import BarChart from './Barchart'
import CheckModal from './components/CheckModal'
import { cloudFunctionsUrls } from './cfuncs/functionList'
import LineChart from './lineChart'
import PieChart from './Piechart'
import UploadPost from './components/UploadPost'
import ReceiptModal from './components/receiptModal'
import { S3 } from 'ibm-cos-sdk';



function Dash() {

    
    const [file,setFile] = useState();
    const [modal,setModal] = useState(false);
    const [clickedModalId,setClickedModalId] = useState(undefined);
    const [modalData, setModalData] = useState({});
    const [checkModal,setCheckModal] =  useState(false);
    const [uploadFeed,setUploadFeed] =  useState(false);


    function getFunc(func){
        let val = cloudFunctionsUrls.find(item => item.name === func);
        return val
    }


    const [receiptData,setReceiptData] = useState([])
    const[feedData,setFeedData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(getFunc("getFeed")); // Replace with your actual API endpoint
            const result = await response.json();
            setFeedData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(getFunc("getReceipts")); // Replace with your actual API endpoint
            const result = await response.json();
            setReceiptData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    const toggleCheck =()=>{
        setCheckModal(!checkModal)
    }

    const toggleFeed =()=>{
        setUploadFeed(!uploadFeed)
    }

    const changeModalData =(id) =>{
        if (typeof(id) !== "object"){
            setClickedModalId(id)
            setModalData(receiptData.find(x => x.id === id))
        }
    }

    const addFeed = (feed) =>{
        setFeedData([...feedData,feed])
    }



    const toggle =(id) => {
        if (typeof(id) !== "object"){
            setClickedModalId(id)
            setModalData(receiptData.find(x => x.id === id))
        }else{
            setClickedModalId(undefined)
            setModalData({})
        }

        setModal(!modal);
    }

    const showModal = (id) =>{
        setModal(true);

    }
    let url;


    const uplaod = () =>{
        if (file){
            const formData = new FormData()
            formData.append('file',file);
            uploadPdf("pdfuploads",file.name,file)
            toggleCheck()
        }
    }



    var config = {
        endpoint: '',
        apiKeyId: '',
        serviceInstanceId: '',
        signatureVersion: 'iam',
    };
    
    var cos = new S3(config);

    function uploadPdf(bucketName, itemName, fileText) {
        console.log(`Creating new item: ${itemName}`);
        return cos.putObject({
            Bucket: bucketName, 
            Key: itemName, 
            Body: fileText
        }).promise()
        .then(() => {
            console.log(`Item: ${itemName} created!`);
        })
        .catch((e) => {
            console.error(`ERROR: ${e.code} - ${e.message}\n`);
        });
    }


  return (
    <div className='dash-main'>
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
                        <p className="nav-top">R-T Readings</p>
                    </a>
                        <p className="nav-top">Reciepts</p>
                </div>
                <div className='profpic'>
                    <img className="profpic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxUjdvGd-Qh7VINaj_7jvx7FZCc30A_Sak7Gh4PGkSPrQaFffXPsltRZElo1lukxlbz0&usqp=CAU"/>
                </div>
            </div>
        </div>


        <div className='dash-body'>

            <div className='dash-graphs-info'>
                {/* INFO TO THE LEFT */}

                <div className='left-graphs'>
                    {/* TOP  overtime emissions graph*/}
                    <div className='emissions-overtime'>
                        <p className='graph-desc'>Emissions per Month</p>
                        {/*below should be dynamic  */}
                        <p className='emissions-tot'>5000 Tones CO2 Eq</p>
                        <div className='linechart-handler'>
                            <LineChart/>

                        </div>
                    </div>

                    {/* BOTTOM  two graphs*/}
                    <div className='fp-initiative'>
                        <div className='foo-bar'>
                            {/* Shloud be stacked bar */}
                            <span className='graph-desc'>Carbon Foorptint</span>
                            <div className='barchart-handler'>

                            <BarChart/>
                            </div>

                        </div>
                        <div className='off-pie'>
                            <span className='graph-desc'>Offset Initiatives</span>
                            <div className='piechart-handler'>
                            <PieChart/>

                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SOCIAL ACTIVITY + info*/}
            
                <div className='right-socials-info'>
                    <div className='employee-offset'>
                        <p className='e-feed-title'>Company Feed</p>


                        {feedData.map(feed =>(
                            <div className='employee-card'>
                                <span className='employee-name'>{feed.name}</span>
                                <img className='employee-action-img' src={feed.actsrc}></img>
                                <div className='employee-comments-pa'>
                                    <p className='emplyee-text'>{feed.text}</p>
                                    <div className='image-reactions'>
                                        <img src={feed.profpic} className='employee-pa-img'></img>
                                        <div className='emplyee-action-reaction'>
                                            <FaHeart className='heart-reaction'/>
                                            <p className='reaction-number'></p>{feed.likes}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        ))}

                        <button className='upload-btn-ll top-padding' onClick={toggleFeed} >Post Something...</button>
                            
                    </div>

                    <div className='offset-cost'>
                        <p className='offset-cost-desc'>Offset Costs: <br/>October</p>
                        <p className='offset-cost-price'>$2429.77</p>
                    </div>
                    <div className='demand-forecast-lstm'>
                        <p className='demand-fc-desc'>Demand Forecast<br/> Next Week:</p>
                        <p className='demand-fc-perc'>13.2% + </p>                    </div>
                </div>

            </div>

            <div className='recipt-tracking'>
                <div className='reciepts-pile'>
                    {receiptData.map(receipt =>(

                        <div className='lone-reciept' onClick={() =>toggle(receipt.id)}>
                            <IoIosPaper className='recipt-example'/>
                            <p>{receipt.title}</p>
                        </div>

                    ))}

                </div>
                <div className='upload-reciepts'>
                    {/* <FaUpload className='uplaod-image-icon'/> */}
                    {/* <span className='uplaod-text'> Uplaod Reciepts</span> */}
                    <input type="file" id="uploadBtn" onChange={(e) => setFile(e.target.files[0])}/>
                    <label for="uploadBtn"><FaUpload className='uplaod-image-icon'/>Select Files</label>
                    <button className='upload-btn-ll' onClick={uplaod} >Upload</button>
                </div>
            </div>


        </div>


        <ReceiptModal changeModalData={changeModalData} allModalData={receiptData} toggle={toggle} modal={modal} modalData={modalData}/>
        <CheckModal changeModalData={changeModalData} allModalData={receiptData} toggle={toggleCheck} checkModal={checkModal} modalData={modalData} />
        <UploadPost toggleFeed={toggleFeed} addFeed={addFeed} uploadFeed={uploadFeed}/>
    </div>
  )
}

export default Dash