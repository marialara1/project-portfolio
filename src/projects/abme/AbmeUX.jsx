import wireframes from './abme-wireframes.png'
import color from './abme-colors.svg'
import typo from './abme-typo.svg'
import components from './abme-components.svg'
import ilustration from './ilustracion.svg'
import AboutmeProject from '../AboutmeProject'

function AbmeUX () {


    return <>
    
    {/* <AboutmeProject></AboutmeProject> */}
        <div className="tools">
            <span className="span-title">TOOLS</span>
            <h3>[FIGMA] [ADOBE ILLUSTRATOR] [ADOBE PHOTOSHOP]</h3>
        </div>


    <section className='section-category'>

        <div className='section-category_head'>
                <div className="challenge">
                    <span className="span-title">Challenge</span>
                    <p>
                    The challenge of this project was doing my first website, from the design to the code. It had to be a one-page website where I talked about myself and had a contact form so that the user could contact me.
                    </p>
                </div>

                <div className="goals">
                    <span className="span-title">Goals</span>
                    <ol>
                        <li>Build a one-page web about me</li>
                        <li>Ensure that it stands out from other about-me websites</li>
                        <li>Create a mobile-first website, responsive on all devices.</li>
                    </ol>
                </div>
        </div>


        <div className="section__item">
            <span className="span-title">User Persona</span>
            <p>These users are potential people who may be interested in hiring my services as an ux/ui or frontend and want to get to know me more personally, or my career. 
                They're people who are dedicated to tech or design professions. </p>
        </div>

        <div className="section__item">
            <span className="span-title">Designing Solutions</span>
            <p>I compiled all the research about similar websites and current trends and started designing. I wanted to differentiate the landing page from the about me page and the contact page, so I designed the website horizontally, which you could move by pressing the home, about and contact inputs. That's how simple the userflow is, making it easy to navigate the web. I started designing in the mobile version to later do it on desktop and tablet.</p>
        </div>

        <div className="wireframes group">
            <span className="span-title">Wireframes</span>
            <img className="frontpic" src={wireframes} alt="wireframes from about me project" />
        </div>


        <div className="uxgroup">
            <div className="colorscheme group marginbottom">
                <span className="span-title">Color Scheme</span>
                <img className="color" src={color} alt="color scheme from about me project" />
            </div>
            <div className="typograph group marginbottom">
                <span className="span-title">Typography</span>
                <img className="typo" src={typo} alt="typography from about me project, sporting grotesque and open sans" />
            </div>
            <div className="components group marginbottom">
                <span className="span-title">Components</span>
                <img className="components" src={components} alt="components from about me project" />
            </div>

            {/* <p> I chose a neutral color palette and pink as the only main color, since pink represents me on a personal level, it conveys confidence, tranquility, creativity and security. Sporting Grotesque is such a characterful and topical font. The iconography with similar thicknesses and strokes so that there was coherence between them </p> */}
        </div>
        
        <div className="section__item section__item-details ">
            <span className="span-title">Adding some details</span>
            <div className='details'>
                <div className='section__item-content'>
                    <p>SVG illustration made with Figma. I wanted to use an illustration that I made with Figma which looked like me. As it is an svg it takes up less space than a normal png illustration, which helps the web to be more dynamic and fast.</p>
                    <p>The darkmode theme seemed important for me to use since the users to whom it is directed often have the darkmode theme activated on their devices, since they work a lot of time in front of a screen, and having the darkmode option would be more friendly for the user.</p>
                </div>
                <img className="ilustration-aboutme" src={ilustration} alt="illustration of me. It has a bunny hat on it." />
            </div>
        </div>
        
    </section>
</>
}

export default AbmeUX;