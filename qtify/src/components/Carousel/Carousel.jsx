import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
import styles from "./Carousel.module.css";

export default function Carousel({ data, componentRender }) {
	return (
		<div className={styles.wrapper}>
			<Swiper
				initialSlide={0}
				slidesPerView={"auto"}
				spaceBetween={30}
				allowTouchMove
			>
				<CarouselRightNavigation />
				<CarouselLeftNavigation />

				{data.map((item, idx) => (
					<SwiperSlide key={idx}>{componentRender(item)}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
