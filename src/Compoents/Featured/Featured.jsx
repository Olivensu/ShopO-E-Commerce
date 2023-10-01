import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  const percentage = 70;
  return (
    <div className="featured">
      <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
          <div className="featuredChart">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={8}
            />
          </div>
          <p className="title">Total sales made today</p>
          <p className="ammount">$420</p>
          <p className="desc">
            Previous transactions processings. Last payments may not be included.
          </p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon />
              <div className="resultAmmount">$10.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
                <KeyboardArrowUpIcon />
              <div className="resultAmmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
                <KeyboardArrowUpIcon />
              <div className="resultAmmount">$79.8k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
