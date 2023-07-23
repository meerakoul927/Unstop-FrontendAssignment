import React from 'react';
import './MainContentPopUp.css';
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';
function MainContentPopUp(props) { 
   
      
      function closePopUp(){
           props.newAssessmentPopUp("false");
      }
      { /* designing div for popup to add new assessment */}
  return (
    
        <div className = "main_content_popup_div">
        { /* designing div for popup to add new assessment  - header section starts*/}
           <div className="main_content_popup_div_header">
                <span className="main_content_popup_div_header_title">Create new  Assessment</span>
                <span ><RxCross2 className="popup_cross_icon" onClick={closePopUp}/></span>
           </div>
         { /* designing div for popup to add new assessment  - header section ends */}
            { /* designing div for popup to add new assessment  - body section starts */}
          <div className="main_content_popup_div_body">
          
                <div className="main_content_popup_div_input_element">
                   <label for = "assessment_name" className="assessment_name_title"> Name of assessment </label>
                     <input type="text" placeholder="Type Here" name = "assessment_name" id="assessment_name" className="assessment_name_div_input_box2"/>  
                </div>  

                <div className="main_content_popup_div_input_element">
                   <label for = "assessment_name" className="assessment_name_title"> Purpose of the test is  </label>
                   <div className="assessment_name_div_input_box">
                   <input type="text" placeholder="Select" name = "assessment_name" id="assessment_name" className="assessment_name_input_box1"/>  
                   <RiArrowDropDownLine className="popup-drop-down-icon"/>   
                </div>
                   
                </div>

                <div className="main_content_popup_div_input_element">
                   <label for = "assessment_name" className="assessment_name_title"> Description  </label>
                   <div className="assessment_name_div_input_box">
                   <input type="text" placeholder="Select" name = "assessment_name" id="assessment_name" className="assessment_name_input_box1"/>  
                   <RiArrowDropDownLine className="popup-drop-down-icon"/>   
                </div>
               </div> 

                <div className="main_content_popup_div_skill_card">
                 <p for = "assessment_name" className="assessment_name_title"> Skills  </p>
                <div className="main_content_popup_skill_and_input">

                 <div className="main_content_popup_skill_card">
                    <div className="main_content_popup_skills_added_card">
                       <span className="skills_of_candidate"> UI/UX and Design <RxCross2 className="popup_cross_icon_1"/></span>
                    </div>
                    <div className="main_content_popup_skills_added_card">
                     <span className="skills_of_candidate"> No of questions <RxCross2 className="popup_cross_icon_1"/></span>
                   </div>
                   <div className="main_content_popup_skills_added_card">
                    <span className="skills_of_candidate"> Web development <RxCross2 className="popup_cross_icon_1"/></span>
                   </div>
                   <div className="main_content_popup_skills_added_card">
                   <span className="skills_of_candidate"> UI/UX and Design <RxCross2 className="popup_cross_icon_1"/></span>
                   </div>
                   <div className="main_content_popup_skills_added_card">
                   <span className="skills_of_candidate"> Web development <RxCross2 className="popup_cross_icon_1"/></span>
                   </div>
                   </div>

                    <input type="text" placeholder="Typehere" className="type_here_to_add_skills"/>
                  </div> 
             </div>
             <div className="main_content_popup_div_input_element">
                <label for = "assessment_name" className="assessment_name_title"> Duration of assessment </label>
                <input type="text" placeholder="HH : MM : SS" name = "assessment_name" id="assessment_name" className="assessment_name_div_input_box2"/>     
              </div>
         

         </div>
         { /* designing div for popup to add new assessment  - body section ends */}
         { /* designing div for popup to add new assessment  - footer section ends */}
            
            <div className="popup_save_button_div">
               <button className="save_assessment_details">Save</button>
            </div>
         { /* designing div for popup to add new assessment  - footer section ends */}

    </div>
  )
}

export default MainContentPopUp
