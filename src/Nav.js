import './Nav.css';
import React, { useEffect, useState } from 'react'

function Nav() {
const [show, handleShow] =useState(false);   
useEffect(() =>{
    window.addEventListener("scroll",() =>{
        if(window.scrollY >100 ){
            handleShow(true);
        }else  handleShow(false);
        
    });
    return () =>{
        window.removeEventListener("scroll");
    };
},[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
         <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix"/>  
        <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HRe1t4hy4NZQgflXSYs5ucrjNrOEA-JVhw&usqp=CAU"   alt=""/>
        </div>
    )
}

export default Nav
    