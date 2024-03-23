import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import HomePage from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
	const [data, setData] = useState([]);

	const fetchData = (key, source) => {
		source().then((data) => {
			setData((prevState) => {
				return { ...prevState, [key]: data };
			});
		});
	};

	useEffect(() => {
		fetchData("topAlbums", fetchTopAlbums);
		fetchData("newAlbums", fetchNewAlbums);
		fetchData("songs", fetchSongs);
	}, []);

	const { topAlbums = [], newAlbums = [], songs = [] } = data;

	return (
		<>
			<StyledEngineProvider injectFirst>
				<Navbar data={[...topAlbums, ...newAlbums]} />
				<Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
			</StyledEngineProvider>
		</>
	);
}

export default App;
