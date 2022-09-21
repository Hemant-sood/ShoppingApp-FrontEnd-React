import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from '@mui/joy/Card';
import {Link} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom';


function Login(props) {

    // const paperStyle = { padding:"50px 20px", width:600, margin:"40px auto"};
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginRes, setLoginRes] = React.useState(false);
    const [error, setError ] = React.useState('');

    const navigate = useNavigate();


    const LoginError = ()=> {
        return( 
          <div>
            <Alert severity="error">{error}</Alert><br/>
          </div>
        );
      };
  
  
      const login = (e) => {
  
        e.preventDefault();
        const user = {email, password};
        
        fetch('http://localhost:8083/ShoppingBackEnd/login', {
          
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(user)
  
        })
        .then( response =>response.json())
        .then(data => {
  
          console.log(data);
          
          props.setData(data);
        
          if( data.error ){ 
  
            setError(data.error);
            setLoginRes(true);
  
          }
          else{  
            setLoginRes(false);
            navigate('/');
          }
  
        });
  
       }
  



  return (
    <React.Fragment>
        <div  className='container'>
            <div className='row'>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <br/><br/><br/>
                    <h1 className='d-flex justify-content-center'>Login</h1><br/>
                    { loginRes? <LoginError/> :null}

                    <Card >
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" required   placeholder="name@example.com" onChange={ (e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" required minLength={6} placeholder="Password"  onChange={ (e) => setPassword(e.target.value)}/>
                                <label for="floatingPassword">Password</label>
                            </div><br/>
                            <p>New to the App? Go to <Link to='/register'>Register</Link></p>
                            <Button    className='btn btn-primary btn-lg btn-block' onClick={login} >Login</Button>
                     </Card>
                </div>
                <div className="col-sm-4"></div>                
            </div>
        </div>
    </React.Fragment>
  );
}

export default Login;