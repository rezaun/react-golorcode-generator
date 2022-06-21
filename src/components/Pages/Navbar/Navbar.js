import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Color Generator</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/about">About</CustomLink>
                            </li>                         
                            
                            <li className="nav-item">
                                {
                                    user ? ( <button onClick={() => signOut(auth)}>Logout</button>) : (
                                         <CustomLink className="nav-link" to="/login">                                       
                                        
                                    
                                    Login
                                    </CustomLink>
                                   
                                )}
                                
                            </li>
                            <li>{user?.email}</li>                  
                            
                        </ul>
                      
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;