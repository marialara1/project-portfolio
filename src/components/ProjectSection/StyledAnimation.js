import styled from "styled-components";

export const Container = styled.section`
  // width: 100%;
  // height: 100%;
`;

export const Ul = styled.ul`
  // margin: auto;
  // position: relative;
  li {
    list-style: none;
    span {
      &:hover {
        & ~ div {
          transform: rotate(0deg) scale(1);
          opacity: 1;
        }
      }
    }
    .img-cont {
      position: absolute;
      width: 100%;
      margin-left: -900px;
      margin-top: -200px;
      transform: translateX(0) scale(0.8);
      opacity: 0;
      transition: 0.6s;
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
`;
