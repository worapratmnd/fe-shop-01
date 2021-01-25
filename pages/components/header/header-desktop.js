import Logo from "../logo"
import styles from '../../../styles/Header-desktop.module.css'
import Link from "next/link"
import {
    FaShoppingCart,
    FaRegHeart,
    FaUser,
    FaSignOutAlt,
    FaBars,
  } from 'react-icons/fa';

export default function HeaderDesktop({viewer}) {
    const cartCount = 4

    return (
        <>
            <div className={`${styles.header}`}>
                <Logo />
                
                {/* <SearchBox /> */}

                <div className={styles.navButtons}>
                    <Link href="/cart">
                        <a className={styles.navButtonsItems}>
                            <FaShoppingCart color="#808080" />
                            <p>
                                <sup className={styles.itemsTotal}>{cartCount}</sup>{' '}
                                Items
                             </p>
                        </a>
                    </Link>
                    {!viewer && (
                        <Link href="/user/login">
                        <a className="nav-buttons-signin">
                            <FaUser color="#808080" />
                            <p>Sign In</p>
                        </a>
                        </Link>
                    )}
                    {viewer && (
                        <>
                        <Link href="/profile">
                            <a className="nav-buttons-profile">
                            <FaUser color="#808080" />
                            <p>{viewer.name}</p>
                            </a>
                        </Link>
                        <Link href="/user/signout">
                            <a className="naButtonsSignout">
                            <FaSignOutAlt />
                            </a>
                        </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}