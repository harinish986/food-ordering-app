import React from 'react';
import {Link} from 'react-router-dom';
import classes from './header.module.css';

const Header = () => {

    const userName = {
        name: "John",
    }

    const cart = {
        items: 10
    }

    const logout = () => {}
  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Food Mine!
            </Link>
            <nav>
                <ul>
                    {userName?
                    (<li className={classes.menu_container}>
                        <Link to="/profile" className={classes.cart}>
                            {userName.name}
                            <div className={classes.menu}>
                                <Link to="/profile">Profile</Link>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </Link>
                    </li>):
                    (<Link to="/login">Login</Link>)}
                    <li>
                        <Link to="/cart">
                            Cart
                            {cart.items > 0 && <span className={classes.cart_count}>{cart.items}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header