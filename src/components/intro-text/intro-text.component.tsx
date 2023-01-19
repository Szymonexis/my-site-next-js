import { FC, useEffect, useState } from 'react';
import styles from './intro-text.component.module.scss';

export interface IntroTextProps {
	text: string;
	animated?: string;
	noOutAnimation?: boolean;
}

export const IntroText: FC<IntroTextProps> = ({
	text,
	animated,
	noOutAnimation,
}) => {
	const [isIn, setIsIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsIn(true);
		}, 1000);

		if (noOutAnimation) {
			return;
		}

		setTimeout(() => {
			setIsIn(false);
		}, 3000);
	});

	return (
		<>
			<div
				className={`${styles['big-text']} ${
					isIn ? styles['big-text--in'] : styles['big-text--out']
				}`}
			>
				<div>{text}</div>
				{animated && (
					<div className={styles['big-text__animated']}>{animated}</div>
				)}
			</div>
		</>
	);
};
