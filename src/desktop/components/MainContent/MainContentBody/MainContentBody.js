import React from 'react';
import './MainContentBody.css';
import { MdOutlineViewAgenda } from 'react-icons/md';
import { MdOutlineGroup } from 'react-icons/md';
import { TiSocialDribbble } from 'react-icons/ti';
import { MdOutlineAttachment } from 'react-icons/md';

const MainContentBody = () => {
  return (
    <div className="main_content_body">
        <div>
          <p className="main_content_body_title">Assessments Overview</p>
        </div>
        <div className="main_content_body_content">  
          { /*  Total assessment div  */}
             <div className="main_content_body_assessment">
                   <p className = "main_content_body_assessment_title"> Total Assessment </p>
                   <div className="main_content_body_assessment_count">
                     <div className="main_content_body_assessment_equals_icon" >
                       <MdOutlineViewAgenda className="main_content_assessment_count_icon" />
                     </div> 
                      <span className="main_content_body_count_value">34</span>
                   </div>
              </div>
               { /*  Total assessment div ends  */}

             { /*  Total candidates div  starts */}   

             <div className="main_content_body_candidates">
                <p className="main_content_candidates_title"> Candidates </p>
                { /* div for  count number of candidates who sit fot the interview starts  */}
                <div className="main_content_candidates_count_and_attempted">

                    <div className="main_content_candidates_count_and_attempted_group_icon"> 
                       <MdOutlineGroup className="group-icon" />
                      </div> 

                       <div className="main_content_candidates_total_candidates">
                              <p className="main_content_candidates_count">11,145  
                               <span className="main_content_candidates_count_still">+89</span>
                               <br/>
                               <span className="main_content_candidates_count_description">
                                Total Candidates
                               </span> 
                              </p>
                       </div>
                        { /* div for  count number of candidates who sit for the interview ends  */}
  
                         { /* div for  count number of candidates and the those who attempted  starts */}
                       <div className = "main_content_candidates_line_height"></div>

                             <p className="main_content_candidates_count">1,14 
                               <span className="main_content_candidates_count_still">+89</span>
                               <br/>
                               <span className="main_content_candidates_count_description">
                                 Who Attempted
                               </span> 
                              </p>


                   </div>
              { /* div for  count number of candidates and the those who attempted  ends*/}  
           </div>
             { /*  Total candidates div ends  */}  
             
             { /*  Candidates source div start  */}  
                    <div className="main_content_candidate_source">
                        <p className="main_content_candidates_title"> Candidates Source</p>
                       
                        <div className="main_content_candidate_social_source">

                        <div className="main_content_body_candidate_source_social_icon" >
                           <TiSocialDribbble className="main_content_candidate_source_icon" />
                        </div> 

                         <div className="main_content_candidate_source_count">
                                <div>
                                  <span className="main_content_candidate_source_number"> 11,000
                                  <span className="main_content_candidate_source_count_still">+89</span>
                                 </span>
                                 </div>
                                 <span className="candidate_source">Email</span>
                        </div>
                              <div className="main_content_candidate_source_count">
                                    <div>
                                      <span className="main_content_candidate_source_number"> 145
                                      <span className="main_content_candidate_source_count_still">+89</span>
                                    </span>
                                    </div>
                                    <span className="candidate_source">Social Share</span>
                            </div>

                            <div className="main_content_candidate_unique_source_count">
                              <div>
                                <span className="main_content_candidate_source_number"> 145
                                <span className="main_content_candidate_source_count_still">+89</span>
                              </span>
                              </div>
                              <span className="candidate_source">Unique Link</span>
                          </div>
                      </div>
                  </div>
              { /*  Candidates source div ends  */}  
               { /*  Total purpose of assessments div starts  */}
                    <div className="main_content_total_purpose">
                    
                     <p className="main_content_candidates_title"> Total Purpose </p>
                     <div className="main_content_body_assessment_count">
                     <div className="main_content_body_assessment_equals_icon" >
                       <MdOutlineAttachment className="main_content_assessment_count_icon" />
                     </div> 
                      <span className="main_content_body_count_value">11</span>
                   </div>
                    
                    </div>

               { /*  Total purpose of assessments div ends  */}

        
             

         </div>
        
    </div>
  )
  
}

export default MainContentBody;
