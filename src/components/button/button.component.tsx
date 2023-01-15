import { FC } from 'react';
import { button as StyledButton } from './button.styles';

export interface ButtonProps {
	text: string;
	inverted?: boolean;
}

export const Button: FC<ButtonProps> = ({ text }) => {
	return (
		<>
			<StyledButton>{text}</StyledButton>
		</>
	);
};
