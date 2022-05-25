import styles from "./input.module.scss";

import type { ChangeEvent } from "react";

type InputProps = {
	value: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, placeholder, onChange }: InputProps) => (
	<input
		className={styles.input}
		type="text"
		placeholder={placeholder && placeholder}
		value={value}
		onChange={onChange}
	/>
);
