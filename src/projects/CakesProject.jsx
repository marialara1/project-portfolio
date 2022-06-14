import Header from "../components/Header/Header"
import { useState } from "react";

import CakesUX from "./cakes/CakesUX"
import CakesFR from "./cakes/CakesFR"

import { Link } from "react-router-dom";
import arrow from './arrow-top.svg'


import mock1 from './cakes/mock1.png'
import mock2 from './cakes/mock2.png'
import mock3 from './cakes/mock3.png'
import mock4 from './cakes/mock4.png'
import mock5 from './cakes/mock5.png'

import Footer from '../components/footer/Footer'


function CakesProject () {


    return <>
    <Header></Header>
        <section className="cursor-normal">
    {/* template */}

    <section className="projectHeader">
        <span className="projectTitle">
            <h1>Vegan Cakes</h1>
            <h2> 
                <a target="_blank" href="https://frontend.esatid3-2021.com/maria/aboutme/">
                    Online Shop
                    <img className="arrow-link" src={arrow} alt="" />
                </a>
            </h2>
        </span>

        <img className="frontpic" src={mock2} alt="" />

        {/* buttons */}

        <div className="projectButtons-container">
            <Link to={`/projects/vegan-cakes/ux`}> 
                <button className="projectButton ux-button active">  UX/UI </button>
            </Link>
            <Link to={`/projects/vegan-cakes/front`}> 
                <button className="projectButton front-button inactive">  FRONTEND </button> 
            </Link> 
        </div> 
    </section>



{/* UX */}
<CakesUX></CakesUX>




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

export default CakesProject;
