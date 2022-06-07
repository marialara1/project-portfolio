import './ProjectsList.css';
import { useEffect } from 'react';

function ProjectsList (props) {

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
    
    return (
      <>
        <div className="projects-list">
          <div className="projects-list__container">
            <div className="js-navigation__link navigation__text js-navigation__text navigation__link">

                  <h3 mouseMove className="list-project__name ">
                    * {props.name}
                  </h3> 

                <div className="hover-reveal js-hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img hover-reveal__img--01 js-hover-reveal__img"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </>
    );
  }
  
  export default ProjectsList ;
  