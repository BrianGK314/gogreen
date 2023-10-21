///The following code uses Watson Discovery API to make natural language queries, then feed queries to LLM, then pass filtered generated text to be saved on Cloudant

const fs = require('fs');
const DiscoveryV2 = require('ibm-watson/discovery/v2');
const { CloudPakForDataAuthenticator } = require('ibm-watson/auth');

let quryResoonse;

// UNCOMMENT !!!!!!!!!

// const discovery = new DiscoveryV2({
//   authenticator: new CloudPakForDataAuthenticator({
//     url: '-----------------',
//     username: '---------------',
//     password: '---------------',
//   }),
//   version: '2020-08-30',
//   serviceUrl: '---------------',
// });




// const queryParams = {
//   projectId: '---------------',
//   naturalLanguageQuery: 'What item was baught and how much of the product was ordered?',

// };

discovery.query(queryParams)
  .then(response => {
    let quryResonse = {
        input: response.passages.passage_text,
        parameters: {
            "temperature": 0.0,
            "max_tokens": 250
        }
    };
    console.log(JSON.stringify(response.result, null, 2));

    fetch('http://a893-34-90-192-167.ngrok-free.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quryResonse),
      })
      .then(response => response.json())
      .then(data => {
        let params = {
            emission_factor: {
                activity_id: data.text.split(",")[0].replace("[",""),
                data_version: "^0"
            },
            parameters: {
                weight: parseInt(data.text.split(",")[1].replace("]","")),
                weight_unit: "t"
            }
        };
        fetch('https://beta4.api.climatiq.io/estimate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          }).then(response => response.json())
          .then(data => {
            fetch('https://XXXXXXXXX.eu-gb.apigw.appdomain.cloud/api/YYYYYY', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    quantity: data.quantity,
                    category: data.category,
                    CO2: data.co2e,
                 }),
              })
              .then(response => {
              })
            .catch(error => {
            console.error('Error in the third fetch:', error);
            });
        })
            .catch(error => {
            console.error('Error in the second fetch:', error);
        });
            })
          .catch(error => {
            console.error('Error in the first fetch:', error);
     });
  })
  .catch(err => {
    console.log('error:', err);
  });
