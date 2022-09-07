import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 1.8rem;
  margin-bottom: 30px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  font-size: 1.5rem;
  border: none;
  padding: 15px 20px;
  flex: 8;
`;
const Button = styled.button`
  background-color: teal;
  border: 1px solid grey;
  flex: 1;
  color: white;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #009a9a;
  }
`;

function NewsLetter() {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>
        Get Timely Updates From Your Favourite Products.
      </Description>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
