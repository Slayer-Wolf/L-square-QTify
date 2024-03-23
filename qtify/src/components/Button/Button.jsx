import React from "react";
import "./Button.css";

function Button({ children, primary, secondary, other, className, ...props }) {
	let variant = "";

	if (primary) variant = "primary";
	else if (secondary) variant = "secondary";
	// else variant = "other";

	return (
		<button className={`button ${variant} ${className}`} {...props}>
			{children}
		</button>
	);
}

export default Button;
