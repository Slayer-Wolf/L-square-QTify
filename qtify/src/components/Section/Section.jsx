import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Section = ({ title, data, filterSource, type }) => {
	const [filters, setFilters] = useState([]);
	const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
	const [carouselOn, setCarouselOn] = useState(true);

	const toggle = () => {
		setCarouselOn((prevState) => !prevState);
	};
	useEffect(() => {
		if (filterSource) {
			filterSource().then((response) => {
				const { data } = response;
				setFilters([...filters, ...data]);
			});
		}
	}, []);
	const showFilters = filters.length > 1;
	const CardToShow = data.filter((card) =>
		showFilters && selectedFilterIndex !== 0
			? card.genre.key === filters[selectedFilterIndex].key
			: card,
	);

	return (
		// <div>
		// 	<div className={styles.header}>
		// 		<h3>{title}</h3>
		// 		<h4 className={syles.toggleText} onClick={toggle}>
		// 			{!carouselOn ? "Collapse All" : "Show All"}
		// 		</h4>
		// 	</div>
		// 	{showFilters && (
		// 		<div className={styles.filterWrapper}>
		// 			<filters
		// 				filters={filters}
		// 				selectedFilterIndex={setSelectedFilterIndex}
		// 			/>
		// 		</div>
		// 	)}
		// 	{data.length===0 ?(
		// 		<CircularProgress/>
		// 	):(
		// 		<div className={styles.cardWrapper}>
		// 			{!carouselOn ? (
		// 				<div className={styles.wrapper} >
		// 				{CardToShow?CardToShow.map((item)=>{
		// 					<Card data={ele} type={type}/>
		// 				})}
		// 				</div>
		// 			):(
		// 				<Carousel
		// 					data={CardToShow}
		// 					renderComponent={(data)=> <Card data={data} type={type}/>}
		// 				/>
		// 			)}
		// 		</div>
		// 	)}
		// </div>
		<h1>hello</h1>
	);
};

export default Section;
