import "./Sales.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"; 
import accident from "../../img/accident.png";

const Sales = () => {
  return (
    <div className="sales">
      <div className="top">
        <h1 className="title">Sale</h1>
        <MoreVertIcon fontSize="medium" />
      </div>
      <div className="middle">
        <div className="title">
          <h1 className="subtitle">Monthly Sales</h1>
          <h1 className="subNumber"> 918</h1>
        </div>

        <div className="date">
        September 2022
          <CalendarTodayOutlinedIcon fontSize="1" className="icon" />
        </div>
      </div>

      <div className="bottom">
        <div className="btmcontainer">
          <div className="btmInfo">
            <div className="btmTitle">
              <img src={accident} alt="crash car" className="icons" />
              <div className="header">
                <h1>Chuwi Laptop</h1>
                <p>21/09/2022 - Israfil Arif</p>
              </div>
            </div>
            <p className="details">Details</p>
          </div>
        </div>

        <div className="btmBorder"></div>

        <div className="btmcontainer">
          <div className="btmInfo">
            <div className="btmTitle">
              <img src={accident} alt="crash car" className="icons" />
              <div className="header">
                <h1>OnePlus TV</h1>
                <p>20/09/2022 - Debashish D. Dev</p>
              </div>
            </div>
            <p className="details">Details</p>
          </div>
        </div>

        <div className="btmBorder"></div>

        <div className="btmcontainer">
          <div className="btmInfo">
            <div className="btmTitle">
              <img src={accident} alt="crash car" className="icons" />
              <div className="header">
                <h1>UMI Phone</h1>
                <p>16/09/2022 - JSajib Hossain</p>
              </div>
            </div>
            <p className="details">Details</p>
          </div>
        </div>

        <div className="btmBorder"></div>
        <p className="more">Show more</p>
      </div>
    </div>
  );
};

export default Sales;
