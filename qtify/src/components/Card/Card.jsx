import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

export default function Card({ data, type }) {
	const getCard = (type) => {
		switch (type) {
			case "album": {
				const { image, follows, title, songs } = data;

				return (
					<Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
						<div className={styles.wrapper}>
							<div className={styles.card}>
								<img src={image} alt="album" />
								<div className={styles.banner}>
									<Chip
										className={styles.chip}
										label={`${follows} Follows`}
										size="small"
									/>
								</div>
							</div>
							<div className={styles.titleWrapper}>
								<p>{title}</p>
							</div>
						</div>
					</Tooltip>
				);
			}
			case "songs": {
				const { image, likes, title } = data;

				return (
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<img src={image} alt="song" />
							<div className={styles.banner}>
								<div className={styles.chip}>
									<p>{likes} Likes</p>
								</div>
							</div>
						</div>
						<div className={styles.titleWrapper}>
							<p>{title}</p>
						</div>
					</div>
				);
			}

			default:
				return <></>;
		}
	};
	return getCard(type);
}
