import ProjectsList from '../ProjectsList/ProjectsList'
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import arrow from "./arrow-bottom-right.svg"
import ContactLink from "../contact/contact-link"

function ProjectSection () {
    const projects = [
        { name: 'About me Website', sub: 'Website', urlname: 'about-me' },
        { name: 'Vegan Cakes Online Shop', sub: 'Online Shop', urlname: 'vegan-cakes' },
        { name: 'Marta Cazalla Portfolio Web', sub: 'Portfolio Web', urlname: 'marta-portfolio' },
        { name: 'Sara Martínez Portfolio Web', sub: 'Portfolio Web', urlname: 'sara-portfolio' },
        { name: 'Architecture Web Redesign', sub: 'Web Redesign', urlname: 'architecture-redesign' },
      ];

      
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