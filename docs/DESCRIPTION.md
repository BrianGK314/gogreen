
# Go Green

  

Go Green aims to provide factories with a carbon accounting platform to monitors and manage their GHG emissions. We then connectt them to offseting initiatives to help reduce their reduce net emissioins. 

This video submission is by Brian Gitau and Trevor Atela for IBM's Call for Code 2023 Round 4


  

## [Dashboard](../gogreenreact/src/Dash.js)

  

The dashboard you will be able to see various charts breaking down the emissions from the firm over the past year. You also see the employee feed, and the receipts upload section. This information is retrieved from and posted to the Cloudant database through cloud function. The only exception is the receipt upload section which uploads to IBM Cloud Object Storage (COS). This is because COS funnels the receipts to our Watson Discovery project for data acquisition. The result is saved in Cloudant and retrieved with the rest on mount

  

## [RT-Readings](../gogreenreact/src/RealTimeData.js)
  

This page shows real time readings from the sensors whose data is saved long-term on the Cloudant DB.  

## [Market](../gogreenreact/src/Market.js)

  This page allows firms to find carbon offsetting initiatives, and lets carbon offsetting initiatives find land to carry out their activities. Land lease can be searches based on allowed activities on the premises. Some allowed activities include soil carbon sequestration, reforestation, carbon capture, etc.

## [Progress Tracker](../gogreenreact/src/ProgressTracker.js)

This page provides a table for factories to track the various carbon offsetting initiatives which they employed. The table includes the percentage progress as well as useful information like contacts, emails, and years since contracting the offsetting program. The table can be filtered by the years metric or the progress percentage metric
  

## [ESP32 System](../post_mq135/post_mq135.ino)

  Our project currently utilises an ESP32 based microcontroller. The current 3D model and sensor code reflect this, but in the future we hope to use an STM32 MCUs due to their versatility and speed. 

Nonetheless, the ESP32 sends a post request to a cloudant function with its emissions data and this is what is picked up on the RT page.

  

## [Fusion 360 Model](../3D%20Model/C4C%20v3.stl)

This  shows an idea of how our first beta-prototype systems would look like taking into account the need for high-temperature resistant equipment. 

  

## [LLAMA 2 W/ Watson Discovery for Retrieval Augmented Generation](../ML/Llama2%20API.ipynb)

 To extract CO2 emissions from receipts, we use IBM Watson Discovery to provide relevnt text for documents and feed that into the LLama 2 foundational model in a form of Retrieval Augmented Generation to return concise figures and categories which can later be passed onto Climatiq.
  

## [LSTM Neural Network on Watson Machine Learning](../ML/Predict_co2_emissions.ipynb)

  
The model deployed on Watson Machine Learning  is periodically called by cloud functions twice a day to take emissions data stored in Cloudant by the edge devices and use that to predict future demand - as demand is highly correlated with emissions. The resulting figure is then compare to current emissions, a percentage is obtained and a correlation factor is applied to obtain the true change in demand. 
  
  
  

## Acknowledgments

1. https://www.thesmartbridge.com/documents/projects/IBMCloudObjectStorageandCloudantDB.pdf

  

2.https://sarah-packowski.medium.com/searching-in-mural-8aad3c224e6c

  

3.https://github.com/spackows/MURAL-API-Samples/blob/main/notebooks/Discovery_00-Create-sample-murals-to-search.ipynb

  

4.https://ibm-watson-iot.github.io/iot-python/application/mqtt/events/#subscribing-to-device-events

  

5.https://github.com/linus-berg/IBM-Device/blob/master/device/device.js

  

6. https://www.youtube.com/watch?v=AVD99LVwnKE&ab_channel=IBMDeveloper

  

7. https://github.com/IBM/iot-device-trend-analysis

  

8. https://github.com/IBM/iot-mapping

  

9. Cloudant vidoes

  

10. https://cloud.ibm.com/docs/Cloudant?topic=Cloudant-learning-center#cloudant-course-intro-video

  

11. Discovery Tutorial

https://developer.ibm.com/tutorials/create-an-intelligent-search-app-using-watson-discovery-ui-components/

  

12. https://github.com/watson-developer-cloud/discovery-components/blob/master/examples/discovery-search-app/src/App.js

  

13. https://www.ibm.com/cloud/architecture/tutorials/cognitive_discovery?task=5

  

14. Todo app w cloudant

https://dipankarmaikap.com/how-to-design-a-serverless-rest-api-ibm-cloud-functions-and-cloudant/

  

15. Read cloudant db

https://stackoverflow.com/questions/61780757/how-do-i-read-and-save-all-cloudant-documents-in-a-list

  

16. Discovery v2 api docs

  

https://cloud.ibm.com/apidocs/discovery-data?code=python

  

17. Call external api from ibm function

https://gbvbnithub.com/kchallapalli/WatsonAssistantCallout/blob/master/function_callout_to_discovery_service.js

- Due to lack of IBM Resources, not all functionality on site could be implemented, and reliance on these knowledge sources was crucial in making the Go-Green Alpha-Prototype we present to you in this competition.  
  
  

## Final Remark

  

As 3rd year Electrical and Electronics Engineering students, we learned a lot about how to operate cloud services. I hope you had as much fun going through this repository as we had making this project come to life!