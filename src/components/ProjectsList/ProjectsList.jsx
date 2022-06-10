import './ProjectsList.css';


function ProjectsList (props) {

    
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
  