import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import { styled } from "@mui/system";
import { trim } from "../../helpers/helper";
import { useNavigate } from "react-router-dom";
import { Tooltip, useAutocomplete } from "@mui/material";

const Listbox = styled("ul")(({ theme }) => ({
	width: "100%",
	margin: 0,
	padding: 0,
	position: "absolute",
	borderRadius: "0px 0px 10px 10px",
	border: "1px solid var(--color-primary)",
	top: 60,
	height: "max-content",
	maxHeight: "500px",
	zIndex: 10,
	overflowY: "scroll",
	left: 0,
	bottom: 0,
	right: 0,
	listSyle: "none",
	backgroundColor: "var(--color-black)",
	overflow: "auto",
	"& li.Mui-focused": {
		backgroundColor: "#4a8df6",
		color: "white",
		cursor: "pointer",
	},
	"& li.active": {
		backgroundColor: "#2977f5",
		color: "white",
	},
}));

const Search = ({ searchData, placeholder }) => {
	console.log(placeholder);
	// const {
	// 	getRootProps,
	// 	getInputLabelProps,
	// 	getInputProps,
	// 	value,
	// 	getListboxProps,
	// 	getOptionProps,
	// 	groupedOptions,
	// } = useAutocomplete({
	// 	id: "use-autocomplete-demo",
	// 	options: searchData || [],
	// 	getOptionLabel: (option) => option.title,
	// });
	const navigate = useNavigate();
	const onSubmit = (e, value) => {
		e.preventDefault();
		console.log(value);
		navigate(`/albums/${value.slug}`);
	};

	return (
		<>
			<div style={{ postion: "relative" }}>
				<form
					className={styles.wrapper}
					// onSubmit={(e) => {
					// 	onSubmit(e, value);
					// }}
				>
					<div>
						<input
							name="albums"
							className={styles.search}
							placeholder={placeholder}
							required
							// {...getInputProps()}
						/>
					</div>
					<div>
						<button className={styles.searchButton} type="submit">
							<SearchIcon />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Search;
