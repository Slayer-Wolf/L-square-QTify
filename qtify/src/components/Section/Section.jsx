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
	function handleChange(e, newValue) {
		setValue(newValue);
		setSelectedFilterIndex(newValue);
	}
	console.log(filters, "filterdata");
	const showFilters = filters.length > 1;
	const CardToShow = data.filter((card) =>
		showFilters && selectedFilterIndex !== 0
			? card.genre.key === filters[selectedFilterIndex].key
			: card,
	);
	let limitFilter = filters.slice(0, 5);

	function a11yProps(index) {
		return {
			id: `filter-tab-${index}`,
		};
	}

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
						{limitFilter?.map((genre, i) => {
							return (
								<Tab
									className={Styles.tabStyles}
									key={genre.key}
									label={genre.label}
									{...a11yProps(i)}
								/>
							);
						})}
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
				<div className={Styles.cardWrapper}>
					{!carouselToggle ? (
						<div className={Styles.wrapper}>
							{CardToShow?.map((item) => (
								<Card key={item?.id} data={item} type={type} />
							))}
						</div>
					) : (
						<Carousel
							data={CardToShow}
							componentRender={(ele) => <Card data={ele} type={type} />}
						/>
					)}
				</div>
			)}
		</div>
	);
}
