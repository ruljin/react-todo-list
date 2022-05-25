import styles from "./header.module.scss";

type HeaderProps = {
	text: string;
};

export const Header = ({ text }: HeaderProps) => (
	<h1 className={styles.header}>{text}</h1>
);
