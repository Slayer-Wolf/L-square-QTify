import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Styles from "./Section.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Section({ title, data, filterSource, type }) {
	const [carouselToggle, setCarouselToggle] = useState(true);
	const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
	const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (filterSource) {
			filterSource().then((response) => {
				const { data } = response;
				setFilters([{ key: "all", label: "All" }, ...data]); // Update setFilters to include "All" filter
			});
		}
	}, [filterSource]); // Remove filters from dependency array

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setSelectedFilterIndex(newValue); // Set selectedFilterIndex instead of value
	};

	function TabPanel(props) {
		const { children, value, index } = props;
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`filter-tabpanel-${index}`}
				aria-labelledby={`filter-tab-${index}`}
			>
				{value === index && <>{children}</>}
			</div>
		);
	}

	function a11yProps(index) {
		return {
			id: `filter-tab-${index}`,
		};
	}

	const showFilters = filters.length > 1;

	const newFilteredData = (tabIndex) => {
		if (tabIndex === 0) {
			return data; // Show all data for the "All" tab.
		} else {
			const tabLabel = filters[tabIndex]?.key;
			return data.filter((item) => item.genre.key === tabLabel.toLowerCase());
		}
	};

	return (
		<div>
			<div className={Styles.header}>
				<h3 style={{ fontSize: "20px" }}>{title}</h3>
				<h4
					className={Styles.toggleText}
					onClick={() => setCarouselToggle(!carouselToggle)}
				>
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
						{filters.map((genre, i) => (
							<Tab
								className={Styles.tabStyles}
								key={genre.key + i} // Ensure key is unique
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
					{filters.map((_, index) => (
						<TabPanel key={index} value={value} index={index}>
							<div className={Styles.cardWrapper}>
								{!carouselToggle ? (
									<div className={Styles.wrapper}>
										{newFilteredData(index).map((item, i) => (
											<Card key={item.id + i} data={item} type={type} /> // Ensure key is unique
										))}
									</div>
								) : (
									<Carousel
										data={newFilteredData(index)}
										componentRender={(ele) => (
											<Card key={ele.id} data={ele} type={type} />
										)} // Ensure key is unique
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
