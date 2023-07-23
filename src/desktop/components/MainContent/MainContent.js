import React from 'react';
import './MainContent.css';
import MainContentHeader from './MainContentHeader/MainContentHeader';
import MainContentBody from './MainContentBody/MainContentBody.js'
import MainContentFooter from './MainContentFooter/MainContentFooter.js';
import { useState } from 'react';
import MainContentPopUp from './MainContentPopUp/MainContentPopUp';

const MainContent = (props) => {
   const [ popUp , setPopUp ]  = useState("false"); 

      // designing popup for creating new assessment
      function newAssessmentPopUp(value){
           setPopUp(value);
      }
     
  return (
    // creating the UI for  desktop main content body having multiple componenets header body footer
  
    <div className="main_content_main">
         
          <MainContentHeader/>
          <div className="main_content_assesments">
            <MainContentBody  />
            <MainContentFooter  newAssessmentPopUp = {newAssessmentPopUp} />
          </div>
        { popUp ===  'true' && <MainContentPopUp newAssessmentPopUp = {newAssessmentPopUp}  />}

      </div>
      
  )
}

export default MainContent;
 