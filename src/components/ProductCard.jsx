import React, { Component }   from "react"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {   ShoppingCartOutlined } from "@mui/icons-material";
import {Link} from 'react-router-dom';
import Box from '@mui/joy/Box'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import SnakBarForMsg from './SnakBarForMsg';
import {useNavigate} from 'react-router-dom';



function ProductCard (props)  {

        const [found, setFound] = React.useState(false);

        const navigate = useNavigate();

        var isFound;
        var object;

        const incCartCount = () => {
 
             if( props.userValue.email === '' ) 
                navigate('/login');

            { 
                isFound = props.cart.some(element => {
                    if (element._id === props.product._id) {                                                 
                        return true;
                    }
                    return false;
                 });
                 
                setFound(isFound);                
            }

            { if( !isFound) { 

                    object = Object.assign({}, props.product);
                    object.qty = 1;
                    props.setCart(props.cart.concat(object) )
                    props.setTotalBill(props.totalBill + object.price);                    

                } else {
                    props.setSnakBarMsg('Already in Cart')
                }
            }
        }

 
        return(
            <div >
                
                { found ? <SnakBarForMsg snakBarMsg={props.snakBarMsg} /> : null }

                <Card sx={{ maxWidth: 245 }} className="rounded my-3 p-3"  > 

                    <Link to={`/productInfo/${props.product._id}`} underline="none"> 
                        <CardMedia
                            component="img"
                            height="180"
                            width="180"
                            image={props.product.imgUrl}
                            alt="green iguana"
                        />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.product.description.substring(0, 20)+'...' } 
                        </Typography>
                    </CardContent>
                   

                    <Box sx={{ display: 'flex' }}>   
                    
                        <Typography gutterBottom variant="h6" component="div">
                        ${props.product.price}
                        </Typography>
                         
                        <Button
                            variant="solid"
                            size="sm"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', fontWeight: 600 }}
                            onClick={incCartCount}
                            >
                             <AddShoppingCartIcon/>
                        </Button><br/>

                    </Box>
                                 
                </Card>     
            </div>       
        );

}

 
 
 
export default ProductCard;