import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
const Home = () => {
	const { data } = useOutletContext();
	const { newAlbums, topAlbums, songs } = data;

	return (
		<>
			<Hero />
			<div className={styles.wrapper}>
				<Section title="Top Albums" data={topAlbums} type="albums" />
				<Section title="New Albums" data={newAlbums} type="albums" />
				<Section
					title="Songs"
					data={songs}
					filterSource={fetchFilters}
					type="song"
				/>
			</div>
		</>
	);
};

export default Home;
