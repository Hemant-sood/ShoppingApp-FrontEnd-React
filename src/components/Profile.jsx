import React from "react";
import {Container, Typography} from '@mui/material'


function Profile(props) {

     return(

        <div>
            <br/><br/>
             <div className="container">

                <h1 className="text-center">Hi, <b>{props.userValue.name}</b></h1><br/>
                <h1 className="text-center">Your registerd Email id is <b>{props.userValue.email}</b></h1>
            </div>
            
        </div>
    );

}

export default Profile;