import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { addProduct } = useProduct();
  const [products, setProducts] = useState({
    title: "",
    price: "",
    img: "",
    descr: "",
  });

  function handleValues(e) {
    if (e.target.name === "price") {
      let obj = { ...products, [e.target.name]: Number(e.target.value) };
      setProducts(obj);
    } else {
      let obj = { ...products, [e.target.name]: e.target.value };
      setProducts(obj);
    }
  }

  const navigate = useNavigate();

  function handleChageProduct() {
    addProduct(products);
    setProducts({
      title: "",
      price: "",
      img: "",
      descr: "",
    });

    navigate("/menu");
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "30%",
        }}
      >
        <TextField
          onChange={handleValues}
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={products.title}
        />
        <TextField
          onChange={handleValues}
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          type="number"
          value={products.price}
        />
        <TextField
          onChange={handleValues}
          name="img"
          id="outlined-basic"
          label="Img"
          variant="outlined"
          value={products.img}
        />
        <TextField
          onChange={handleValues}
          name="descr"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={products.descr}
        />
        <Button
          sx={{ color: "black" }}
          onClick={handleChageProduct}
          variant="contained"
        >
          CREATE
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
