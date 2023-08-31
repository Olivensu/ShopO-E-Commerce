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
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/create-categories" element={<CreateCategories></CreateCategories>}></Route>
          <Route path="/create-shop" element={<CreateShop></CreateShop>}></Route>
          <Route path='/shop/:slug' element={<ShopDetails></ShopDetails>}></Route>
          <Route path='/shop' element={<TotalShop></TotalShop>}></Route>
          <Route path='/create-product/:shopSlug' element={<CreateProduct></CreateProduct>}></Route>
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/cart' element={<CartProduct></CartProduct>}></Route>
          <Route path='/checkout/:propArray' element={<CheckOut></CheckOut>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App
