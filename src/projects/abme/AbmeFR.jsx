import { Link } from "react-router-dom";
import abmepic from '../abme/abmepic.png'
import arrow from '../arrow-top.svg'

import Header from "../../components/Header/Header"

import mock1 from '../abme/mock1.png'
import mock2 from '../abme/mock2.png'
import mock3 from '../abme/mock3.png'
import mock4 from '../abme/mock4.png'

import Footer from "../../components/footer/Footer";

import Github from "../../components/github/Github"

function AbmeFR () {
    return <>

<section className="cursor-normal">

    {/* Header */}
        <Header></Header>

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
                <button className="projectButton ux-button inactive">  UX/UI </button>
            </Link>
            <Link to={`/projects/about-me/front`}> 
                <button className="projectButton front-button active">  FRONTEND </button> 
            </Link> 
        </div>

    </section>

    
{/* contenido frontend */}
    <div className="tools">
            <span className="span-title">TOOLS</span>
            <h3>[HTML] [CSS] [JS]</h3>
        </div>

        <section className='section-category'>
        <div className="one">
            <span className="span-title">Challenge</span>
            <p>
                The challenge of this project was doing my first  website, from the design to the code. 
                Tenía que ser una one-page web donde hablara sobre mí y tuviera un formulario de contacto
                para que el usuario pudiera contactar conmigo.
            </p>
        </div>

        <div className="two">
            <span className="span-title">Goals</span>
            <ol>
                <li>Build a one-page web about me</li>
                <li>Ensure that it stands out from other about-me websites</li>
                <li>Create a mobile-first website, responsive on all devices.</li>
            </ol>
        </div>
        </section>
<a href="https://github.com/marialara1/project-beta-cakes" target="_blank">
<Github></Github>

</a>

        {/* MOCKUPS */}

    <section className="mockups-section">
        <h4>Final Results</h4>
        <div  className="mockups-container">
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

export default AbmeFR;