import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  min-height: 45rem;
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
      font-size: 4rem;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
