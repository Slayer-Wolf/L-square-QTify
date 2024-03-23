import React from "react";
import Button from "../Button/Button";

import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";
import { Tooltip, useAutocomplete } from "@mui/material";
import { styled } from "@mui/system";
import SearchListItem from "./SearchListItem";
import { useNavigate } from "react-router-dom";

function Search({ data }) {
	console.log(data);
	const navigate = useNavigate();

	function handleSearchClick(e) {
		e.preventDefault();

		const searchStr = e.target.elements["search_input"].value;
		const dt = data.find((album) => {
			return album.title.toLowerCase().includes(searchStr.toLowerCase());
		});
		if (dt) {
			navigate(`/album/${dt.slug}`);
			e.target.elements["search_input"].value = "";
		} else console.log(`no Album found with name "${searchStr}"`);
	}

	const {
		getRootProps,
		getInputLabelProps,
		getInputProps,
		getListboxProps,
		getOptionProps,
		groupedOptions,
	} = useAutocomplete({
		id: "use-autocomplete-demo",
		options: data || [],
		getOptionLabel: (option) => {
			if (!option) return "";
			return option.title;
		},
	});

	const Listbox = styled("ul")(({ theme }) => ({
		width: "100%",
		maxWidth: "727px",
		margin: 0,
		listStyle: "none",
		backgroundColor: "var(--color-black)",
		overflow: "auto",
		maxHeight: 200,
		color: "var(--color-white)",
		border: "1px solid rgba(0,0,0,.25)",
		"& li.Mui-focused": {
			backgroundColor: "var(--color-primary)",
			color: "white",
			cursor: "pointer",
		},
		"& li:active": {
			backgroundColor: "var(--color-primary)",
			color: "white",
		},
	}));

	return (
		<div className={styles.searchBar_container}>
			<form
				onSubmit={handleSearchClick}
				className={styles.search_bar}
				{...getRootProps()}
			>
				<input
					className={styles.searchInput}
					name="search_input"
					type="text"
					placeholder={"Search an album of your choice"}
					{...getInputProps()}
				/>
				<Button other className={styles["search-btn"]}>
					<FaSearch />
				</Button>
			</form>

			{groupedOptions.length > 0 ? (
				<Listbox className={styles.listSeacrh} {...getListboxProps()}>
					{groupedOptions.map((album, index) => (
						<li {...getOptionProps({ album, index })}>
							<SearchListItem album={album} />
						</li>
					))}
				</Listbox>
			) : null}
		</div>
	);
}

export default Search;
