import ProjectsList from '../ProjectsList/ProjectsList'
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import arrow from "./arrow-bottom-right.svg"
import ContactLink from "../contact/contact-link"
import { useEffect } from 'react';

function ProjectSection () {
    const projects = [
        { name: 'About me Website', sub: 'Website', urlname: 'about-me' },
        { name: 'Vegan Cakes Online Shop', sub: 'Online Shop', urlname: 'vegan-cakes' },
        { name: 'Marta Cazalla Portfolio Web', sub: 'Portfolio Web', urlname: 'marta-portfolio' },
        { name: 'Sara Martínez Portfolio Web', sub: 'Portfolio Web', urlname: 'sara-portfolio' },
        { name: 'Architecture Web Redesign', sub: 'Web Redesign', urlname: 'architecture-redesign' },
      ];


      useEffect(() => {
    
        const link = document.querySelectorAll('.js-navigation__link');
        const linkText = document.querySelectorAll('.js-navigation__text');
        const linkHoverReveal = document.querySelectorAll('.js-hover-reveal');
        const linkImages = document.querySelectorAll('.js-hover-reveal__img');
        
        for(let i = 0; i < link.length; i++) {
          link[i].addEventListener('mousemove', (e) => {
            link[i].style.zIndex = 9;
            linkText[i].style.zIndex = 9;
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translatex(-200%) translatey(-70%) rotate(0deg)`;
            linkImages[i].style.transform = 'scale(1)';
            console.log(linkHoverReveal[i])
          })
          
          link[i].addEventListener('mouseleave', (e) => {
            link[i].style.zIndex = 0;
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translatex(-200%) translatey(-70%) rotate(0deg)`;
            linkImages[i].style.transform = 'scale(1)';
          })
        }
      }, [])






    return <>
    <section className='cursor-green'>
    <Header></Header>
    <section className="section-projects-container">
        <h1 className='section-projects-title'>Projects 
            <img className='section-projects-arrow' src={arrow} alt="" />
        </h1>

        <section className="landing__projects-section">
       
            { 
            projects.map((project) => 
            <Link to={`/projects/${project.urlname}/ux`}>
                <ProjectsList
                name={project.name}
                url={project.url}>
                </ProjectsList>        
            </Link>)
            }

        </section>


        {/* trampa */}

        <section className="landing__projects-section">

        <Link to={`/projects/about-me/ux`}>
            <div className="projects-list">
                <div className="projects-list__container">
                    <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                        <h3 mouseMove className="list-project__name ">
                            * About me Website
                        </h3> 

                        <div className="hover-reveal js-hover-reveal">
                        <div className="hover-reveal__inner">
                            <div className="hover-reveal__img hover-reveal__img--01 js-hover-reveal__img"></div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </Link>

        <Link to={`/projects/vegan-cakes/ux`}>
        <div className="projects-list">
          <div className="projects-list__container">
            <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                  <h3 mouseMove className="list-project__name ">
                    * Vegan Cakes Online Shop
                  </h3> 

                <div className="hover-reveal js-hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img hover-reveal__img--02 js-hover-reveal__img"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </Link>


        <Link to={`/projects/marta-portfolio/`}>
            <div className="projects-list">
            <div className="projects-list__container">
                <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                    <h3 mouseMove className="list-project__name ">
                        * Marta Cazalla Portfolio Web
                    </h3> 

                    <div className="hover-reveal js-hover-reveal">
                    <div className="hover-reveal__inner">
                        <div className="hover-reveal__img hover-reveal__img--03 js-hover-reveal__img"></div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </Link>
        <Link to={`/projects/sara-portfolio/`}>
        <div className="projects-list">
          <div className="projects-list__container">
            <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                  <h3 mouseMove className="list-project__name ">
                    * Sara Martínez Portfolio Web
                  </h3> 

                <div className="hover-reveal js-hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img hover-reveal__img--04 js-hover-reveal__img"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </Link>
        <Link to={`/projects/architecture-redesign`}>
            
        <div className="projects-list">
          <div className="projects-list__container">
            <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                  <h3 mouseMove className="list-project__name ">
                    * Architecture Web Redesign
                  </h3> 

                <div className="hover-reveal js-hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img hover-reveal__img--05 js-hover-reveal__img"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </Link>


        </section>
         
{/* trampa */}




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