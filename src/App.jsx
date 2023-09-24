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
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/create-categories" element={<PrivateRoute><CreateCategories></CreateCategories></PrivateRoute>}></Route>
          <Route path="/create-shop" element={<PrivateRoute><CreateShop></CreateShop></PrivateRoute>}></Route>
          <Route path='/shop/:slug' element={<ShopDetails></ShopDetails>}></Route>
          <Route path='/products' element={<TotalProducts></TotalProducts>}></Route>
          <Route path='/shop' element={<TotalShop></TotalShop>}></Route>
          <Route path='/create-product/:shopSlug' element={<PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>}></Route>
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/orders' element={<PrivateRoute><Orders></Orders></PrivateRoute>}></Route>
          <Route path='/cart' element={<PrivateRoute><CartProduct></CartProduct></PrivateRoute>}></Route>
          <Route path='/address-book' element={<PrivateRoute><AddressBook></AddressBook></PrivateRoute>}></Route>
          <Route path='/create-address' element={<PrivateRoute><CreateAddress></CreateAddress></PrivateRoute>}></Route>
          <Route path='/checkout/:propArray' element={<PrivateRoute><CheckOut></CheckOut></PrivateRoute>}></Route>
          {/* <Route path='/product/checkout/:productId/:quantity' element={<ProductCheckOut></ProductCheckOut>}></Route> */}
          <Route path='/categories/:category' element={<CategoriesProduct></CategoriesProduct>}></Route>
          <Route path='/terms-conditions' element={<TermsConditions></TermsConditions>}></Route>
          <Route path='/return-refund' element={<ReturnRefund></ReturnRefund>}></Route>
          
        </Routes>
        <Routes>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/dashboard/users' element={<UserTable></UserTable>}></Route>
              <Route path='/dashboard/shop' element={<ShopTable></ShopTable>}></Route>
              <Route path='/dashboard/products' element={<ProductTable></ProductTable>}></Route>
              <Route path='/dashboard/categories' element={<CategoryTable></CategoryTable>}></Route>
              <Route path='/dashboard/create-categories' element={<DashCreateCategory></DashCreateCategory>}></Route>
        </Routes>
        
        <Footer></Footer>
        
        <ToastContainer />
      </div>
    </>
  );
}

export default App
