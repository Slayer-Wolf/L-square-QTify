import axios from "axios";

export const BACKEND = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
	try {
		const res = await axios.get(`${BACKEND}/albums/top`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
export const fetchNewAlbums = async () => {
	try {
		const res = await axios.get(`${BACKEND}/albums/new`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
export const fetchSongs = async () => {
	try {
		const res = await axios.get(`${BACKEND}/Songs`);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const fetchFilters = async () => {
	try {
		const res = await axios.get(`${BACKEND}/genres`);
		console.log(res.data, "apiData");
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
