import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import StoreIcon from '@mui/icons-material/Store';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import useAuth from '../hooks/useAuth';
import CategoryIcon from '@mui/icons-material/Category';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';
import EventIcon from '@mui/icons-material/Event';

function SideBar(){
    const [active, setActive] = useState();
    const [route, setRoute] = useState([]);
    const role  = "Admin"
    // const [min, setMin] = useState(false);

//   useEffect(() => {
//     // Define a function to update 'min' based on screen size
//     function updateMinValue() {
//       setMin(window.innerWidth <= 768); // Adjust the breakpoint as needed
//     }

//     // Add an event listener for screen size changes
//     window.addEventListener('resize', updateMinValue);

//     // Initial value
//     updateMinValue();

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener('resize', updateMinValue);
//     };
//   }, []);

    function toggleActive(index){
        if(active === index){
            setActive(-1)
        }
        if(active !== index){
            setActive(index)
        }
    }

    useEffect(()=>{
        if(role === "Admin"){
            setRoute([
                {
                    title:'Users',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <ManageAccountsIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 40,
                    links:[
                        {name:'Users',link:'/dashboard/users'},
                        // // {name:'Chef',link:'/chef'},
                        // {name:'Waiter',link:'/waiter'},
                        // {name:'Customer',link:'/customer'},
                    ]
                },
                {
                    title:'Shops',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <StoreIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 60,
                    links:[
                        {name:'ApproveShop',link:'/dashboard/ApproveShop'},
                        {name:'Shops',link:'/dashboard/shop'},
                        
                    ]
                },
                {
                    title:'Products',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <ProductionQuantityLimitsIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 40,
                    links:[
                        {name:'Products',link:'/dashboard/products'},
                    ]
                },
                {
                    title:'Category',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <CategoryIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 60,
                    links:[
                        {name:'Categories',link:'/dashboard/categories'},
                        {name:'Create Categories',link:'/dashboard/create-categories'},
                    ]
                },
                {
                    title:'Order',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <OpenInBrowserRoundedIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 220,
                    links:[
                        {name:'New Orders',link:'/dashboard/new-orders'},
                        {name:'Processing Orders',link:'/dashboard/processing-orders'},
                        {name:'WareHouse Orders',link:'/dashboard/warehouse-orders'},
                        {name:'Shipped Orders',link:'/dashboard/shipped-orders'},
                        {name:'PickupPoint Orders',link:'/dashboard/pickup-point-orders'},
                        {name:'Complete Orders',link:'/dashboard/complete-orders'},
                        {name:'Cancelled Orders',link:'/dashboard/cancelled-orders'},
                    ]
                },
                {
                    title:'Events',
                    icon: <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <EventIcon style={{ fontSize: "2rem" }} />
                  </IconButton>,
                    height: 90,
                    links:[
                        {name:'Slider',link:'/dashboard/slider'},
                        {name:'Campaign',link:'/dashboard/campaign'},
                        {name:'FlashSale',link:'/dashboard/flashsale'},
                    ]
                },
            ]);
        }else if(role === "Manager"){
            setRoute([
                {
                    title:'Table Booking',
                    icon: <i className="fa-solid fa-receipt"></i>,
                    height: 60,
                    links:[
                        {name:'Add Booking',link:'/addBooking'},
                        {name:'All Booking',link:'/allBooking'},
                    ]
                },
                {
                    title:'Manage Order',
                    icon: <i className="fa-solid fa-list-check "></i>,
                    height: 153,
                    links:[
                        {name:'New Order',link:'/newOrder'},
                        {name:'Complete Order',link:'/completeOrder'},
                        {name:'Cancel Order',link:'/CancelOrder'},
                        {name:'ALL Order',link:'/AllOrder'},
                    ]
                }
            ]);
        }
    },[role])

 


    return(
    <>
        <div className=" w-[200px] min-h-screen bg-sidebar1 float-left select-none bg-yellow bg-opacity-60 text-start">
            {/* <div className=" transition-all duration-700 ease-in-out w-full h-[70px] px-4 font-bold text-2xl text-main bg-slate-700 flex items-center gap-4">
                <Link to='/'>
                    <i className="fa-solid fa-burger text-4xl"></i>
                    <span>Tehari n Hurry</span>
                </Link>
            </div> */}
            <div className=" mt-8">
                <NavLink className={(e)=>e.isActive?" text-gray-dark ":" hover:text-gray-dark text-gray-dark"} to='/dashboard'>
                    <div className="  transition-all duration-700 ease-in-out  w-full ">
                        <div className=" text-xl cursor-pointer px-2 py-2 flex items-center gap-1"> <IconButton
                    color="secondary"
                    sx={{ p: "" }}
                    aria-label="directions"
                  >
                    <DashboardIcon style={{ fontSize: "2rem" }} />
                  </IconButton> <span>Dashboard</span></div>
                    </div>
                </NavLink>
                {
                    route.map((data, index)=>{
                        return(
                            <div key={index} className="  transition-all duration-700 ease-in-out  w-full ">
                                <div onClick={()=> toggleActive(index)} className="text-gray-dark text-xl cursor-pointer px-2 py-2 flex items-center gap-1"> {data.icon} <span>{data.title}</span></div>
                                <div style={{height:`${(active === index)? `${data.height}px`: '0px'} `}} className="transition-all duration-700 ease-in-out overflow-hidden h-full pl-10  flex flex-col gap-2 bg-warning shadow-inner text-dark font-semibold relative">
                                    <div className=" absolute top-0 left-0 w-1 h-full bg-secondary rounded-tr-md rounded-br-md"></div>
                                    {
                                        data.links.map((data, index)=>{
                                            return(
                                                <NavLink className={(e)=>e.isActive?" text-primary":" hover:text-primary"} key={index} to={data.link}>{data.name}</NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        
    </>
    );
}

export default SideBar;