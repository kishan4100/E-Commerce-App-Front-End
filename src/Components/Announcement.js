import styled from "styled-components";
const Container = styled.div`
  background-color: #f2d1d1;
  width: 100wh;
  min-height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const Announcement = () => {
  return (
    <Container>
      Limited offer Deal! Free Shipping On Orders Above ₹1000
    </Container>
  );
};

export default Announcement;
