import './Sliderboxstyle.css';
import $ from "jquery"
import ContactLink from '../../contact/contact-link';
import { Link } from "react-router-dom";
import { useState } from 'react';
import arrowslider from './arrowslider.svg'
function Sliderbox () {


  // HTML Less JSResult Skip Results Iframe
/**
 * Small animation function to create basic animations with setInterval
 */

// If the browser is ready start the function
window.onload = function () {
  //Select the container in which the animation will be played
  let node_copy = document.getElementById('youreOfflineAnimation');

  //Your animation frames, frame by frame.
  //Feel free to add or delete frames, to see what happens ;)    
  let asciiFrames = [
          
           '˚♡ \xa0',
           '\xa0 ♡ ﾟ', 
           '\xa0 ♡ ﾟ', 
           '\xa0 ⠀⠀˚♡ ',
           '\xa0 ⠀⠀˚♡ ',
           '\xa0⠀⠀⠀♡ ﾟ',
           '\xa0⠀⠀⠀♡ ﾟ',
           '\xa0⠀⠀⠀⠀˚♡ ﾟ',
           '\xa0⠀⠀⠀⠀˚♡ ﾟ',
           '⠀⠀⠀⠀✧ ﾟ',
           '⠀⠀⠀⠀˚⊹ ',
           '⠀⠀⠀⠀˚ ',
           '⠀⠀⠀♡⊹',
           '⠀⠀ ♡⊹',
           '⠀⊹',
           '⊹',
           '',
           '♡',
           '♡',
           '˚ \xa0',
           '˚⊹ \xa0',
           '˚✧ \xa0',
           '˚♡ \xa0',



          ];
  
  
  
  var animateASCII = {
   init: function(frames, target){
     //Set the start frame to 0
     let i = 0;     
      //Puts the start frame insight the node_copy container   
      node_copy.innerText = frames[0];
      //Starts the intervall to render the animnation     
      setInterval(() => {
        //Puts the new frame in the node_copy container  
        node_copy.innerText = frames[i];
        /*Goes to the next array element (frame), and set it to 
          zero if we reached the last frame to restart the animation*/
        if (i < frames.length-1) {
          i++;
        } else {
          i = 0;
        }
      //Here you can adjust the animation speed
      }, 150);
   }
  };
  
  //Starts the ASCII function
  animateASCII.init(asciiFrames,node_copy); 
} 







  // asci

  let [activeClass2, setActiveClass2] = useState('');
  const rotateArrow = () => {
    setActiveClass2(activeClass2 === 'rotateb' ? 'rotatec' : 'rotateb');
  }

  let [activeClass, setActiveClass] = useState('');
  const showContent = () => {
    setActiveClass(activeClass === 'activeb' ? 'activec' : 'activeb');
    console.log (rotateArrow);
  }



  function todos(){
    showContent();
    rotateArrow();
}

    return (
      <>

        <div className='sliders__container'>
          <Link to={`/cv`} className="sliderbox_container sliderbox1 bordersolid">
              <div className="sliderbox_content downloadcv"> 
              
                  <div title="ascii bunny" className="cv-bunny">
                      ⠀/)   /) <br />
                      ( ᵔ ᵕ ᵔ ) <br />
                      / づ  づ ~ 
                  </div> 
                  <div className='animationascii' id="youreOfflineAnimation"></div>  
                  <a >
                    <span className='download-cv'> See my cv!</span>
                  </a>
              </div>
          </Link>

          <div onClick={todos} className="sliderbox_container getknowme bordersolid">
          {/* 1 */}
            <div className="sliderbox_content">                
                GET TO KNOW ME, <br /> SKILLS AND JOB TOOLS    
            </div>
            
          {/* 2 */}
            <div className='arrowandhr'>
              <hr className='arrowhr' />
              <img className={'arrowslider ' + activeClass2} src={arrowslider} alt="arrow" /></div>
            </div>

          {/* 3 */}
            <div className={'acordeon-container div ' + activeClass}>
              <p className='acordeon-text'>
              Hi! My name is Maria, a creative UI & UX designer and frontend developer.
              I always seek to find an innovative, scalable and impactful solution.
              In this portfolio you can check some of the projects I've made throughout the year.
              This portfolio was made with React.js and designed with Figma. 
                <br />
                <a className='linkrrss' href="https://github.com/marialara1" target="_blank">[Github link]</a>
                <br />
                <a className='linkrrss' href="https://codepen.io/marialara1/" target="_blank">[Codepen link]</a>
              </p>
              <div className='acordeon-footer '>
                <ContactLink></ContactLink>
                <Link to={`/about-me`}> 
                  <span className='acordeon__know-more'> 
                    know more! 
                      <svg className='acordeon__arrow' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19.7843L16.6414 3.14286H6.28571V0H22V15.7143H18.8571V5.35857L2.21571 22L0 19.7843Z" fill="black"/>
                      </svg>
                  </span>
                </Link> 
              </div>
            </div>
            
        </div>
      
      </>
    );
  }
  
  export default Sliderbox ;

