import React, { useState } from "react";
import { Modal, Typography, TextField, Box } from "@mui/material";
import { styled } from "@mui/system";
import Button from "../../components/Button/Button";
import styles from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";

const StyledModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContent = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	alignSelf: "center",
	backgroundColor: "var(--color-white)",
	border: "2px solid var(--color-primary)",
	boxShadow: 24,
	padding: theme.spacing(2, 4, 3),
	maxWidth: 450,
	width: "90%",
	outline: "none",
	borderRadius: 8,
	gap: "1rem",
}));

const FeedbackModal = ({ open, handleClose }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = () => {
		// Submit feedback logic here
		console.log("Submitting feedback:", {
			fullName,
			email,
			subject,
			description,
		});
		handleClose();
	};

	return (
		<StyledModal open={open} onClose={handleClose}>
			<ModalContent>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					alignSelf="center"
				>
					<Typography
						style={{ color: "var(--color-black)" }}
						variant="h6"
						fontWeight="bold"
						gutterBottom
					>
						Feedback
					</Typography>
					<button onClick={handleClose} className={styles.cancelBtn}>
						<RxCross2 className={styles.icon} />
					</button>
				</Box>
				<TextField
					className={styles.inputField}
					label="Full Name"
					fullWidth
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
				/>
				<TextField
					className={styles.inputField}
					label="Email"
					fullWidth
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					className={styles.inputField}
					label="Subject"
					fullWidth
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
				<TextField
					className={styles.inputField}
					label="Description"
					fullWidth
					multiline
					rows={4}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button className={styles.submitBtn} onClick={handleSubmit}>
					Submit Feedback
				</Button>
			</ModalContent>
		</StyledModal>
	);
};

export default FeedbackModal;
