import './Landing.css';
import Cta from '../Cta/Cta';
import { Link } from "react-router-dom";
import stars from './stars.png'

function Landing () {
    
    return <section className="landing-container">
        
        <img className="stars" src={stars} alt="stars drawing" />
        <br />

        {/* <span className="landing-p"> 
            I’m  
            <Link to={`/about-me`}> 
                <h1 className='marialara'>
                    Maria Lara
                </h1>  
            </Link> 
            * an 
            <h2 className='uxdev'>
                ux/ui developer
            </h2>  
            <br />
            and designer based in Spain.
        </span> */}


        <span className='landing-text'>
            I'm
            <Link to={`/about-me`}> 
                <h1 className='marialara hover'>
                    Maria Lara
                </h1> 
               * an
                <h2 className='uxui'>
                    ux/ui developer <br />
                    and designer.
                </h2>
            </Link> 

            Let’s talk about your project <br className='brlanding' />
             by <a className='landing-email hover' href = "mailto: lara.maria.mail@gmail.com">email</a> , 
            I'd love to connect!
        </span>


        <div className='cta-container'>
            <Link to={`/projects`}> 
            <Cta></Cta>
            </Link>
        </div>

    </section>


}

export default Landing;