import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 30px 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const FilterTexT = styled.span`
  margin: 10px 10px 10px 50px;
  font-weight: 400;
  font-size: 2rem;
`;
const Select = styled.select`
  border: 1px solid gray;
  margin: 10px;
  font-size: 1.5rem;
`;
const Option = styled.option`
  font-size: 1rem;
`;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    setFilter((prevstate) => ({
      ...prevstate,
      [event.target.name]: selectedValue,
    }));
  };
  const handleSort = (e) => {
    setSort((prevstate) => e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterTexT>FilterProducts:</FilterTexT>
          <Select name="color" onChange={handleFilter}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTexT>
            SortProducts:
            <Select name="sort" onChange={handleSort}>
              <Option value="newest">Newest</Option>
              <Option value="asec">Price (Asec)</Option>
              <Option value="desc">Price (Desc)</Option>
            </Select>
          </FilterTexT>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
