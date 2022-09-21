import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Image} from 'react-bootstrap';
import { useParams } from "react-router-dom";

 
function ProductInfo (props) { 
 
    const param = useParams();
    const productId = param.id;

    console.log(productId);
    
    const product = props.products.find( (p) => p._id == productId );

    const incCartCount = () => {

        var isFound;
        { 

            isFound = props.cart.some(element => {
                if (element._id === productId) {
                return true;
                }
                return false;
             });
        }

        { if( !isFound) { 

                product.qty = 1;
                props.setCart(props.cart.concat(product) )
                props.setTotalBill(props.totalBill + product.price);
            } else {

            }
        }
    }

    
    return (

        <div className="container">        <br/><br/><br/>
            <div className="row">
                <div className="col-6">
                    <Image src={product.imgUrl} width="320px" height="320px" className="img-thumbnail " alt="..."/>
                </div>

                <div className="col-6">
                    <p className="fs-1 fw-normal">{product.name}</p>
                    <p className="fs-6 fw-normal">{product.description}</p>
                    <p className="fs-4 fw-bolder">$ {product.price}</p>
                    <br/>
                    <button type="button" className="btn btn-outline-primary" onClick={incCartCount} >Add to Cart  </button>
                
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;