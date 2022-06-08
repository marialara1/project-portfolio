import Landing from './Landing/Landing';
import { Link } from "react-router-dom";
import './Home.css';
// import ProjectLanding from './ProjectsLanding/ProjectsLanding';
import Sliderbox from './Sliderbox/Sliderbox';

function Home () {

    // const projects = [
    //     { name: 'About me', sub: 'website', url: 'https://placekitten.com/200/300' },
    //     { name: 'Marta Portfolio', sub: 'website', url: 'https://placekitten.com/100/100' },
    //     { name: 'Vegan Cakes', sub: 'online shop', url: 'https://placekitten.com/200/200' },
    //     { name: 'Architecture', sub: 'web redesign', url: 'https://placekitten.com/400/400' },
    //   ];



    return  <>
    <section className="home-container">
    <Sliderbox></Sliderbox>
      <Landing></Landing>
        {/* <section className="landing__projects-section">
            { projects.map((project) => <ProjectLanding
              name={project.name}
              sub={project.sub}
              url={project.url}></ProjectLanding>)
            }
        </section>
         */}

    </section>
  
  </>

}

export default Home;