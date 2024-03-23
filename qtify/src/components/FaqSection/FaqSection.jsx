import React from "react";
import FaqAccordian from "../Accordian/FaqAccordian";
import styles from "./FaqSection.module.css";

function FaqSection() {
	const faqsData = [
		{
			id: "q1_faq",
			heading: "Is Qtify free to use?",
			content: "Yes! It is 100% free, and has 0% ads!",
		},
		{
			id: "q2_faq",
			heading: "Can I download and listen to songs offline?",
			content:
				"Sorry, unfortunately we don't provide the service to download any songs.",
		},
	];

	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>FAQs</h3>
			<div className={styles.faqsAccordion}>
				{faqsData.map((faq) => {
					return <FaqAccordian key={faq.id} data={faq} />;
				})}
			</div>
		</div>
	);
}

export default FaqSection;
