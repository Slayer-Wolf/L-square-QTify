import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/right.svg";
import styles from "./Carousel.module.css";

export default function CarouselRightNavigation() {
	const swiper = useSwiper();
	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [swiper]);
	return (
		<div className={styles.rightNavigation}>
			{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
		</div>
	);
}
