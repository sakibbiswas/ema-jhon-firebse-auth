import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    const handellogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch(error => {
                console.log(error);
            });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <span> wellcome {user.displayname}
                        <button onClick={handellogout}>signOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;