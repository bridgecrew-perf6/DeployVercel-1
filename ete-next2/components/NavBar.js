
import {Transition } from "@headlessui/react";
import React, { useContext } from 'react';
import Link from "next/link";
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';



function NavBar() {
    const [isOpen,setIsOpen]=useState(false);
	const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const {  userInfo } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    router.push('/');
  };

  const classes = useStyles();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
        <div >
             <nav className='bg-slate-200 h-32 w-full'>
                <div className=''>
                    <div className=''>   
                            <div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" mt-3 font-bold text-4xl ">
									<span className="text-yellow-600 ">Explore, Travel, Enjoy</span>
								</h1>
							</div>  
                            <div className="hidden md:block ">
								
								<div className="text-center mt-7 items-baseline space-x-10">
								<Link href="/">
									<a className={router.pathname == "/" ? "active" : "non-active"}>
									HOME
									</a>
								</Link>
								<Link href="/trips">
									<a className={router.pathname == "/trips" ? "active" : "non-active"}>
									TRIPS
									</a>
								</Link>
								<Link href="/travels">
									<a className={router.pathname == "/travels" ? "active" : "non-active"}>
									TRAVELS
									</a>
								</Link>
								<Link href="/blog">
									<a className={router.pathname == "/blog" ? "active" : "non-active"}>
									BLOG
									</a>
								</Link>
								<Link href="/about">
									<a className={router.pathname == "/about" ? "active" : "non-active"}>
									ABOUT
									</a>
								</Link>
									{userInfo ? (
									<>
									<Button
										aria-controls="simple-menu"
										aria-haspopup="true"
										onClick={loginClickHandler}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-xl font-medium"
									>
										{userInfo.name}
									</Button>
									<Menu
										id="simple-menu"
										anchorEl={anchorEl}
										keepMounted
										open={Boolean(anchorEl)}
										onClose={loginMenuCloseHandler}
									>
										<MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
										<MenuItem onClick={loginMenuCloseHandler}>
										My account
										</MenuItem>
										<MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
									</Menu>
									</>
								) : (
								
									<Link href="/login">
									<a className={router.pathname == "/login" ? "active" : "non-active"}>
									LOGIN
									</a>
								</Link>
									
								)}
        
									</div>
								
                            </div>

							 <div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
                    </div>
                 </div>

                 <Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden absolute left-0 right-0 z-10" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-3 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link href="/">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">HOME</a>
									</Link>
									<Link href="/trips">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">TRIPS</a>
									</Link>
									<Link href="/travels">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">TRAVELS</a>
									</Link>
									<Link href="/blog">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">BLOG</a>
									</Link>
									<Link href="/about">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">ABOUT US</a>
									</Link>
									<Link href="/login">
										<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">LOGIN</a>
									</Link>
								
							</div>
						</div>
					)}
				</Transition>
		
			</nav> 
        </div>
		 )
		}
		
		export default NavBar

                         
   
