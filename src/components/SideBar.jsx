import React from 'react'; 
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';


function SideBar(props) {

    const navigate = useNavigate();

    const brandName = (brand)=> {
        props.setBrandForSort(brand);
        navigate('/');
    }

    const priceRange = (min, max) => {
        console.log(priceRange);
        props.setMinPriceForSort(min);
        props.setMaxPriceForSort(max);
        navigate('/');
    }

    return(
        <div>
            <br/>
            <div className="list-group text-center">
                <p  className="list-group-item list-group-item-action active bg-dark" aria-current="true">
                    Brands
                </p>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('') }  >All</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('iphone') }  >Apple</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('samsung') }>Samsung</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('oneplus') }>One Plus</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('redmi') }>Redmi</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => brandName('moto') }>Moto</Button>

            </div>

            <br/>
            <div className="list-group text-center">
                <p  className="list-group-item list-group-item-action active bg-dark" aria-current="true">
                    Price Range
                </p>
                <Button variant="text" style={{color:'black'}} onClick={ () => priceRange(0, 100000) } > All</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => priceRange(100, 300) } > $ 100 - 300</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => priceRange(300, 600)  } > $ 300 - 600</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => priceRange(600, 900)  } > $ 600 - 900</Button>
                <Button variant="text" style={{color:'black'}} onClick={ () => priceRange(900, 1200) } > $ 900 - 1200</Button>
            </div>         
                  
        </div>
    );
}

export default SideBar;