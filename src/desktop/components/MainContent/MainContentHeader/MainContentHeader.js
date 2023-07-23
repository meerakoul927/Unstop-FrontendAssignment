import React from 'react';
import './MainContentHeader.css';
import { BiMobile }  from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';


const MainContentHeader = () => {

   const navigate = useNavigate();
   
  
   function mobileButton(){
          navigate('/mobile');
   } 
  return (
    // Header design of main content assignment page of desktop starts 
    <div className="main_content_header">
        
        { /*  Header design of main content assessment title and my assessment title starts */}
        <div className="main_content_header_title">
         <div class="main_content_header_assessment">Assessment</div>
          <div className="main_content_header_line_break"></div>
          <div class="main_content_header_title_box">
             <span class="my-assessments">My Assessments</span>
          </div>
          </div>
           { /*  Header design of main content assessment title and my assessment title ends */}
          <div>
            <BiMobile className="main_content_mobile_icon" onClick = {mobileButton}/>
          </div>
  </div>
   // Header design of main content assignment page of desktop ends
  )
}


export default MainContentHeader
