
"use client"; // this is a client component
import { signOut } from "firebase/auth";
import { useState } from "react";
import React, { useRef } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { RxCross2 } from 'react-icons/rx'
import { VscThreeBars } from 'react-icons/vsc'
import { FaDove } from 'react-icons/fa'

import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";




const Navbar = () => {


  // useState is a react createHook. It give initial value of a variable .
  //  The set..... function change the initial value and set a new value .

  const [drawer, setDrawer] = useState(false)
  const [toggleCross, setToggleCross] = useState(false)

  // User information is comes from firebase database via useAuthState function
  const [user] = useAuthState(auth)

  // useNavigate function is used for navigate a targeted page . this hook is use for conditional navigate situation 
  const navigate = useNavigate()
  const signedOut = () => {
    signOut(auth);
    navigate('/logIn');
  }


  return (

    <div>
      <div className="shadow-gray-500 shadow-md  bg-color-first  flex justify-between  md:h-14 h-10 md:px-12 px-2 md:py-10 py-6 items-center fixed w-full bg-blue-800  z-30">
        <Link to='/'>  <div className="text-white md:text-3xl text-xl italic">
          <div className="font-bold flex items-center"><p className="mr-1">TRAVEL BD</p> <FaDove /></div>
        </div></Link>

        {/* menu for up to medium size device */}
        <div className="md:flex hidden" >
          <a href="/#Home"> <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Home</p></a>
          <a href="/#scenario">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Scenario</p></a>

          <a href="/#AboutUs">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">About Us</p></a>

          <a href="/#Contact">  <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center">Contact</p></a>
          {user ? <div className="flex">
            <p className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" onClick={() => signedOut()}>SignOut</p>
            <Link className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" to='/dashboard'>Dadhboard</Link>
          </div> : <Link className="mx-3 text-white hover:text-gray-50 duration-700 border-[1px] w-24  border-blue-800  hover:border-white rounded-md px-2  text-center" to='/login'>Login</Link>}
        </div>


        {/* menu for mobile device  start here*/}
        {/* setToggleCross function change the value of toggleCross . the VscThreeBars bars icon will be hidden and the cross will be displayed when the value of  toggleCross is true . And the setDrawer function change the value of drawer .The drawer will be displayed when the drawer value will be true and will be hidden when the value of drawer will be false*/}
        <VscThreeBars className={toggleCross ? "hidden bg-white text-black rounded-full p-1  text-3xl" : "md:hidden  bg-white text-black rounded-full p-1  text-3xl"}
          onClick={() => {
            setDrawer(true)
            setToggleCross(true)
          }} />

        <RxCross2 className={toggleCross ? "md:hidden bg-white text-black rounded-full p-1  text-3xl" : "hidden  bg-white text-black rounded-full p-1  text-3xl"}
          onClick={() => {
            setDrawer(false)
            setToggleCross(false)
          }} />

        {/* drawer div start from here  */}

        <div onClick={() => {
          setDrawer(false)
          setToggleCross(false)

          // if the drawer value is true the first section of ternary operation will be executed otherwise the second section will be executed
        }} className={drawer ? 'md:hidden fixed top-12 w-64 left-0 transition-all duration-700 rounded-b bg-blue-600' : 'rounded-b  bg-blue-600 md:hidden fixed  top-12 w-64   z-30 -left-64 transition-all duration-700'} >

          <a href='/#Home'>  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Home</p></a>
          <a href="/#scenario">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Scenario</p></a>

          <a href="/#AboutUs">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">About Us</p></a>

          <a href="/#Contact">  <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Contact</p></a>
          {user ? <div>
            {/* if anybody press of the SignOut paragraph the signOut function will be called */}
            <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 " onClick={() => signedOut()}>SignOut</p>
            <Link to='/dashboard'> <p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Dadhboard</p> </Link>
          </div> : <Link to='/login'><p className=" border-2 border-white hover:font-bold px-2 py-2 mx-2 bg-white rounded my-3 ">Login</p></Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
