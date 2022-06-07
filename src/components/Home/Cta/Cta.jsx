import './Cta.css';

function Cta () {
    return <button className="cta-button" href=""> 
       <span className="cta-name">my projects</span>
     <svg  className="cta-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19.7843L16.6414 3.14286H6.28571V0H22V15.7143H18.8571V5.35857L2.21571 22L0 19.7843Z"/>
</svg>
    </button>
}

export default Cta;