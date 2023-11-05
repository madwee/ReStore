import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];

}
export default function ProductList({products}: Props){
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    {products.map(product => (
        <Grid item xs={4} key={product.id}>
        <ProductCard product={product} />
        </Grid>
    ))}
      
   </Grid>
   
}