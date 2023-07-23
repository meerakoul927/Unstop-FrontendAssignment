import React from 'react';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import './AppDesktop.css';

const AppDesktop = () => {

  return (
    // starting with the designing of desktop screen
    <div className="desktop_main_screen">
         <div className="desktop_divider_screen">
          <SideBar/>
          <MainContent/>
         </div>
              
    </div>
  )
}

export default AppDesktop;
  