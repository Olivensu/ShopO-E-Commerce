import React, { } from 'react'
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import second from '../../img/logo.svg'
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SportsIcon from '@mui/icons-material/Sports';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StyleIcon from '@mui/icons-material/Style';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import Face4Icon from '@mui/icons-material/Face4';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import CartItem from '../Hooks/CartItem';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const items = CartItem();
  // console.log(items.length);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const logout = () => {
    signOut(auth);
  };
  const [products, setProducts] = useState([])
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
      }, [])
  
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  // if (user) {
  //   return (
  //     <div>
  //       <p>Current User: {user?.user?.email}</p>
  //       <button onClick={logout}>Log out</button>
  //     </div>
  //   );
  // }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//   },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002,
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   {
//     title: 'Star Wars: Episode IV - A New Hope',
//     year: 1977,
//   },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 },
//   { title: 'Casablanca', year: 1942 },
//   { title: 'City Lights', year: 1931 },
//   { title: 'Psycho', year: 1960 },
//   { title: 'The Green Mile', year: 1999 },
//   { title: 'The Intouchables', year: 2011 },
//   { title: 'Modern Times', year: 1936 },
//   { title: 'Raiders of the Lost Ark', year: 1981 },
//   { title: 'Rear Window', year: 1954 },
//   { title: 'The Pianist', year: 2002 },
//   { title: 'The Departed', year: 2006 },
//   { title: 'Terminator 2: Judgment Day', year: 1991 },
//   { title: 'Back to the Future', year: 1985 },
//   { title: 'Whiplash', year: 2014 },
//   { title: 'Gladiator', year: 2000 },
//   { title: 'Memento', year: 2000 },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
//   { title: 'Apocalypse Now', year: 1979 },
//   { title: 'Alien', year: 1979 },
//   { title: 'Sunset Boulevard', year: 1950 },
//   {
//     title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964,
//   },
//   { title: 'The Great Dictator', year: 1940 },
//   { title: 'Cinema Paradiso', year: 1988 },
//   { title: 'The Lives of Others', year: 2006 },
//   { title: 'Grave of the Fireflies', year: 1988 },
//   { title: 'Paths of Glory', year: 1957 },
//   { title: 'Django Unchained', year: 2012 },
//   { title: 'The Shining', year: 1980 },
//   { title: 'WALL·E', year: 2008 },
//   { title: 'American Beauty', year: 1999 },
//   { title: 'The Dark Knight Rises', year: 2012 },
//   { title: 'Princess Mononoke', year: 1997 },
//   { title: 'Aliens', year: 1986 },
//   { title: 'Oldboy', year: 2003 },
//   { title: 'Once Upon a Time in America', year: 1984 },
//   { title: 'Witness for the Prosecution', year: 1957 },
//   { title: 'Das Boot', year: 1981 },
//   { title: 'Citizen Kane', year: 1941 },
//   { title: 'North by Northwest', year: 1959 },
//   { title: 'Vertigo', year: 1958 },
//   {
//     title: 'Star Wars: Episode VI - Return of the Jedi',
//     year: 1983,
//   },
//   { title: 'Reservoir Dogs', year: 1992 },
//   { title: 'Braveheart', year: 1995 },
//   { title: 'M', year: 1931 },
//   { title: 'Requiem for a Dream', year: 2000 },
//   { title: 'Amélie', year: 2001 },
//   { title: 'A Clockwork Orange', year: 1971 },
//   { title: 'Like Stars on Earth', year: 2007 },
//   { title: 'Taxi Driver', year: 1976 },
//   { title: 'Lawrence of Arabia', year: 1962 },
//   { title: 'Double Indemnity', year: 1944 },
//   {
//     title: 'Eternal Sunshine of the Spotless Mind',
//     year: 2004,
//   },
//   { title: 'Amadeus', year: 1984 },
//   { title: 'To Kill a Mockingbird', year: 1962 },
//   { title: 'Toy Story 3', year: 2010 },
//   { title: 'Logan', year: 2017 },
//   { title: 'Full Metal Jacket', year: 1987 },
//   { title: 'Dangal', year: 2016 },
//   { title: 'The Sting', year: 1973 },
//   { title: '2001: A Space Odyssey', year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: 'Toy Story', year: 1995 },
//   { title: 'Bicycle Thieves', year: 1948 },
//   { title: 'The Kid', year: 1921 },
//   { title: 'Inglourious Basterds', year: 2009 },
//   { title: 'Snatch', year: 2000 },
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div className='flex items-center justify-center mt-5'>
     <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
      freeSolo
      id="free-solo-2-demo"
      className=""
      disableClearable
      options={products}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Desired items..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      onChange={handleProductSelection}
    />
      <button className='btn bg-orange hover:bg-green '><SearchIcon   className=''/></button>
      
     </div>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon> run dev
              
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <div className='mt-5'></div>
      <Divider />
      <ul className=" ml-[-9px] w-56 mt-2 py-3 bg-white  z-50 cursor-pointer">
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  to={`/categories/mobile-and-laptops`}>
                        {" "}
                        <BookOnlineIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BookOnlineIcon>{" "}
                        Mobile & Laptops
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/gaming-entertainment`}>
                        {" "}
                        <SportsEsportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsEsportsIcon>{" "}
                        Gaming Entertainment
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/image-and-video`}>
                        {" "}
                        <CameraRollIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></CameraRollIcon>{" "}
                        Image & Video
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/vehicles`}>
                        {" "}
                        <BikeScooterIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BikeScooterIcon>{" "}
                        Vehicles
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/furnitures`}>
                        {" "}
                        <BedroomParentIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BedroomParentIcon>{" "}
                        Furnitures
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/sport`}>
                        {" "}
                        <SportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsIcon>{" "}
                        Sport
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/food-and-drinks`}>
                        {" "}
                        <FastfoodIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></FastfoodIcon>{" "}
                        Food & Drinks
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/fashion-accessories`}>
                        {" "}
                        <StyleIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></StyleIcon>{" "}
                        Fashion Accessories
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/toilet-and-sanitation`}>
                        {" "}
                        <SanitizerIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SanitizerIcon>{" "}
                        Toilet & Sanitation
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/makeup-corner`}>
                        {" "}
                        <Face4Icon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></Face4Icon>{" "}
                        Makeup Corner
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link to={`/categories/baby-items`}>
                        {" "}
                        <ChildFriendlyIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></ChildFriendlyIcon>{" "}
                        Baby Items
                      </Link>
                    </li>
                  </ul>
    </Box>
  );
  
  const handleProductSelection = (event, selectedProduct) => {
    if (selectedProduct) {
      // Navigate to the product detail page using the product's _id
      navigate(`/product/${selectedProduct._id}`);
      
      // Clear the input field by resetting the inputValue state
      setTimeout(() => {
        setInputValue('');
      }, 100);
    }
    // setInputValue('');
  };

  return (
    <div className="">
      {/* <div className="flex sm:flex-col md:flex-row  justify-between max-w-screen-xl mx-auto">
        <div className="flex justify-start items-center my-2">
          <span className="mx-4">Account</span>
          <span className="mx-4">Track Order</span>
          <span className="mx-4">Support</span>
        </div>
        <div className="flex justify-end md:inline sm:hidden">
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              United State
            </option>
            <option className=" text-lg">Bangladesh</option>
            <option className=" text-lg">India</option>
            <option className=" text-lg">China</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              USD
            </option>
            <option className=" text-lg">BDT</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              English
            </option>
            <option className=" text-lg">Bangla</option>
          </select>
        </div>
      </div>
      <hr /> */}

      <div className="flex justify-between items-center max-w-screen-xl  lg:mt-0 mx-auto my-2 md:my-0">
        <Link to="/">
          <img className="w-24 md:w-28 lg:w-36 ml-3 " src={second} alt="" />
        </Link>
        {/* <IconButton sx={{  }} aria-label="menu">
        <img className='w-2/3 md:w-full' src={second} alt="" />
      </IconButton> */}
        {/* <InputBase
        
        placeholder="Search your Desire items..."
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
        <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
      freeSolo
      id="free-solo-2-demo"
      className=""
      disableClearable
      options={products}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Desired items..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      onChange={handleProductSelection}
    />
        <button className="btn bg-orange hover:bg-green md:px-5 ">
          <SearchIcon className="" />
        </button>
        <div className="flex justify-end items-center">
          <Link to='/cart'><div className="hidden lg:inline mr-[-10px] ml-1 mr-2">
            <div>
              {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
              <IconButton
                color="primary"
                sx={{ p: "" }}
                aria-label="directions"
              >
                <AddShoppingCartIcon style={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
            <Link to="cart-item">
              <p className="text-xs inline absolute mt-[-50px] ml-3 bg-blue px-1 rounded-full">
                {items.length}
              </p>
            </Link>
          </div></Link>
          {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
          {user ? (
            <IconButton color="primary" sx={{ p: "" }} aria-label="directions">
              <ul className="menu">
                <li>
                  <details>
                    <summary>
                      <AccountCircleIcon style={{ fontSize: "2rem" }} />
                    </summary>
                    <div className="absolute shadow-orange shadow-2xl bg-gray-light text-black p-2 rounded-xl ml-[-150px] w-64 mt-2   z-50">
                      <li>
                        <p>
                          <AccountCircleIcon />
                          {user?.email}
                        </p>
                      </li>
                      
                      <li className="mt-2">
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to='/cart'>
                          <div className="">
                            <div>
                              {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
                              Your Cart:
                              <IconButton
                                color="primary"
                                sx={{ p: "" }}
                                aria-label="directions"
                              >
                                <AddShoppingCartIcon
                                  style={{ fontSize: "2rem" }}
                                />
                              </IconButton>
                            </div>
                            <Link to="cart-item">
                              <p className="text-xs inline absolute mt-[-50px] ml-24 bg-blue px-1 rounded-full">
                                {items.length}
                              </p>
                            </Link>
                          </div>
                        </Link>
                      </li>
                      <button
                        className="btn btn-warning w-full mt-3"
                        onClick={logout}
                      >
                        Log out
                      </button>
                    </div>
                  </details>
                </li>
              </ul>
            </IconButton>
          ) : (
            <Link to="/login">
              <IconButton
                color="primary"
                sx={{ p: "" }}
                aria-label="directions"
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          )}
        </div>
      </div>
      <div className="bg-yellow pt-2 mx-auto  lg:mt-0">
        <div className="mx-2 md:mx-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="inline lg:hidden">
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>

            <ul className="menu hidden lg:inline bg-white w-56 rounded-t-xl ml-3">
              <li>
                <details>
                  <summary>
                    <MenuIcon />{" "}
                    <span className="text-black">All Categories</span>
                  </summary>
                  <ul className="absolute ml-[-9px] shadow-orange shadow-2xl w-56 mt-2 py-3 bg-white  z-50">
                    <li>
                      <Link  to={`/categories/mobile-and-laptops`}>
                        {" "}
                        <BookOnlineIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BookOnlineIcon>{" "}
                        Mobile & Laptops
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/gaming-entertainment`}>
                        {" "}
                        <SportsEsportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsEsportsIcon>{" "}
                        Gaming Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/image-and-video`}>
                        {" "}
                        <CameraRollIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></CameraRollIcon>{" "}
                        Image & Video
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/vehicles`}>
                        {" "}
                        <BikeScooterIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BikeScooterIcon>{" "}
                        Vehicles
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/furnitures`}>
                        {" "}
                        <BedroomParentIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BedroomParentIcon>{" "}
                        Furnitures
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/sport`}>
                        {" "}
                        <SportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsIcon>{" "}
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/food-and-drinks`}>
                        {" "}
                        <FastfoodIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></FastfoodIcon>{" "}
                        Food & Drinks
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/fashion-accessories`}>
                        {" "}
                        <StyleIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></StyleIcon>{" "}
                        Fashion Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/toilet-and-sanitation`}>
                        {" "}
                        <SanitizerIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SanitizerIcon>{" "}
                        Toilet & Sanitation
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/makeup-corner`}>
                        {" "}
                        <Face4Icon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></Face4Icon>{" "}
                        Makeup Corner
                      </Link>
                    </li>
                    <li>
                      <Link to={`/categories/baby-items`}>
                        {" "}
                        <ChildFriendlyIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></ChildFriendlyIcon>{" "}
                        Baby Items
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <div className="flex w-full justify-between item-center lg:hidden">
              <ul className="menu">
                <Link to="/shop">
                  <li>
                    <p className='p-0'>
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Shop
                    </p>
                  </li>
                </Link>
              </ul>
              <Link to="/categories">
                <ul className="menu">
                  <li>
                    <p className='p-0'>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu">
                <Link to='/orders'><li>
                  <p className='p-0'>
                    <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "}
                    Orders
                  </p>
                </li></Link>
              </ul>
            </div>
            <div className="flex lg:flex hidden lg:inline">
              <Link to="/">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <HomeIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></HomeIcon>{" "}
                      Home
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
                <Link to="/shop">
                  <li>
                    <p>
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Shop
                    </p>
                  </li>
                </Link>
              </ul>
              <Link to="/categories">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
              <Link to='/orders'><li>
                  <p>
                    <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "}
                    Orders
                  </p>
                </li></Link>
              </ul>
              <ul className="menu ml-3">
                <Link to='/address-book'><li>
                  <p>
                    <LocalShippingIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></LocalShippingIcon>{" "}
                    Delivery Address
                  </p>
                </li></Link>
              </ul>
            </div>
            {/* import LocalShippingIcon from '@mui/icons-material/LocalShipping'; */}
            {/* <ul className="menu ml-3">
              <li>
                <details>
                  <summary>Shop</summary>
                  <ul className="menu lg:menu-horizontal ml-[-50px] lg:ml-[-350px] lg:min-w-max bg-white rounded-box absolute w-56 mt-2 z-50">
                    <li>
                      <a>Solutions</a>
                      <ul>
                        <li>
                          <a>Design</a>
                        </li>
                        <li>
                          <a>Development</a>
                        </li>
                        <li>
                          <a>Hosting</a>
                        </li>
                        <li>
                          <a>Domain register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Enterprise</a>
                      <ul>
                        <li>
                          <a>CRM software</a>
                        </li>
                        <li>
                          <a>Marketing management</a>
                        </li>
                        <li>
                          <a>Security</a>
                        </li>
                        <li>
                          <a>Consulting</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Products</a>
                      <ul>
                        <li>
                          <a>UI Kit</a>
                        </li>
                        <li>
                          <a>Wordpress themes</a>
                        </li>
                        <li>
                          <a>Wordpress plugins</a>
                        </li>
                        <li>
                          <a>Open source</a>
                          <ul>
                            <li>
                              <a>Auth management system</a>
                            </li>
                            <li>
                              <a>VScode theme</a>
                            </li>
                            <li>
                              <a>Color picker app</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Company</a>
                      <ul>
                        <li>
                          <a>About us</a>
                        </li>
                        <li>
                          <a>Contact us</a>
                        </li>
                        <li>
                          <a>Privacy policy</a>
                        </li>
                        <li>
                          <a>Press kit</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul> */}
            {/* <ul className="menu ml-3 hidden lg:inline">
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="absolute w-56 mt-2 bg-white  z-50">
                    <li>
                      <a>Privacy Policy</a>
                    </li>
                    <li>
                      <a>Terms and Conditions</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                    <li>
                      <a>Shop List View</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul> */}

            <Link to="/create-shop">
              <button className="bg-black text-white py-2 px-5 hidden lg:inline">
                Become a Seller
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header 