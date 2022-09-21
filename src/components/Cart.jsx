import React from "react";
import {Container, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import {useNavigate} from 'react-router-dom';

function Cart(props) { 

    const navigate = useNavigate();
 
        React.useEffect( () => {
            if( props.userValue.email === '' ) 
                navigate('/login');
        },[])
        
 
    const paperStyle = { padding:"50px 20px", width:600, margin:"40px auto"};
    const isEmpty = props.cart.length === 0 ;


    const EmptyCart = () => {
        return( 
            <div className="text-center">
                <img width="300px" height="300px" src='../static/images/emptycart.jpg'/>
                <Typography>Your card is Empty. Please add some products to the Cart</Typography>
            </div>
        );
    }

    const goToCheckout = ()=>{
        navigate('/checkout');
    }

    const FilledCart = () => {

        return(              
            <Paper elevation={1} style={paperStyle } >
                {
                    props.cart.map( (prod ) => (
                        
                         <Paper elevation={1} style={{margin:'10px', padding:'15px'}}>
                            <div className="row">
                                <div className="col-4">
                                    <img src={prod.imgUrl}  width="150px" height="150px"/>
                                </div>
                                <div className="col-5">
                                    <h3>{prod.name}</h3>
                                    <p>{prod.description.substring(0, 20)+'...'}</p>
                                    <h5>Qty : {prod.qty}</h5>
                                    <h4> $ : {prod.price}</h4>
                                </div>                            
                                <div className="col-3">
                                    <div>
                                        <Button onClick={ ()=> { 
                                            { 
                                                props.setTotalBill(props.totalBill + prod.price)
                                                prod.qty++;  
                                                
                                            }}                                           
                                            } >
                                                <AddCircleOutlineIcon/>
                                            </Button> 
                                        </div> <br/>
                                        <div>
                                            <Button onClick={ ()=> { 
                                                {  if( prod.qty > 0 )  {
                                                        props.setTotalBill(props.totalBill - prod.price)
                                                        prod.qty--  
                                                    }   
                                                }}                                           
                                                } >
                                                <RemoveIcon/>
                                            </Button>
                                        </div>                                
                                </div>
                            </div>
                        </Paper>
                    ))
                }
            </Paper>
        );
    }


    const BillAndCheckout = () => {
        return(
            <div style = {{ marginTop :'100px', }}>
                <h1>Total Bill <br/>$ {props.totalBill} </h1>
                <br/>
                <Button variant="outlined" size="large" onClick={goToCheckout} >Go to Checkout</Button>
            </div>
        );
    }


    return ( 
        <div className="container"><br/><br/>
            <h1 className="text-center">Your Shopping Cart</h1>

            <div className="row">
                <div className="col-10  ">
                <br/>
                
                    <Container>
                        
                        { isEmpty ? < EmptyCart/> : <FilledCart/>}

                    </Container>

                </div>
                <div className="col-2"  >
 
                    {   isEmpty ? null :<BillAndCheckout/> }
                    
                </div>
                 
            </div>
        </div>
    );
}

export default Cart;