import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts";

import styles from "../modules/Chart.module.css";
  
function Chart({chart, setChart}) {
  const [type, setType] = useState("prices");
  
  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>
          <div className={styles.graph}>
              <ChartComponent  data={convertData(chart, type)} type={type}/>
          </div>

        </div>
    </div>
  )
}

export default Chart;
const ChartComponent = ({data, type}) => {
  return(    <ResponsiveContainer width="100%" height={370} >
                <LineChart width={400} height={400} data={data} >
                 <CartesianGrid stroke="#404042"  />
              <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2}/>
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey="date" hide />
              <Legend />
              <Tooltip />
               </LineChart>
              </ResponsiveContainer>
)
  
}