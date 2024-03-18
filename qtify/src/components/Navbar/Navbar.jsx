import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link to="/">
				<Logo />
			</Link>
			<Search
				// searchData={searchData}
				placeholder="Search a song of your choice"
			/>
			<Button>Give Feedback</Button>
		</nav>
	);
};

export default Navbar;
