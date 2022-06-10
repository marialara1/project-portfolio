import ProjectsList from '../ProjectsList/ProjectsList'
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import arrow from "./arrow-bottom-right.svg"
import ContactLink from "../contact/contact-link"

import mock1 from "./mockhover1.png"
import mock2 from "./mockhover2.png"
import mock3 from "./mockhover3.png"

import React, { useState, useEffect } from "react";
import Animation from "../ProjectSection/Animation"


function ProjectSection () {
    const projects = [
      { name: 'Marta Cazalla Portfolio Web', sub: 'Portfolio Web', urlname: 'marta-portfolio', img: mock3 },
      { name: 'Vegan Cakes Online Shop', sub: 'Online Shop', urlname: 'vegan-cakes', img: mock2},
      { name: 'About me Website', sub: 'Website', urlname: 'about-me', img: mock1},


        // { name: 'Sara Martínez Portfolio Web', sub: 'Portfolio Web', urlname: 'sara-portfolio' },
        // { name: 'Architecture Web Redesign', sub: 'Web Redesign', urlname: 'architecture-redesign' },
      ];

      const [position, setPosition] = useState({
        x: "",
        y: "",
      });
    
      const handleMouseMove = (e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
    
      useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);


    return <>

    <section className='cursor-green'>
    <Header></Header>
    <section className="section-projects-container">
        <h1 className='section-projects-title'>
            Projects 
            <img className='section-projects-arrow' src={arrow} alt="arrow" />
        </h1>

        <section className="landing__projects-section">
            { 
            projects.map((project) => 
            <Link to={`/projects/${project.urlname}/ux`}>
                <Animation
                name={project.name}
                img={project.img}
                >
                </Animation>        
            </Link>)
            }
        </section>

    </section>
    <div className='footer__projects'>
        <div className="contact-link__projects">
            <ContactLink></ContactLink>
        </div>
        <div className="about-link__projects">
            <Link to={`/about-me`}> about </Link>
        </div>
    </div>


</section>
    </>
}

export default ProjectSection;