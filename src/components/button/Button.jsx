import clsx from 'clsx';
import styles from './button.module.css';

export const Button = ({ children, variant, disabled, onClick }) => {
	const classes = clsx(styles.button, {
		[styles.positive]: variant === 'positive',
		[styles.negative]: variant === 'negative',
	});

	return (
		<button
			className={classes}
			type='button'
			onClick={onClick}
			disabled={disabled ? true : false}>
			{children}
		</button>
	);
};
