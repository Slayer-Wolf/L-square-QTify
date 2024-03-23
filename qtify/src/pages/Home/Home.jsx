import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import FaqSection from "../../components/FaqSection/FaqSection";
import SongSection from "../../components/SongSection/SongSection";
import { fetchSongs, fetchNewAlbums, fetchTopAlbums } from "../../api/api";

const Home = () => {
	const { data } = useOutletContext();
	const { newAlbums, topAlbums, songs } = data;
	const [topAlbumSongs, setTopAlbumSongs] = useState([]);
	const [newAlbumSongs, setNewAlbumSongs] = useState([]);
	// const [song, setSong] = useState({});

	const [songsData, setSongsData] = useState([]);

	const [value, setValue] = useState(0);

	const [filteredData, setFilteredData] = useState([]);

	const generateTopAlbumSongs = async () => {
		try {
			const res = await fetchTopAlbums();
			setTopAlbumSongs(res);
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const generateNewAlbumSongs = async () => {
		try {
			const res = await fetchNewAlbums();
			setNewAlbumSongs(res);
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const generateSongs = async () => {
		try {
			const res = await fetchSongs();
			setSongsData(res);
			setFilteredData(res);
		} catch (error) {
			return null;
		}
	};
	console.log(songsData);
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
		console.log(
			"generateNewSongs triggered and filtered this Data: ",
			newSongsArray,
		);
		setFilteredData(newSongsArray);
	};

	const handleChangeIndex = async (newValue) => {
		setValue(newValue);
		generateNewSongs(newValue);
	};
	// console.log(filteredData);
	useEffect(() => {
		generateTopAlbumSongs();
		generateNewAlbumSongs();
		generateSongs();
	}, []);

	return (
		<>
			<Hero data={[...newAlbums, ...topAlbums]} />
			<div className={styles.wrapper}>
				<Section type="album" title="Top Albums" data={topAlbumSongs} />
				<Section type="album" title="New Albums" data={newAlbumSongs} />
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
