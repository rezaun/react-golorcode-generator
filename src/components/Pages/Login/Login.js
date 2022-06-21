import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import './login.css'

const Login = () => {
    const [userInfo, setUserInfo]= useState({
        email:"", 
        password:"",
    })

    const [errors, setErrors] = useState({
        email:"",
        password:"",
        general:"",
    })
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState("");

    const [signInWithEmail, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail =emailRegex.test(e.target.value);        
        
        //setEmail(e.target.value)
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...setErrors, email:""})
        }else{
            setErrors({...errors, email:'Invalid Email'});
            setUserInfo({...userInfo, email:""})
        }
    }

    const handlePasswordChange = (e) =>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...errors, password:""})
        }else{
            setErrors({...errors, password:'Invalid Password'});
            setUserInfo({...userInfo, email:""})
        }       

       // console.log(validPassword);
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password)

        //console.log(email,password);
    }

    useEffect(()=>{
        if(hookError){
            setErrors(...errors, general:hookError?.)
        }

    }, [hookError])


    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-3'>This is Login Page</h2>
            <form className='col-sm-4 offset-sm-4' onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Emaill Address' onChange={handleEmailChange}/>
                    {errors?.email && <p className='error-message'>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' onChange={handlePasswordChange}/>
                    {errors?.password && <p className='error-message'>{errors.password}</p>}
                      
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {/* {error && <p style={{color:'red'}}>{error}</p>} */}
                {hookError && <p style={{color:'red'}}>{hookError.message}</p>}
            </form>
        </div>
    );
};

export default Login;