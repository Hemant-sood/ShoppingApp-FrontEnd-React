import React from "react";
import SideBar from '../components/SideBar';
import { Grid } from "@mui/joy";
import ProductCard from "../components/ProductCard";
import {useNavigate} from 'react-router-dom';


 function Home(props) {


    React.useEffect( ()=>{
     
        fetch('http://localhost:8083/ShoppingBackEnd/')
        .then( response =>response.json())
        .then(data => {
          props.setProducts(data);
        })
    }, []);


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-1"></div>

                    <div className="col-2">
                        <SideBar setBrandForSort = {props.setBrandForSort}  setMinPriceForSort={props.setMinPriceForSort} setMaxPriceForSort={props.setMaxPriceForSort} />
                    </div>
                    
                    <div className="col-9">
                        
                        {/* { props.priceForSort === 'increasing' ? sorted.sort( (a, b) => {return a.price-b.price}) : sorted.sort( (a, b) => {return b.price-a.price}) }  */}

                        <Grid justify = "center" container spacing = {3}>
                        {

                            props.products.map( (product) => (
                                ( product.brand === props.brandForSort ||  props.brandForSort === '' ) && (  props.minPriceForSort <= product.price  && product.price <= props.maxPriceForSort ) ? 
                                <Grid  key = {product.id} rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 5, lg:4 }}>
                                    <ProductCard userValue={props.userValue} product = {product}  setCart={props.setCart} cart={props.cart}  totalBill={props.totalBill} setTotalBill={props.setTotalBill}  snakBarMsg={props.snakBarMsg} setSnakBarMsg={props.setSnakBarMsg}   />
                                </Grid> : null
                            ))
                        }
                        </Grid>
                     
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;