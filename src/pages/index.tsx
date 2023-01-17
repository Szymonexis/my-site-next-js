import { IntroText } from '@/components/intro-text/intro-text.component';
import { useEffect, useState } from 'react';

export default function Intro() {
	const texts: { normal: string; animated?: string }[] = [
		{ normal: 'Hi :)' },
		{ normal: 'My name is Simon' },
		{ normal: 'I am a', animated: 'Software Developer' },
	];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setIndex(1);
		}, 4000);

		setTimeout(() => {
			setIndex(2);
		}, 8000);
	}, []);

	return (
		<>
			{index === 0 && (
				<IntroText
					text={texts[index].normal}
					animated={texts[index].animated}
				></IntroText>
			)}
			{index === 1 && (
				<IntroText
					text={texts[index].normal}
					animated={texts[index].animated}
				></IntroText>
			)}
			{index === 2 && (
				<IntroText
					text={texts[index].normal}
					animated={texts[index].animated}
					noOut
				></IntroText>
			)}
		</>
	);
}
