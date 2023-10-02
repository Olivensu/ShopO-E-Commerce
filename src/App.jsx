import './app.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from './Pages/Forms/Register';
import Login from './Pages/Forms/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateCategories from './Pages/Categories/CreateCategories';
import Categories from './Pages/Categories/Categories';
import CreateShop from './Pages/Shop/CreateShop';
import Profile from './Pages/Profile/Profile';
import ShopDetails from './Pages/Shop/ShopDetails';
import CreateProduct from './Pages/Products/CreateProduct';
import TotalShop from './Pages/Shop/TotalShop';
import ProductDetails from './Pages/Products/ProductDetails';
import { useEffect } from 'react';
import CartProduct from './Pages/Products/CartProduct';
import CheckOut from './Pages/Products/CheckOut';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import TotalProducts from './Pages/Products/TotalProducts';
import CategoriesProduct from './Pages/Categories/CategoriesProduct';
import AddressBook from './Pages/Profile/AddressBook';
import CreateAddress from './Pages/Profile/CreateAddress';
import ProductCheckOut from './Pages/Products/ProductCheckOut';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ReturnRefund from './Pages/About/ReturnRefund';
import TermsConditions from './Pages/About/TermsConditions';
import Dashboard from './Pages/DashBoard/Dashboard';
import UserTable from './Pages/DashBoard/UserTable';
import SideBar from './Pages/DashBoard/SideBar';
import ShopTable from './Pages/DashBoard/ShopTable';
import ProductTable from './Pages/DashBoard/ProductTable';
import CategoryTable from './Pages/DashBoard/CategoryTable';
import DashCreateCategory from './Pages/DashBoard/DashCreateCategory';
import NewOrderTable from './Pages/DashBoard/NewOrderTable';
import ProcessOrderTable from './Pages/DashBoard/ProcessOrderTable';
import WareHouseTable from './Pages/DashBoard/WareHouseTable';
import ShippedOrderTable from './Pages/DashBoard/ShippedOrderTable';
import PickupPointTable from './Pages/DashBoard/PickupPointTable';
import CompleteOrder from './Pages/DashBoard/CompleteOrder.jsx';
import CancelledOrder from './Pages/DashBoard/CancelledOrder';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Invoice from './Pages/DashBoard/Invoice';
import ApproveShopTable from './Pages/DashBoard/ApproveShopTable';
import SliderDash from './Pages/DashBoard/SliderDash';
import UploadSliderImg from './Pages/DashBoard/UploadSliderImg';
import CampaignHistory from './Pages/DashBoard/CampaignHistory';
import UploadCampaign from './Pages/DashBoard/UploadCampaign';
import Layout from './Pages/Shared/Layout';
import FlashSaleTable from './Pages/DashBoard/FlashSaleTable';
import UploadFlashSale from './Pages/DashBoard/UploadFlashSale';


