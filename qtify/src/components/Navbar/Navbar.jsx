import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import FeedbackModal from "../Modal/Modal";

const Navbar = ({ data }) => {
	console.log(data);
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<nav className={styles.navbar}>
			<Link to="/">
				<Logo />
			</Link>
			<Search data={data} placeholder="Search a song of your choice" />
			<Button onClick={handleOpenModal} className={styles.feedBtn} secondary>
				Give Feedback
			</Button>
			<FeedbackModal open={modalOpen} handleClose={handleCloseModal} />
		</nav>
	);
};

export default Navbar;
