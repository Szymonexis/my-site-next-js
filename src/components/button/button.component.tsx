import { FC } from 'react';
import styles from './button.component.module.scss';

export interface ButtonProps {
	text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
	return (
		<>
			<button className={styles.button}>{text.toUpperCase()}</button>
		</>
	);
};
