import React from "react";
import "./Fetured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { name: 0, pv: 1.5, amt: 1 },
  { name: 7, pv: 2.5, amt: 2 },
  { name: 14, pv: 2, amt: 3 },
  { name: 21, pv: 2.5, amt: 4 },
  { name: 28 ,  },
];

const Fetured = () => {
  return (
    <div className="graph">
      <div className="graphTitle">
        <span>Total Sale</span>
        <div className="dates">
          <div className="date">
            August 2022
            <CalendarTodayOutlinedIcon fontSize="1" className="icon" />
          </div>
          <MoreVertIcon    fontSize="medium"  className="icon" />
        </div>
      </div>

      <div className="bottom">
        <div className="graphData">
          <ul>
            <p>Tv</p>
            <li>600.000</li>
            <p>Laptop</p>
            <li>1.200.000</li>
            <p>Others</p>
            <li>210.287</li>
          </ul>
        </div>
        <div className="graphChart">
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
