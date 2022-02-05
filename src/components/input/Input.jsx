import styles from './input.module.css';

export const Input = ({ value, placeholder, onChange }) => (
	<input
		className={styles.input}
		type='text'
		placeholder={placeholder && placeholder}
		value={value}
		onChange={onChange}
	/>
);
