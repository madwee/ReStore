import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];

}
export default function ProductList({products}: Props){
    return(
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 3, sm: 6, md: 12 }}>
    
    {products.map(product => (
        <Grid item xs={3} key={product.id}>
        <ProductCard product={product} />
        </Grid>
    ))}
   </Grid>
   )
}