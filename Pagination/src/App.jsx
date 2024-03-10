import React, { useState, useEffect } from "react";
import './App.css'
import Pagination from "./pagination/pagination";
import RenderU from "./RenderUi";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total , setTotal] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchProducts();
  },[page]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=
        ${(page - 1) * 10}`
      );
      const responseData = await response.json();
      console.log("responseData", responseData);
      if (responseData && responseData.products) {
        setProducts(responseData.products);
        setTotal(responseData.total)
       
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className={"product-list-container"}>
      <h1 className={"product-list-title"}>Product List</h1>
      <ul className={"product-list"}>
        {products && products.length
          ? products.map((product) => (
              <li key={product.id} className={"products"}>
                <img src={product.thumbnail} alt={product.title} />
                <span style={{ fontWeight: "bold" }}>{product.title}</span> - $
                {product.price}
              </li>
            ))

            :<RenderU />
          }
      </ul>
      <Pagination products={products} page={page} total ={total} setPage = {setPage}/>
    
    </div>
  );
};

export default ProductList;











