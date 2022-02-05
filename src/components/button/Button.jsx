import clsx from 'clsx';
import styles from './button.module.css';

export const Button = ({ children, variant, onClick }) => {
	const classes = clsx(styles.button, {
		[styles.positive]: variant === 'positive',
		[styles.negative]: variant === 'negative',
	});

	return (
		<button className={classes} type='button' onClick={onClick}>
			{children}
		</button>
	);
};
