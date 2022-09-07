import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import sliderItems from "../Data/Data.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100wh;
  height: 100vh;
  position: relative;
  display: flex;
  overflow-x: hidden;
`;

const Arrow = styled.div`
  background-color: #ffe6e6;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  border-radius: 50%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slide * -100}vw);
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 40px;
`;
const Image = styled.img`
  height: 90%;
  padding-top: 20px;
`;
const InfoContainer = styled.div`
  flex: 1;
  font-weight: 500;
  padding: 50px;
`;
const Title = styled.h1`
  margin: 50px 0px;
  font-size: 4rem;
`;
const Desc = styled.p`
  margin-bottom: 40px;
  letter-spacing: 3px;
  font-size: 1.7rem;
`;
const Button = styled.button`
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 100;
  background-color: transparent;
  border: 2px solid grey;
  cursor: pointer;
`;

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const handleClick = function (direction) {
    if (direction === "right") {
      setSlide(slide >= 2 ? 0 : slide + 1);
    } else {
      setSlide(slide > 0 ? slide - 1 : 2);
    }
  };
  return (
    <Container>
      <Arrow
        fontSize="large"
        direction="left"
        onClick={() => handleClick("Left")}
      >
        <ArrowLeftIcon sx={{ fontSize: 40 }} />
      </Arrow>
      <Wrapper slide={slide}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to={"/products/all"}>
                <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon sx={{ fontSize: 40 }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
