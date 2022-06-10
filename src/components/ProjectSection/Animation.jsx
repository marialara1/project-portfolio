import React, { useState, useEffect } from "react";
import { Container, Ul } from "./StyledAnimation";
import { projectData } from "../projectData/projectData";

const Animation = (props) => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return  (
  <>
    <Container className="projects-list">
      <Ul className="projects-list__container">
          <li>
            <span className="list-project__name ">* {props.name}</span>
            <div className='img-cont'>
              <img src={props.img} alt={props.name} />
            </div>
          </li>
      </Ul>
    </Container>









{/*     
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
        </div> */}
      






        </>
  );
};

export default Animation;
