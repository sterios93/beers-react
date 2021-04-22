import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <h2 className={styles.logo}>Beans Love Beers</h2>

            <ul className={styles.navMenu}>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/favourites'}>
                        Favourites
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar