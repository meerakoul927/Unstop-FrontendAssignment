import React from 'react';
import './SideBar.css';
import {  MdDashboard } from 'react-icons/md';
import { PiBoundingBoxFill } from 'react-icons/pi';
import  { MdOutlineNoteAlt } from 'react-icons/md';
import { MdOutlineQuiz } from 'react-icons/md';
import { useState } from 'react';


const SideBar = () => {
   const [selected , setSelected ] = useState(null);

   const handleClick = (id) => {
        setSelected(id);
   }

  return (
    // designing sidebar for desktop layout page
    <div className="sidebar_main">
          
           <div  id = {1} className={(selected === 1) ? "sidebar_dashboard_selected" : "sidebar_dashboard"} onClick={()=>handleClick(1)}>
                 <MdDashboard className="sidebar_dashboard_icon" />
                 <p className="sidebar_dashboard_title">Dashboard</p>
           </div>
  
             <div  className="sidebar_dashboard_selected" >
              <MdOutlineNoteAlt className="sidebar_dashboard_icon"/>
              <p className="sidebar_dashboard_title">Assessment</p>
           </div>
           
           <div  id ={3} className={(selected === 3 )  ? "sidebar_dashboard_selected" : "sidebar_dashboard"} onClick={()=>handleClick(3)}>
                 <MdOutlineQuiz className="sidebar_dashboard_icon" />
                 <p className="sidebar_dashboard_title">My Library</p>
           </div>
           <hr className="sidebar_line"/>
           <button className="sidebar_button">Admin</button>

           <div id = {4} className={( selected === 4 ) ? "sidebar_dashboard_selected" : "sidebar_dashboard"} onClick={() =>handleClick(4)}>
                 <MdOutlineNoteAlt className="sidebar_dashboard_icon"/>
                 <p className="sidebar_dashboard_title">Round Status</p>
           </div>

    </div>
  )
}

export default SideBar;
