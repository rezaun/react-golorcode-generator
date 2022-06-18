import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='col-sm-12 notfoundWrapper'>
                    <h1>OPPS !!! 404 Nothing Found</h1>
                    <Link to='/home'>Back to Home</Link>
                </div>
            </div>            
        </div>
    );
};

export default NotFound;