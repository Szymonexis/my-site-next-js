import styled from 'styled-components';

export interface ButtonStyleProps {
	inverted?: boolean;
}

export const button = styled.button<ButtonStyleProps>`
	border-radius: 1rem;
	border: none;
	background-color: ${({ inverted }) => (inverted ? 'black' : 'white')};
	color: ${({ inverted }) => (inverted ? 'white' : 'black')}
`;
