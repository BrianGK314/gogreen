import { ResponsiveLine } from "@nivo/line";
import { tokens } from "./theme";
import { useState, useEffect, useRef } from "react";

///add function below
import { cloudFunctionsUrls } from './cfuncs/functionList'


const UpdatingLineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const colors = tokens("light");

  const now = new Date();

  function getCurrentTime() {
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
}

function getFunc(func){
  let val = cloudFunctionsUrls.find(item => item.name === func);
  return val
}


const [useData, setUseData] = useState([
    {
      x: "0",
      y: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getFunc("getSensorData")); // Replace with your actual API endpoint
        const result = await response.json();
        setUseData(result.filter((pont)=>(point.time > now)));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const dataRef = useRef(useData);

    
   

  return (

    <ResponsiveLine
    data={[{
        id: "Kenya",
        color: tokens("light").greenAccent[500],
        data:useData, 
      }]}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: colors.primary[500],
        },
      },
    }}
    colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="catmullRom"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : "Time", // added
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickValues: 5, // added
      tickSize: 3,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : "PPM", // added
      legendOffset: -40,
      legendPosition: "middle",
    }}
    enableGridX={true}
    enableGridY={true}
    pointSize={8}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}

    // animate={false}
    //     motionConfig={{
    //         mass: 1,
    //         tension: 170,
    //         friction: 26,
    //         clamp: false,
    //         precision: 0.01,
    //         velocity: 0
    //     }}

  />

  );
};

export default UpdatingLineChart;

