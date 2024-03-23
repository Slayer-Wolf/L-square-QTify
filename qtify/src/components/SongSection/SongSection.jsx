import React, { useEffect } from "react";
import styles from "./SongSection.module.css";
import SongTab from "../../components/SongTab/SongTab";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";

const SongSection = ({
	type,
	title,
	value,
	filteredData,
	handleChangeIndex,
}) => {
	console.log(
		type,
		title,
		filteredData,
		handleChangeIndex,
		"values at songSection",
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<h3>{title}</h3>
			</div>
			<SongTab handleChangeIndex={handleChangeIndex} />
			{filteredData?.length ? (
				<div className={styles.cardsWrapper}>
					<Carousel
						data={filteredData}
						renderCardComponent={(filteredData) => (
							<Card data={filteredData} type={type} />
						)}
					/>
				</div>
			) : (
				<div className={styles.progressBar}>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};

export default SongSection;
