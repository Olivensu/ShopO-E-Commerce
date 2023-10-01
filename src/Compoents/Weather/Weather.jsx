import "./Weather.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import sun from "../../img/sun.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Weather = () => {
  return (
    <div className="weather">
      <div className="top">
        <h1 className="title">Weather</h1>
        <MoreVertIcon fontSize="medium" />
      </div>

      <div className="bottom">
        <div className="left">
          <h1 className="time">08:21 AM </h1>
          <img className="icon" src={sun} alt="sun and cloud" />
          <div className="bottom-text">Cloudy Sunny, 24°C</div>
        </div>
        <div className="right">
          <div className="currentdate">
           <div className="title">

            Wed, 21 September 2022
           </div>
            <div className="logo">  
              <KeyboardArrowLeftIcon className="icon" />
              <KeyboardArrowRightIcon  className="icon"/>
            </div>
          </div>

          <ul>
            <li>
              <span className="cloud">
                <p>10:00 AM</p>
                <p> Light Rain, 27°C</p>
              </span>
            </li>
            <li>
              <span className="cloud">
                <p>01:00 PM</p>
                <p> Cloudy Sunny, 27°C</p>
              </span>
            </li>
            <li>
              <span className="cloud">
                <p>04:00 PM</p>
                <p> Cloudy, 27°C</p>
              </span>
            </li>
            <li>
              <span className="cloud">
                <p>05:00 PM</p>
                <p>Cloudy, 25°C</p>
              </span>
            </li>
            <li>
              <span className="cloud">
                <p>08:00 PM</p>
                <p>Cloudy, 25°C</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
