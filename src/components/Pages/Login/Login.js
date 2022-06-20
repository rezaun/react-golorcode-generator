import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) =>{

        setEmail(e.target.value)
        console.log(email);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        console.log(password);
    }

    const handleLogin = (e) =>{
        e.preventDefault();

        console.log(email,password);
    }
    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-3'>This is Login Page</h2>
            <form className='col-sm-4 offset-sm-4' onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Emaill Address' onChange={handleEmailChange}/>                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' onChange={handlePasswordChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;