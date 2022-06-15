import Header from "../components/Header/Header"
import arrow from './arrow-top.svg'
import { Link } from "react-router-dom";
import mockmarta from './mockupmarta.png'

function MartaProject () {
    return <>
      <Header></Header>

{/* template */}

    <section className="projectHeader">
        <span className="projectTitle">
            <h1>Marta Cazalla</h1>
            <h2> 
                <a target="_blank" href="https://frontend.esatid3-2021.com/maria/aboutme/">
                    Portfolio Web
                    <img className="arrow-link" src={arrow} alt="arrow" />
                </a>
            </h2>
        </span>

        <img className="frontpic" src={mockmarta} alt="project mockup" />

        {/* buttons */}

        <div className="projectButtons-container">
            <Link to={`/projects/vegan-cakes/front`}> 
                <button className="projectButton front-button active">  FRONTEND </button> 
            </Link> 
        </div>
 </section>

 <div className="tools">
            <span className="span-title">TOOLS</span>
            <h3>[PHP] [SCSS] [WORDPRESS] [JS]</h3>
        </div>
    </>
}

export default MartaProject;
