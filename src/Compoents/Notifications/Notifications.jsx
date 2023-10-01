import "./Notifications.scss";
import ClearIcon from "@mui/icons-material/Clear";

import rain from "../../img/Rainy.png";
const Notifications = () => {
  return (
    <div className="selsNotifications">
      <div className="message">
        <img src={rain} alt="" />
        <div className="msgTitle">
          <div className="title">
            Notifications
            <ClearIcon fontSize="medium" />
          </div>
          <div className="msgdesc">
            You dont have enough stock for the next campaign.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
