import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Aboutme from './pages/Aboutme/Aboutme';
import ProjectSection from './components/ProjectSection/ProjectSection';
import { Route, Routes} from 'react-router-dom';

import CV from "./components/Home/Sliderbox/Cv"
// projects
import AboutmeProject from './projects/AboutmeProject';
  import AbmeUX from './projects/abme/AbmeUX'
  import AbmeFR from './projects/abme/AbmeFR'

import CakesProject from './projects/CakesProject';
import CakesFR from './projects/cakes/CakesFR';
import MartaProject from './projects/MartaProject';
import SaraProject from './projects/SaraProject';
import ArchitectureProject from './projects/ArchitectureProject';

// import TemplateProject from './templateproject/TemplateProject';


function App() {

  return (
  <> 

    <main>
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/cv" element={<CV/>}></Route>
  
{/* projects routes */}
    
      <Route path="/projects" element={<ProjectSection/>}></Route>
   
      <Route path="/projects/about-me/ux" element={<AboutmeProject/>}> 
      </Route>
      <Route path="/projects/about-me/front" element={<AbmeFR/>}>  </Route>

      <Route path="/projects/vegan-cakes/ux" element={<CakesProject/>}>  </Route>
      <Route path="/projects/vegan-cakes/front" element={<CakesFR/>}>  </Route>

        {/* <Route path="/projects/about-me/front" element={<AbmeFR/>}> </Route> */}


      <Route path="/projects/vegan-cakes" element={<CakesProject/>}> </Route>
      <Route path="/projects/marta-portfolio/ux" element={<MartaProject/>}> </Route>
      <Route path="/projects/sara-portfolio/ux" element={<SaraProject/>}> </Route>
      <Route path="/projects/architecture-redesign/ux" element={<ArchitectureProject/>}> </Route>


{/* pages */}
    
      <Route path="/about-me" element={<Aboutme/>}></Route>
    
  
    </Routes>
	</main>
  </>
  
  );
}

export default App;
