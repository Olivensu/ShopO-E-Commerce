import "./Products.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import tv from "../../img/tv.png";
import mb from "../../img/mb.png";
import jp from "../../img/jp.png";
const Products = () => {
  const datas = [
    {
      id: 1,
      product: "OnePlus TV 44 Inch",
      img: tv,
      order: "5k",
      status: "10% Increase",
    },
    {
      id: 2,
      product: "UMI Smartphone",
      img: mb,
      order: "4.5k",
      status: "17% Increase",
    },
    {
      id: 3,
      product: "Chuwi Laptop",
      img: jp,
      order: "2k",
      status: "20% Increase",
    },
    {
      id: 4,
      product: "Oneplut TV Y1G",
      img: jp,
      order: "1.5k",
      status: "1% Increase",
    },
    {
      id: "sub",
      product: "Earphone",
      img: jp,
      order: "1.4k",
      status: "-1% Increase",
    },
    {
      id: "sub",
      product: "Charger",
      img: jp,
      order: "-1.3k",
      status: "-5% Increase",
    },
    {
      id: "sub",
      product: "Cable",
      img: jp,
      order: "-1.2k",
      status: "-50% Increase",
    },
    {
      id: "sub",
      product: "Electric Car",
      img: jp,
      order: "900",
      status: "-5% Increase",
    },
    {
      id: 9,
      product: "ERP Software",
      img: jp,
      order: "870",
      status: "5% Increase",
    },
    {
      id: 10,
      product: "Attendance System",
      img: jp,
      order: "720",
      status: "6% Increase",
    },
  ];
  return (
    <div className="products">
      <div className="top">
        <h1 className="title">Most Popular Product</h1>
        <MoreVertIcon fontSize="medium" />
      </div>

      {datas.map((data) => (
        <div className="bottom">
          <div className="btmcontainer">
            <div className="btmInfo">
              <div className="btmTitle">
                <img src={data.img} alt="crash car" className="icons" />

                <div className="header">
                  <h1> {data.product}</h1>
                  {/* <p >{data.status}</p> */}
                  <p   className={`id ${data.id}`} >{data.status}</p>
                  
                </div>
              </div>
              <p className="details">{data.order}</p>
            </div>
          </div>

          <div className="btmBorder"></div>
        </div>
      ))}

      <p className="more">Show more</p>
    </div>
  );
};

export default Products;
