import './App.css';
import {isMobile} from 'react-device-detect';
import AppDesktop from './desktop/AppDesktop.js';
import AppMobile from './mobile/AppMobile.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
   // condition to check whether you are on mobile screen , yes then  show mobile screen content
  if(isMobile) {
    return (
       <Routes>
         <Route exact path='/mobile' element={< AppMobile />}></Route>
       </Routes> 
      )
  }
    // condition to check whether you are on desktop size screen , yes then  show mobile desktop screen content
return (
        <Routes>
        <Route exact path='/' element={< AppDesktop />}></Route>
        </Routes>
    
   );
}

export default App;

