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

export default function HeaderDesktop({ viewer }) {
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
			<div className={`${styles.header} ${styles.headerBottom}`}>
				<div className={styles.allCategoriesBox}>
					<FaBars color="#d8d8d8" />
					<select name="categories" id="categories">
						<option value="All Categories">
							All Categories
						</option>
						<option value="#">Desktop</option>
						<option value="#">Smartphone</option>
						<option value="#">Watches</option>
						<option value="#">Games</option>
						<option value="#">Laptop</option>
						<option value="#">Keyboards</option>
						<option value="#">TV & Video</option>
						<option value="#">Accessories</option>
					</select>
				</div>

				<nav className={styles.mainNav}>
					<Link href="#">
						<a>Super Deals</a>
					</Link>
					<Link href="#">
						<a>Featured Brands</a>
					</Link>
					<Link href="#">
						<a>Collections</a>
					</Link>
					<Link href="#">
						<a>Bestselling</a>
					</Link>
				</nav>

				<div className={styles.settings}>
					<div className={styles.menuDropdown}>
						<p>Help</p>
					</div>
					<div className={styles.menuDropdown}>
						<p>Language</p>
					</div>
				</div>
			</div>
		</>
	)
}