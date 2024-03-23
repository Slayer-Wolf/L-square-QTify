import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import FaqSection from "../../components/FaqSection/FaqSection";
const Home = () => {
	const { data } = useOutletContext();
	const { newAlbums, topAlbums, songs } = data;
	const [song, setSong] = useState({});

	return (
		<>
			<Hero data={[...newAlbums, ...topAlbums]} />
			<div className={styles.wrapper}>
				<Section title="Top Albums" data={topAlbums} type="album" />
				<Section title="New Albums" data={newAlbums} type="album" />
				<Section
					title="Songs"
					data={songs}
					type="songs"
					filterSource={fetchFilters}
					changeSong={setSong}
				/>
			</div>
			<FaqSection />
			<AudioPlayer song={song} />
		</>
	);
};

export default Home;
