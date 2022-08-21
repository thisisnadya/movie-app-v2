import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  overflow: hidden;
  min-height: 30rem;
  height: 100%;
  position: relative;
  border-radius: 1rem;

  img {
    position: absolute;
    border-radius: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overview {
    position: absolute;
    font-family: "Heebo", sans-serif;
    z-index: 10;
    bottom: 0%;
    padding: 1rem 5rem;
    color: white;
    width: 80%;
    font-weight: 500;
    height: 45%;
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-weight: 300;
      font-size: 0.8rem;
      opacity: 0.5;
      letter-spacing: 1px;
    }
    @media (max-width: 968px) {
      text-align: center;
      height: 30%;
      width: 100%;
      h2 {
        font-size: 2.5rem;
      }
      p {
        display: none;
      }
    }
  }
`;

export const MediumCard = styled.div`
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 1rem;
  img {
    position: absolute;
    border-radius: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Heebo", sans-serif;
  }
`;

export const SmallCard = styled.div`
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 1rem;
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
`;

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .title {
      font-size: 2rem;
    }
  }
`;

export const Category = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

export const Slink = styled(NavLink)`
  margin-right: 2rem;
  text-decoration: none;
  color: #c8c6c6;
  &:hover {
    color: #f3f1f5;
  }
  &.active {
    color: #f3f1f5;
  }
  @media (max-width: 998px) {
    h5 {
      font-size: 1rem;
    }
  }
`;

export const Load = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .balls {
    display: flex;
  }
  .ball {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
    animation: ball 0.5s infinite alternate;
  }
  .ball2 {
    animation-delay: 0.1s;
  }
  .ball3 {
    animation-delay: 0.1s;
  }
  .text {
    margin: 1rem 0rem;
    font-size: 2rem;
    letter-spacing: 1px;
    color: white;
  }

  @keyframes ball {
    to {
      transform: translateY(-10px);
    }
  }
`;

export const SFooter = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Form = styled.form`
  margin: 2rem auto;
  position: relative;
  input {
    display: block;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 0.4rem 2.5rem;
    width: 100%;
    border: 2px solid #3a4f52;
    background: transparent;
    border-radius: 2rem;
    color: white;
    font-size: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1rem;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;

  img {
    border-radius: 1rem;
    align-self: flex-start;
  }

  .detail {
    margin-left: 3rem;
    h2 {
      color: white;
      font-size: 3rem;
    }

    h3 {
      font-family: sans-serif;
    }

    h4 {
      color: #b4afaf;
    }
    p {
      font-size: 1.3rem;
      color: #e2dada;
      display: inline-block;
      font-family: "Tajawal", sans-serif;
    }
    span {
      color: white;
      font-size: 1.2rem;
      display: inline-block;
      background-color: #3a4f52;
      border-radius: 3rem;
      padding: 0.5rem 1rem;
      margin: 0.7rem 1rem 0.7rem 0rem;
    }
    .rate {
      display: flex;
      align-items: center;
      svg {
        color: yellow;
        margin-right: 3px;
      }
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      max-height: fit-content;
      align-self: center;
    }
    .detail {
      margin: 1rem 0rem;
      text-align: center;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export const ButtonWatchlist = styled.button`
  padding: 0.7rem 1rem;
  outline: none;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  margin-right: 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 8px;
  &.active {
    background-color: white;
    color: black;
    border: 1px solid grey;
  }
`;

export const GenreCard = styled.div`
  position: relative;
  height: 200px;
  width: 350px;
  margin-bottom: 2rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    border-radius: 1rem;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Heebo", sans-serif;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 3rem;
`;

export const MiniCard = styled.div`
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const NextPage = styled.p`
  font-size: 1rem;
  color: white;
  text-align: right;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #797575;
  }
`;
