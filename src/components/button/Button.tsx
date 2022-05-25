import clsx from "clsx";
import styles from "./button.module.scss";

import type { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	variant: string;
	disabled?: boolean;
	onClick: () => void;
};

export const Button = ({
	children,
	variant,
	disabled = false,
	onClick,
}: ButtonProps) => {
	const classes = clsx(styles.button, {
		[styles["button--positive"]]: variant === "positive",
		[styles["button--negative"]]: variant === "negative",
	});

	return (
		<button
			className={classes}
			type="button"
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};
