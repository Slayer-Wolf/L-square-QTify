import React, { useEffect } from "react";

// Import Swiper React components and hooks
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// By default Swiper React uses core version of Swiper (without any additional modules).
// If you want to use Navigation, Pagination and other modules, you have to install them first.
import { Navigation } from "swiper/modules";

const Controls = ({ data }) => {
	let swiper = useSwiper();

	useEffect(() => {
		swiper.slideTo(0, 1);
	}, [data]);

	return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				initialSlide={0}
				spaceBetween={40}
				slidesPerView={"auto"}
				modules={[Navigation]}
				allowTouchMove
			>
				<Controls data={data} />
				<CarouselLeft />
				<CarouselRight />

				{data.map((item, index) => (
					<SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;

/*
1. rafce shortcut

2. swiper.slideTo(index, speed, runCallbacks):	
    Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.

3.  In React, a swiper component is typically used to create interactive and touch-enabled carousels or slideshows. 
    It allows users to swipe through a series of content panels horizontally or vertically on touch-enabled devices or through mouse drag on desktop browsers.


*/
