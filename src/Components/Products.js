import React, { useEffect, useState } from "react";
import styled from "styled-components";
import staticProducts from "../Data/Data3";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 5px;

  min-height: 700px;
  width: 100wh;
`;

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [props.cat]);

  useEffect(() => {
    props.cat &&
      //Hot Code
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(props.filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, props.cat, props.filter]);

  useEffect(() => {
    if (props.sort === "newset") {
      setFilteredProducts((prevstate) =>
        [...prevstate].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (props.sort === "asec") {
      setFilteredProducts((prevstate) =>
        [...prevstate].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prevstate) =>
        [...prevstate].sort((a, b) => b.price - a.price)
      );
    }
  }, [props.sort]);

  return (
    <Container>
      {props.cat
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : staticProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))}
    </Container>
  );
}

export default Products;
