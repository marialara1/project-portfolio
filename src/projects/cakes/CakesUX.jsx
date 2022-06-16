import wireframes from './wireframes.png'
import color from './color.svg'
import typo from './typo.svg'
import components from './components.svg'
import purchase from './purchase.svg'


function CakesUX () {


    return <>
            <div className="tools">
            <span className="span-title">TOOLS</span>
            <h3>[FIGMA] [ADOBE ILLUSTRATOR] [ADOBE PHOTOSHOP]</h3>
        </div>


    <section className='section-category'>

        <div className='section-category_head'>
                <div className="challenge">
                    <span className="span-title">Challenge</span>
                    <p>
                    Candy canes gummies marzipan gummies lemon drops. Topping macaroon macaroon sweet cheesecake. Oat cake marshmallow carrot cake pie pie soufflé tootsie roll halvah. Dessert gummi bears sugar plum dragée jelly beans tart toffee biscuit.
                    </p>
                </div>

                <div className="goals">
                    <span className="span-title">Goals</span>
                    <ol>
                    <li>Build a scalable online shop</li>
                    <li>Ensure that it stands out from other vegan cakes websites</li>
                    <li>Create a mobile-first website, responsive on all devices.</li>
                    </ol>
                </div>
        </div>


        <div className="section__item">
            <span className="span-title">User Persona</span>
            <p>Candy canes gummies marzipan gummies lemon drops. Topping macaroon macaroon sweet cheesecake. Oat cake marshmallow carrot cake pie pie soufflé tootsie roll halvah. Dessert gummi bears sugar plum dragée jelly beans tart toffee biscuit.           estar interesadas en contratar mis servicios como ux/ui o frontend y quieran conocerme de manera más personal, o mi trayectoria. Son personas que se dedican a profesiones en tech o diseño</p>
        </div>

        <div className="section__item purchaseflow group">
            <span className="span-title">Purchase flow</span>
            <img className="color" src={purchase} alt="color scheme from about me project" />
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

            <p> Candy canes gummies marzipan gummies lemon drops. Topping macaroon macaroon sweet cheesecake. Oat cake marshmallow carrot cake pie pie soufflé tootsie roll halvah. Dessert gummi bears sugar plum dragée jelly beans tart toffee biscuit. </p>
        </div>
        
        {/* <div className="section__item section__item-details ">
            <span className="span-title">Adding some details</span>
            <div className='details'>
                <div className='section__item-content'>
                    <p>SVG SVG illustration made with Figma. Quería poner una ilustración que hice con Figmafuera como yo en el aboutme transmite simpatia. El SVG es un tipo de archivo que sirve para tal ocupa menos espacio tal.</p>
                    <p>DARKMODE El darkmode me parecía importante usarlo ya que los usuarios a los que va dirigido a menudo tienen activado el darkmode en sus ordenadores ya que trabajan mucho tiempo delante de una pantalla, y el tener la opción de darkmode facilitaría y haría más agradable la visita del usuario por mi web.</p>
                </div>
                
            </div>
        </div> */}
        
    </section>
    </>
    }

export default CakesUX;
