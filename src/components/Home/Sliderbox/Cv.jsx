import cv from "./__maria-laraCV-SVG.svg"
import Header from "../../Header/Header"
import arrowdw from "./arrow-collapse-down.svg"
function Cv() {

    return (
    <> 
    <div className="bg-black">
    <Header></Header>
    <section className="cv-section">
        <img className="cv-img" src={cv} alt="cv image" />
        <button download="__maria-lara-CV.pdf" className="cv-button"> 
        download
        <img src={arrowdw} alt="arrow" />
        </button>
    </section>
    </div>
    </>
    
    );
  }
  
  export default Cv;
  