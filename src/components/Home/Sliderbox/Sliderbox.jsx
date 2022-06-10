import './Sliderboxstyle.css';
import $ from "jquery"
import ContactLink from '../../contact/contact-link';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Sliderbox () {

  let [activeClass, setActiveClass] = useState('');

  const showContent = () => {
    setActiveClass(activeClass === 'activeb' ? '' : 'activeb');
  }

    return (
      <>

        <div className='sliders__container'>
          
            <Link to={`/cv`} className="sliderbox_container sliderbox1 bordersolid">
                <div className="sliderbox_content downloadcv">   

                    <div title="ascii bunny" className="cv-bunny">
                       ⠀/)   /) <br />
                        ( ᵔ ᵕ ᵔ ) <br />
                        / づ  づ ~ ♡
                    </div> 
                    <a >
                      <span className='download-cv'> Download my cv!</span>
                    </a>

                </div>
             

            </Link>
 
          
            <div onClick={showContent} className="sliderbox_container getknowme bordersolid button">


                <div className="sliderbox_content">    
                GET TO KNOW ME, <br /> SKILLS AND JOB TOOLS    
                </div>
            </div>



            <div className={'acordeon-container div ' + activeClass}>
              <p className='acordeon-text'>
              Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff you call this cat food claw drapes. Scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in annoy the old grumpy cat, start a fight and then retreat to wash when i lose.
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

