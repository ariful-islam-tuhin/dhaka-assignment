

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Navbar from '../Navbar/Navbar';
import "./Header.css";



const Header = () => {
    const handleLogOut = () => {
        logout(history);
    };


    const { user, logout, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    };

    return (
        <div className='total-header'>
            <div className="row first-header pt-3 pb-1">
                <div className="col-lg-3">
                    <ButtonGroup size="md" className="mb-2">
                        <Button style={{ color: "white", backgroundColor: "#01896A", borderRadius: "50px", border: "1px solid gray" }}>Explore</Button>
                        <Button style={{ color: "white", backgroundColor: "#00775C", borderRadius: "50px", marginLeft: "-15px", border: "1px solid gray" }}>Activity</Button>
                    </ButtonGroup>

                </div>
                <div className="col-lg-5">

                    <input className="w-100 round" type="text"

                        placeholder='Search Products' />

                </div>
                <div className="col-lg-4 mt-2 pb-3">

                    <span style={{ color: "white", backgroundColor: "#00775C", borderRadius: "100px", padding: "10px" }}><i class="fab fa-twitter fa-lg"></i> </span>
                    <span style={{ color: "white", backgroundColor: "#00775C", borderRadius: "100px", padding: "10px" }}><i class="fab fa-facebook fa-lg"></i> </span>
                    <Link to="/login">
                        <Button onClick={handleGoogleSignIn} style={{ color: "white", backgroundColor: "#00775C", borderRadius: "50px", marginLeft: "15px", border: "1px solid gray" }}>Login</Button>
                    </Link>
                    {/* <br /> */}
                   
                    {/* {user?.email && <Button style={{ color: "white", backgroundColor: "#01896A", borderRadius: "50px", border: "1px solid black" }} onClick={logout}>Logout</Button>} */}
                    
               
                   


                    {user?.email && (
                        <NavLink
                            className="NavLink"
                            to="/dashboard"

                        >
                            Dashboard
                        </NavLink>
                    )}

                    {/* {user.email ? (
          <span className="logoutbtn" onClick={handleLogOut}>
            Log out
          </span>
        ) : (
          <>
            <Link className="NavLink" to="/login">
              Log in
            </Link>
          
          </>
        )} */}


                </div>
            </div>
            <Navbar></Navbar>

        </div>

    );
};

export default Header;