function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }


  return (
    <>
      <ScrollToTop />
      <div className="m-auto text-center ">
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Layout><Home></Home></Layout>}></Route>
          <Route path="/register" element={<Layout><Register></Register></Layout>}></Route>
          <Route path="/login" element={<Layout><Login></Login></Layout>}></Route>
          <Route path="/profile" element={<Layout><PrivateRoute><Profile></Profile></PrivateRoute></Layout>}></Route>
          <Route path="/categories" element={<Layout><Categories></Categories></Layout>}></Route>
          <Route path="/create-categories" element={<Layout><PrivateRoute><CreateCategories></CreateCategories></PrivateRoute></Layout>}></Route>
          <Route path="/create-shop" element={<Layout><PrivateRoute><CreateShop></CreateShop></PrivateRoute></Layout>}></Route>
          <Route path='/shop/:slug' element={<Layout><ShopDetails></ShopDetails></Layout>}></Route>
          <Route path='/products' element={<Layout><TotalProducts></TotalProducts></Layout>}></Route>
          <Route path='/shop' element={<Layout><TotalShop></TotalShop></Layout>}></Route>
          <Route path='/create-product/:shopSlug' element={<Layout><PrivateRoute><CreateProduct></CreateProduct></PrivateRoute></Layout>}></Route>
          <Route path='/product/:id' element={<Layout><ProductDetails></ProductDetails></Layout>}></Route>
          <Route path='/orders' element={<Layout><PrivateRoute><Orders></Orders></PrivateRoute></Layout>}></Route>
          <Route path='/cart' element={<Layout><PrivateRoute><CartProduct></CartProduct></PrivateRoute></Layout>}></Route>
          <Route path='/address-book' element={<Layout><PrivateRoute><AddressBook></AddressBook></PrivateRoute></Layout>}></Route>
          <Route path='/create-address' element={<Layout><PrivateRoute><CreateAddress></CreateAddress></PrivateRoute></Layout>}></Route>
          <Route path='/checkout/:propArray' element={<Layout><PrivateRoute><CheckOut></CheckOut></PrivateRoute></Layout>}></Route>
          {/* <Route path='/product/checkout/:productId/:quantity' element={<ProductCheckOut></ProductCheckOut>}></Route> */}
          <Route path='/categories/:category' element={<Layout><CategoriesProduct></CategoriesProduct></Layout>}></Route>
          <Route path='/terms-conditions' element={<Layout><TermsConditions></TermsConditions></Layout>}></Route>
          <Route path='/return-refund' element={<Layout><ReturnRefund></ReturnRefund></Layout>}></Route>
          
        </Routes>
        <Routes>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/dashboard/users' element={<UserTable></UserTable>}></Route>
              <Route path='/dashboard/shop' element={<ShopTable></ShopTable>}></Route>
              <Route path='/dashboard/ApproveShop' element={<ApproveShopTable></ApproveShopTable>}></Route>
              <Route path='/dashboard/products' element={<ProductTable></ProductTable>}></Route>
              <Route path='/dashboard/categories' element={<CategoryTable></CategoryTable>}></Route>
              <Route path='/dashboard/create-categories' element={<DashCreateCategory></DashCreateCategory>}></Route>
              <Route path='/dashboard/new-orders' element={<NewOrderTable></NewOrderTable>}></Route>
              <Route path='/dashboard/processing-orders' element={<ProcessOrderTable></ProcessOrderTable>}></Route>
              <Route path='/dashboard/warehouse-orders' element={<WareHouseTable></WareHouseTable>}></Route>
              <Route path='/dashboard/shipped-orders' element={<ShippedOrderTable></ShippedOrderTable>}></Route>
              <Route path='/dashboard/pickup-point-orders' element={<PickupPointTable></PickupPointTable>}></Route>
              <Route path='/dashboard/complete-orders' element={<CompleteOrder></CompleteOrder>}></Route>
              <Route path='/dashboard/cancelled-orders' element={<CancelledOrder></CancelledOrder>}></Route>
              <Route path='/dashboard/invoice/:id' element={<Invoice></Invoice>}></Route>
              <Route path='/dashboard/slider' element={<SliderDash></SliderDash>}></Route>
              <Route path='/dashboard/slider-img' element={<UploadSliderImg></UploadSliderImg>}></Route>
              <Route path='/dashboard/campaign' element={<CampaignHistory></CampaignHistory>}></Route>
              <Route path='/dashboard/campaign-img' element={<UploadCampaign></UploadCampaign>}></Route>
              <Route path='/dashboard/flashsale' element={<FlashSaleTable></FlashSaleTable>}></Route>
              <Route path='/dashboard/upload-flash-sale' element={<UploadFlashSale></UploadFlashSale>}></Route>
        </Routes>
        
        {/* <Footer></Footer> */}
        <MessengerCustomerChat
    pageId="121253954413161" 
    appId="1035703037435590"
  />
        <ToastContainer />
      </div>
    </>
  );
}

export default App
