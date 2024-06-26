import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Styles from "./Album.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
import Button from "../../components/Button/Button";
import { getAlbumBySlug } from "../../api/api";
import { ReactComponent as AddToLibrary } from "../../assets/addToLibrary.svg";
import { ReactComponent as Shuffle } from "../../assets/shuffle.svg";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";

const PaginationQ = styled(Pagination)(({ theme }) => ({
	button: {
		color: "white",
		fontFamily: `"Poppins" , sans-serif`,
		fontWeight: "500",
		fontSize: "0.875rem",
		minWidth: "22px",
		height: "22px",
	},
	"button.Mui-selected:hover": {
		backgroundColor: "var(--color-primary)",
	},
	"button.Mui-selected": {
		color: "black",
		backgroundColor: "var(--color-primary)",
		fontWeight: "700",
	},
	"button > svg": {
		transform: "scale(5.5)",
	},
}));

const Album = () => {
	const { newAlbums = [], topAlbums = [], songs = [] } = useOutletContext();
	const { albumId } = useParams();
	const [album, setAlbum] = useState({});
	const [page, setPage] = useState(1);
	const [song, setSong] = useState({});

	const navigate = useNavigate();

	function calAlbumDuration(songs) {
		console.log(songs);
		const totalTime =
			songs.reduce((total, song) => {
				return total + song.durationInMs;
			}, 0) / 60000;

		const minutes = Math.floor(totalTime % 60);
		const hours = Math.floor(totalTime / 60);
		return `${hours}h ${minutes}m`;
	}

	function songDuration(durationInMs) {
		const totalSec = durationInMs / 1000;
		const minutes = Math.floor(totalSec / 60);
		const seconds = Math.floor(totalSec % 60);
		return `${minutes}:${seconds}`;
	}
	useEffect(() => {
		const fetchData = async () => {
			const data = await getAlbumBySlug(albumId);
			setAlbum(data);
		};

		fetchData();
	}, [albumId, getAlbumBySlug]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	function handleBackClick(e) {
		navigate(-1);
	}

	function changeSongs(song) {
		setSong(song);
	}

	const songCurrentPage = album.songs
		? album.songs.slice((page - 1) * 10, page * 10)
		: [];

	return (
		<>
			{album?.title && (
				<div className={Styles.mainContent}>
					<div>
						<Button
							onClick={handleBackClick}
							className={Styles.backButton}
							other
						>
							<BsArrowLeftCircle fontSize="2.5rem" />
						</Button>
					</div>
					<div className={Styles.album_details}>
						<div className={Styles.album_image}>
							<img src={album?.image} alt="album thumbnail" />
						</div>
						<div className={Styles.album_description_action}>
							<h3>{album.title}</h3>
							<p className={Styles.album_description}>{album?.description}</p>
							<p>
								{album.songs.length} songs &middot;{" "}
								{calAlbumDuration(album?.songs)} &middot;{" "}
								{(album.follows / 1000).toFixed(1)}k follows
							</p>
							<div className={Styles.album_actions}>
								<Button className={Styles.shuffle_actions} primary>
									<Shuffle /> Shuffle
								</Button>
								<Button className={Styles.add_actions} secondary>
									<AddToLibrary />
									Add to library
								</Button>
							</div>
						</div>
					</div>

					<div className={Styles.pagi_container}>
						<PaginationQ
							className={Styles.pagination}
							count={Math.ceil(album.songs.length / 10)}
							onChange={handleChange}
						/>
					</div>
					<div className={Styles.songsList}>
						<table className={Styles.song_list_table}>
							<thead>
								<tr>
									<th className={Styles.song_headcol_tabImgTitle}>Title</th>
									<th className={Styles.song_headcol_tabArtist}>Artist</th>
									<th className={Styles.song_headcol_tabDuration}>Duration</th>
								</tr>
							</thead>
							<tbody>
								{songCurrentPage?.map((song) => {
									return (
										<>
											<tr className={Styles.song_td_row}>
												<td className={Styles.song_datacol_tabImg}>
													<div
														onClick={(e) => {
															changeSongs(song);
														}}
														className={Styles.song_title_td}
													>
														<div className={Styles.song_image}>
															<img
																src={song?.image}
																alt={`${song?.title} thumbnail`}
															/>
														</div>
														<p>{song?.title}</p>
													</div>
												</td>
												<td className={Styles.song_datacol_tabArtists}>
													{song.artists.join(", ")}
												</td>
												<td className={Styles.song_datacol_tabDuration}>
													{songDuration(song.durationInMs)}
												</td>
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<AudioPlayer song={song} album={album?.title || "Album Name"} />
		</>
	);
};

export default Album;
