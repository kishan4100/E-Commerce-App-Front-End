import styled from "styled-components";
import categories from "../Data/Data2.js";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category item={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
