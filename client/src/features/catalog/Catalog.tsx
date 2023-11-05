import { Grid } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";


export default function Catalog(){
const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))
}, [])


return(
    <>
    <ProductList products={products} />
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 3, sm: 6, md: 12 }}>
    
    {products.map(product => (
        <Grid item xs={3} key={product.id}>
        <ProductCard product={product} />
        </Grid>
    ))}
      
   </Grid>
   

    </>

    )
}