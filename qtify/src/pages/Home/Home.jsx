import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
// import { fetchFilters } from "../../api/api";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import FaqSection from "../../components/FaqSection/FaqSection";
import SongSection from "../../components/SongSection/SongSection";
import { fetchSongs } from "../../api/api";

const Home = () => {
	const { data } = useOutletContext();
	const { newAlbums, topAlbums, songs } = data;
	// const [song, setSong] = useState({});

	const [songsData, setSongsData] = useState([]);

	const [value, setValue] = useState(0);

	const [filteredData, setFilteredData] = useState([]);
	const generateSongs = async () => {
		try {
			const res = await fetchSongs();
			setSongsData(res);
			setFilteredData(res);
		} catch (error) {
			return null;
		}
	};

	const generateNewSongs = (index) => {
		let key = "";
		if (index === 0) {
			generateSongs();
			return;
		} else if (index === 1) {
			key = "rock";
		} else if (index === 2) {
			key = "pop";
		} else if (index === 3) {
			key = "jazz";
		} else if (index === 4) {
			key = "blues";
		}

		let newSongsArray = songsData.filter((song) => {
			console.log("key: ", key);
			return song?.genre?.key === key;
		});
		setFilteredData(newSongsArray);
	};

	const handleChangeIndex = async (newValue) => {
		setValue(newValue);
		generateNewSongs(newValue);
	};
	console.log(filteredData);
	useEffect(() => {
		generateSongs();
	}, []);

	return (
		<>
			<Hero data={[...newAlbums, ...topAlbums]} />
			<div className={styles.wrapper}>
				<Section type="album" title="Top Albums" data={topAlbums} />
				<Section type="album" title="New Albums" data={newAlbums} />
				<SongSection
					type="songs"
					title="Songs"
					value={value}
					filteredData={filteredData}
					handleChangeIndex={handleChangeIndex}
				/>
			</div>
			<FaqSection />
			{/* <AudioPlayer song={song} /> */}
		</>
	);
};

export default Home;
