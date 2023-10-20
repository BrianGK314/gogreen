
[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) 


# Go Green KE
  

- [Project summary](#project-summary)

- [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)

- [How our technology solution can help](#how-our-technology-solution-can-help)

- [Our idea](#our-idea)

- [Technology implementation](#technology-implementation)

- [IBM AI service(s) used](#ibm-ai-services-used)

- [Other IBM technology used](#other-ibm-technology-used)

- [Solution architecture](#solution-architecture)

- [Presentation materials](#presentation-materials)

- [Solution demo video](#solution-demo-video)

- [Project development roadmap](#project-development-roadmap)

- [Additional details](#additional-details)

- [How to run the project](#how-to-run-the-project)

- [Live demo](#live-demo)

- [About this template](#about-this-template)

- [Contributing](#contributing)

- [Versioning](#versioning)

- [Authors](#authors)

- [License](#license)

- [Acknowledgments](#acknowledgments)

  

_INSTRUCTIONS: Complete all required deliverable sections below._

  

## Project summary

  

### The issue we are hoping to solve

Industrial processes heavily contribute towards climate change, accountable for nearly 25% all global emissions. However, tracking of GHG emissions in these firms is still **slow**, **complicated,** and **inaccurate**. 
 
### How our technology solution can help

  

REPLACE THIS SENTENCE with a short description of your team's solution, in about 10 words.

Go-Green automates emissions tracking for factories and connects them with carbon offsetting initiatives.

### Our idea

<![endif]-->

Brief overview of solutions:

Industrial-sector organisations are in need of a simple and cost-effective solution to help them monitor and reduce their emissions. This is aided by increasing calls by individuals, institutions, and governments across the globe to reduce the amount of GHGs we emit into the atmosphere.

Answering the call to reduce emissions, industrial firms in Kenya and abroad have hired consulting firms who manually go through piles of receipts to tally emissions. This process is slow and can lead to inaccurate results. Moreover, the calculation methods used are often not standardized across organisations, leading to massive discrepancies in emissions reported as cited by the [UN](https://www.washingtonpost.com/climate-environment/interactive/2021/greenhouse-gas-emissions-pledges-data/).

Trust is another hurdle these firms must face, particularly when to comes to offsetting. It is noted that over [41%](https://www.businesswire.com/news/home/20230117005064/en/41-of-Businesses-Avoid-Carbon-Offsets-Due-to-Trust-Issues-Despite-Critical-Net-Zero-Role-%E2%80%93-AiDash) of Chief Sustainability Officers (CSOs) don’t use carbon offsetting due to a lack of trust in these programs’ ability to reduce their emissions fully and properly.

Important to note, reduction in emissions is also aided by a culture of sustainability within firms. Organisations often lack proper incentive structures for employees to lead more sustainable lifestyles. Noting these factors, GoGreen believes that current systems of reporting and reducing emissions need to be re-thought.

Our solution helps factories manage their CO2 emissions by equipping them with a platform that automates emissions recording. We then connect them to **vetted** carbon-offsetting initiatives which they can track the progress of on our Progress Tracker page. Furthermore, our platform provides these firms with the ability to extract emissions data from utility and equipment bills by uploading them from the main [dashboard](h). This ability is facilitated by the use of IBM’s Watson Discovery to extract relevant text from receipts that is passed onto a [foundational language model (LLAMA 2)](link) for concise metric extraction. Through [Retrieval Augment Generation](https://research.ibm.com/blog/retrieval-augmented-generation-RAG), we can pass key information from the receipt to ClimatiQ, which returns the emissions factor of a material. From this. we can derive the equivalent CO2 emissions.

To obtain even more accurate recordings of Scope 1/direct emissions, we aim to equip factories with our custom low-cost GHG sensors. Their data is stored in a Cloudant Database which is periodically queried by an LSTM Neural Network deployed on Watson Machine Learning to forecast future demand - **solely on emission trends**. The results of which are shown in the RT-Readings page and Dashboard.

The fully built sensor will utilise professional grade **STM32** kits (not ESP32) for better ADC conversion at the edge to increase accuracy and integrate this with laser-based in-situ GHG monitoring devices.

To add onto the carbon-offsetting ecosystem of products, our platform seeks to use the hectares of untilitised land across Kenya - and the globe – by having a marketplace for individuals to lease unitilised land to carbon offsetting projects in need a place to carry out their activities.

Our system also incorporates an employee feed to reduce emissions, in hopes of incentivizing shifts to more sustainable cultures within organizations; seeking to impact not only on the organization level, but also on the personal level.

In sum, our solution aims to make the process of carbon accounting seamless, accurate, and inexpensive using IBM Cloud and IBM Watson services.
  

More detail is available in our [description document](./docs/DESCRIPTION.md).

  

## Technology implementation

  

### IBM AI service(s) used

  

_INSTRUCTIONS: Included here is a list of commonly used IBM AI services. Remove any services you did not use, or add others from the linked catalog not already listed here. Leave only those included in your solution code. Provide details on where and how you used each IBM AI service to help judges review your implementation. Remove these instructions._

  

- [IBM Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding) - WHERE AND HOW THIS IS USED IN OUR SOLUTION

- [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) - WHERE AND HOW THIS IS USED IN OUR SOLUTION

- [Watson Discovery](https://cloud.ibm.com/catalog/services/watson-discovery) - WHERE AND HOW THIS IS USED IN OUR SOLUTION

- [Watson Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) - WHERE AND HOW THIS IS USED IN OUR SOLUTION

- [Watson Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) - WHERE AND HOW THIS IS USED IN OUR SOLUTION

- List any additional [IBM AI services](https://cloud.ibm.com/catalog?category=ai#services) used or remove this line

  

### Other IBM technology used

  

INSTRUCTIONS: List any other IBM technology used in your solution and describe how each component was used. If you can provide links to/details on exactly where these were used in your code, that would help the judges review your submission.

  

### Solution architecture

  

Diagram and step-by-step description of the flow of our solution:

  

![Video transcription/translaftion app](https://developer.ibm.com/developer/tutorials/cfc-starter-kit-speech-to-text-app-example/images/cfc-covid19-remote-education-diagram-2.png)

  

1. The user navigates to the site and uploads a video file.

2. Watson Speech to Text processes the audio and extracts the text.

3. Watson Translation (optionally) can translate the text to the desired language.

4. The app stores the translated text as a document within Object Storage.

  

## Presentation materials

  

_INSTRUCTIONS: The following deliverables should be officially posted to your My Team > Submissions section of the [Call for Code Global Challenge resources site](https://cfc-prod.skillsnetwork.site/), but you can also include them here for completeness. Replace the examples seen here with your own deliverable links._

  

### Solution demo video

  

[![Watch the video](https://raw.githubusercontent.com/Liquid-Prep/Liquid-Prep/main/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

  

### Project development roadmap

  

The project currently does the following things.

  

- Feature 1

- Feature 2

- Feature 3

  

In the future we plan to...

  

See below for our proposed schedule on next steps after Call for Code 2023 submission.

  

![Roadmap](./images/roadmap.jpg)

  

## Additional details

  

_INSTRUCTIONS: The following deliverables are suggested, but **optional**. Additional details like this can help the judges better review your solution. Remove any sections you are not using._

  

### How to run the project

  

INSTRUCTIONS: In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

  

### Live demo

  

You can find a running system to test at...

  

See our [description document](./docs/DESCRIPTION.md) for log in credentials.

  