import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Styles from "./Section.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Section({ title, data, filterSource, type }) {
	const [carouselToggle, SetCarouselToggle] = useState(true);
	const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
	const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
	const [value, setValue] = React.useState(0);
	const allSongsTabs = ["All", "Rock", "Pop", "Jazz", "Blues"];

	const handleToggle = () => {
		SetCarouselToggle(!carouselToggle);
	};

	useEffect(() => {
		if (filterSource) {
			filterSource().then((response) => {
				const { data } = response;
				setFilters([...filters, ...data]);
			});
		}
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setSelectedFilterIndex(newValue);
	};
	function TabPanel(props) {
		const { children, value, index } = props;
		return <div>{value === index && <>{children}</>}</div>;
	}

	const showFilters = filters.length > 1;
	const filteredData =
		selectedFilterIndex !== 0
			? data.filter(
					(card) => card.genre.key === filters[selectedFilterIndex].key,
			  )
			: data;

	const limitFilter = filters.slice(0, 5);
	console.log(filteredData);
	function a11yProps(index) {
		return {
			id: `filter-tab-${index}`,
		};
	}
	const newFilteredData = (tabIndex) => {
		if (tabIndex === 0) {
			return data; // Show all data for the "All" tab.
		} else {
			const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
			return data?.filter(
				(item) => item?.genre?.key === tabLabel?.toLowerCase(),
			);
		}
	};

	return (
		<div>
			<div className={Styles.header}>
				<h3 style={{ fontSize: "20px" }}>{title}</h3>
				<h4 className={Styles.toggleText} onClick={handleToggle}>
					{carouselToggle ? "Show All" : "Collapse All"}
				</h4>
			</div>
			{showFilters && (
				<div className={Styles.typeFilter}>
					<Tabs
						style={{ minHeight: "36px" }}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						TabIndicatorProps={{
							style: {
								backgroundColor: "var(--color-primary)",
							},
						}}
						className={Styles.tab}
					>
						{limitFilter.map((genre, i) => (
							<Tab
								className={Styles.tabStyles}
								key={genre.key}
								label={genre.label}
								{...a11yProps(i)}
							/>
						))}
					</Tabs>
				</div>
			)}
			{!data?.length ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<>
					{allSongsTabs?.map((_, index) => (
						<TabPanel key={index} value={value} index={index}>
							<div className={Styles.cardWrapper}>
								{!carouselToggle ? (
									<div className={Styles.wrapper}>
										{newFilteredData?.map((item) => (
											<Card key={item?.id} data={item} type={type} />
										))}
									</div>
								) : (
									<Carousel
										data={newFilteredData(index)}
										componentRender={(ele) => <Card data={ele} type={type} />}
									/>
								)}
							</div>
						</TabPanel>
					))}
				</>
			)}
		</div>
	);
}
