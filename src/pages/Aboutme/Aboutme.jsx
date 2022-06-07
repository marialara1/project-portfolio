import Header from "../../components/Header/Header"
import pic from "./me-pic.jpg"
import './Aboutme.css';
import Contact from "../../components/contact/contact-link"


function Aboutme () {
    return <>
    <Header></Header>
        <section className="about-me__section">
            <div className="about-me__pic-section">
                <img className="me-pic" src={pic} alt="picture of me" />

                <div className="contact-cv__container">
                    <Contact></Contact>
                    <a className="" href="">cv</a>
                </div>
            </div>

            <div className="about-me__text-section">
                <h1 className="about-me__section-title">
                    Hello there! Here’s some info 
                     about me <br /> („• ᵕ •„)
                </h1>
                <div className="aboutme-text">
                    <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. 
                    </p>
                    <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. 
                    </p>
                    <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. 
                    </p>
                    <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. 
                    </p>
                </div>
            </div>
    </section>
</>
}

export default Aboutme;