import React from 'react'
import './MainContentFooter.css';
import { FiPlus }  from 'react-icons/fi';
import { BsFillEnvelopeHeartFill } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { BiCalendar } from 'react-icons/bi';
import { TiAttachment } from 'react-icons/ti';
import { useState } from 'react';

const MainContentFooter = (props) => {
 
   const [flag , setFlag ] = useState(false);
   function showPopUp(){
    if(!flag){ 
       setFlag(!flag);
      props.newAssessmentPopUp("true");
    } 
    else{
      setFlag(!flag);
      props.newAssessmentPopUp("false");
    }
       
   }
  
  return (
    // design of footer section of main content in desktop UI

    <div className="main_content_footer">
         {/* Heading section of footer componenet */}
         <div className="main_content_footer_title_div">
              <p className="main_content_footer_title">My Assessments</p>
         </div>
                {/* Footer section cards  div starts  */}
         <div className="main_content_footer_cards">
             {/* Footer section card to add new assessment   */}
             <div className="main_content_footer_card_new_assessment">
                  <div className="main_content_footer_card_new_assessment_plus_icon" >
                        <FiPlus className="new_assessment_icon" onClick={showPopUp} 
                       />
                  </div>
                 <div className="main_content_footer_card_new_assessment_description">
                  <span className="main_content_footer_card_new_assessment_title"> New Assessment </span>
                  <br/>
                  <span className="main_content_footer_card_title2">From here you can add questions of multiple types like MCQs subjective(text or paragraph)! </span>
                </div>  
              </div>

                {/* Footer section card of new assessment added  */}
                <div className="main_content_footer_card_new_assessment_added">
                {/* Footer section card of new assessment added  header*/}
                 
                <div className="main_content_footer_card_header">
                 <div className="main_content_footer_new_assessment_icon">
                   <BsFillEnvelopeHeartFill className="new_assessment_icon"/> 
                 </div>
                 <PiDotsThreeOutlineVerticalFill  className="dot_assessment_icon"/>
                </div> 
               {/* Footer section card of new assessment added  header ends*/}  

                {/* Footer section card of new assessment added  body starts*/}  
                 <div className="main_content_footer_new_assessment_body">
                      <span className="main_content_footer_new_assessment_name">Math Assessment</span>
                       <span className="main_content_footer_new_assessment_body_section">
                          <span className="main_content_footer_new_assessment_title">Job</span>
                          <span className="main_content_footer_new_assessment_date">
                          <BiCalendar className="main_content_footer_new_assessment_date_icon"/>
                           <span className="main_content_footer_new_assessment_date"> 20 Apr 2023 </span> 
                        </span>
                      </span>
                  </div>
                  {/* Footer section card of new assessment added  body ends*/}  
                       {/* Footer section card of new assessment added  horizontal line starts*/}  
                        <div className="main_content_footer_new_assessment_body_line_break"/>
                       {/* Footer section card of new assessment added  horizontal line ends*/}  
                    {/* Footer section card of new assessment added  footer  starts*/}  
                       <div className="main_content_new_assessment_footer">

                             <div className="main_content_new_assessment_duration_questions">
                                    <div className="main_content_new_assessment_duration">
                                       <span className="main_content_new_assessment_duration_time">00</span>
                                       <span className="main_content_new_assessment_duration_description">Duration</span>
                                    </div>
                                    <div className="main_content_new_assessment_duration">
                                      <span className="main_content_new_assessment_duration_time">00</span>
                                      <span className="main_content_new_assessment_duration_description">Questions</span>
                                    </div>
                             </div>


                             <div className="main_content_new_assessment_share_profile">
                                         <button className="main_content_assessment_share_profile_button"> 
                                          <TiAttachment className="assessment_attachement_icon"/>
                                            <span className="assessment_attachement_share_description">  Share </span>
                                         </button>

                                         <div className="main_content_assessment_share_profile_person">
                                              <p className="main_content_assessment">LP</p>
                                         </div>

                             </div>
                          
                       
                       </div>
                    {/* Footer section card of new assessment added  footer  ends*/}  
               </div>


                              {/* Footer section card of new assessment added  */}
                <div className="main_content_footer_card_new_assessment_added">
                {/* Footer section card of new assessment added  header*/}
                 
                <div className="main_content_footer_card_header">
                 <div className="main_content_footer_new_assessment_icon">
                   <BsFillEnvelopeHeartFill className="new_assessment_icon"/> 
                 </div>
                 <PiDotsThreeOutlineVerticalFill  className="dot_assessment_icon"/>
                </div> 
               {/* Footer section card of new assessment added  header ends*/}  

                {/* Footer section card of new assessment added  body starts*/}  
                 <div className="main_content_footer_new_assessment_body">
                      <span className="main_content_footer_new_assessment_name">Math Assessment</span>
                       <span className="main_content_footer_new_assessment_body_section">
                          <span className="main_content_footer_new_assessment_title">Job</span>
                          <span className="main_content_footer_new_assessment_date">
                          <BiCalendar className="main_content_footer_new_assessment_date_icon"/>
                           <span className="main_content_footer_new_assessment_date"> 20 Apr 2023 </span> 
                        </span>
                      </span>
                  </div>
                  {/* Footer section card of new assessment added  body ends*/}  
                       {/* Footer section card of new assessment added  horizontal line starts*/}  
                        <div className="main_content_footer_new_assessment_body_line_break"/>
                       {/* Footer section card of new assessment added  horizontal line ends*/}  
                    {/* Footer section card of new assessment added  footer  starts*/}  
                       <div className="main_content_new_assessment_footer">

                             <div className="main_content_new_assessment_duration_questions">
                                    <div className="main_content_new_assessment_duration">
                                       <span className="main_content_new_assessment_duration_time">00</span>
                                       <span className="main_content_new_assessment_duration_description">Duration</span>
                                    </div>
                                    <div className="main_content_new_assessment_duration">
                                      <span className="main_content_new_assessment_duration_time">00</span>
                                      <span className="main_content_new_assessment_duration_description">Questions</span>
                                    </div>
                             </div>


                             <div className="main_content_new_assessment_share_profile">
                                         <button className="main_content_assessment_share_profile_button"> 
                                          <TiAttachment className="assessment_attachement_icon"/>
                                            <span className="assessment_attachement_share_description">  Share </span>
                                         </button>

                                         <div className="main_content_assessment_share_profile_person">
                                              <p className="main_content_assessment_value">LP</p>
                                              <div className="main_content_assessment_share_profile_person2">
                                                <p className="main_content_assessment_value">L</p>
                                             </div>
                                         </div>

                             </div>
                          
                       
                       </div>
                    {/* Footer section card of new assessment added  footer  ends*/}  
               </div>



            </div>
    </div>
  )
}

export default MainContentFooter;
