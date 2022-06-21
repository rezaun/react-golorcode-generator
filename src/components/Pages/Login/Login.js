import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate, useLocation } from 'react-router-dom';


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState("");

    const [signInWithEmail, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    //second
    //const [user] = useAuthState(auth);
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        //setEmail(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...setErrors, email: "" })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: 'Invalid Password' });
            setUserInfo({ ...userInfo, password: "" })
        }

        // console.log(validPassword);
    }

    const handleLogin = (e) => {
        //console.log(userInfo);
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password)

        //console.log(email,password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    useEffect(()=>{
        if(user){
            navigate(from)
        }
    },[user])

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            //toast(hookError.message);
            switch (error?.code) {
                case "auth/invalid-email":
                    toast('invalid email provided, Please provide a valid email');
                    break;
                case "auth/email-already-exists":
                    toast('Your email and password already exits');
                    break;
                case "auth/email-already-exists":
                    toast('Your email and password already exits');
                    break;
                case "auth/invalid-password":
                    toast('Your password has been wrong');
                    break;

                default:
                    toast('Something went wrong');
            }
        }

    }, [hookError, googleError])


    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-3'>This is Login Page</h2>
            <form className='col-sm-4 offset-sm-4' onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Emaill Address' onChange={handleEmailChange} />
                    {errors?.email && <p className='error-message'>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' onChange={handlePasswordChange} />
                    {errors?.password && <p className='error-message'>{errors.password}</p>}

                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {/* {error && <p style={{color:'red'}}>{error}</p>} */}
                {/* {hookError && <p style={{color:'red'}}>{hookError.message}</p>} */}
                <ToastContainer />
                <p>Don't have an account? <Link to="/signup">sign up first</Link></p>
            </form>
            <button className='btn btn-success' onClick={()=>signInWithGoogle()}>Sign in with Google</button>
        </div>
    );
};

export default Login;