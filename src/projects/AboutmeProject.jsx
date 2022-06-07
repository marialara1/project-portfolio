import { Link } from "react-router-dom";



import AbmeUX from './abme/AbmeUX'
import AbmeFR from './abme/AbmeFR'
import abmepic from './abme/abmepic.png'
import './projectcss.css';

import mock1 from './abme/mock1.png'
import mock2 from './abme/mock2.png'
import mock3 from './abme/mock3.png'
import mock4 from './abme/mock4.png'

import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header"
import arrow from './arrow-top.svg'

function AboutmeProject () {

// cursor->

//     var btn = document.querySelector('.mouse-cursor-gradient-tracking')
// btn.onmousemove = function(e) {
//   var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
//   var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
//   btn.style.setProperty('--x', x + 'px')
//   btn.style.setProperty('--y', y + 'px')
// }


    return <>


{/* HEADER */}

<Header></Header>

<section className="cursor-normal">
    {/* template */}

    <section className="projectHeader">
        <span className="projectTitle">
            <h1>About me</h1>
            <h2> 
                <a target="_blank" href="https://frontend.esatid3-2021.com/maria/aboutme/">
                    Website
                    <img className="arrow-link" src={arrow} alt="" />
                </a>
            </h2>
        </span>

        <img className="frontpic" src={abmepic} alt="" />

        {/* buttons */}

        <div className="projectButtons-container">
            <Link to={`/projects/about-me/ux`}> 
                <button className="projectButton ux-button active">  UX/UI </button>
            </Link>
            <Link to={`/projects/about-me/front`}> 
                <button className="projectButton front-button inactive">  FRONTEND </button> 
            </Link> 
        </div>
    </section>



{/* UX */}
<AbmeUX></AbmeUX>




    {/* MOCKS */}

    <section className="mockups-section">
            <h4>Final Results</h4>
            <div  className="mockups-container mouse-cursor-gradient-tracking">
                <img className="mockup" src={mock1} alt="mockup from about me project" />
                <img className="mockup" src={mock2} alt="mockup from about me project" />
                <img className="mockup" src={mock3} alt="mockup from about me project" />
                <img className="mockup" src={mock4} alt="mockup from about me project" />
            </div>
        </section> 




{/* FOOTER */}
<Footer></Footer>


</section>
     </>
}

export default AboutmeProject;
