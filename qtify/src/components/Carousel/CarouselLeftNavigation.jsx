import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/left.svg";
import styles from "./Carousel.module.css";

export default function CarouselLeftNavigation() {
	const swiper = useSwiper();
	const [isBegining, setIsBegining] = useState(swiper.isBeginning);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsBegining(swiper.isBeginning);
		});
	}, [swiper]);
	return (
		<div className={styles.leftNavigation}>
			{!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
		</div>
	);
}
