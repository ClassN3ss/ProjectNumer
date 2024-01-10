import React from 'react';
import { useState } from 'react';
import{
    FaHome,
    FaPlus,
    FaBars,
    FaPercent,
    FaRegChartBar,
    FaCommentAlt,
    FaCalculator
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem =[
        {
            path:"/",
            name:"Home",
            icon:<FaHome />
        },
        {
            path:"/bisection",
            name:"Bisection",
            icon:<FaPlus />
        },
        {
            path:"/falseposition",
            name:"FalsePosition",
            icon:<FaPercent />
        },
        {
            path:"/onepointeleration",
            name:"OnePointEleration",
            icon:<FaRegChartBar />
        },
        {
            path:"/newtonraphson",
            name:"NewtonRaphson",
            icon:<FaCommentAlt />
        },
        {
            path:"/scant",
            name:"Scant",
            icon:<FaCalculator />
        },
        {
            path:"/pathanin",
            name:"Pathanin",
            icon:<FaHome />
        },
        {
            path:"/matix",
            name:"Matix",
            icon:<FaHome />
        },
    ]
    return (
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Root Of Equation</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;