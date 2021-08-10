import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { darkColorsTheme, lightColorsTheme, ThemeColors } from '../../context/themeColors';
import { sizeMedia } from '../../styles/mediaQuery';

export const Switch = () => {

	const { darkTheme, changeTheme } = useContext(ThemeContext);
	const [activeSwich, setActiveSwich] = useState(false);

	const swithChangeTheme = () => {
		changeTheme();
		setActiveSwich(!activeSwich)
	};

	return (
		<ContainerSwitch>
			<StyledSwith
				className={activeSwich ? 'active' : ''}
				onClick={swithChangeTheme}
				themeColors={darkTheme ? darkColorsTheme : lightColorsTheme}
			>
				<span><i className="fas fa-sun"></i></span>
				<span><i className="fas fa-moon"></i></span>
			</StyledSwith>
		</ContainerSwitch>
	)
}

const ContainerSwitch = styled.div`
    width: 55px;
    position:absolute;
    right: 0;
`;

const StyledSwith = styled.div<{

	themeColors: ThemeColors;
}>`
    bottom: 0;
    right: 0;
    
	background: #343d58;
	border-radius: 100px;
	border: none;
	position: relative;
	cursor: pointer;
	display: flex;
	outline: none;
	
	&::after {
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		position: absolute;
		background: ${({ themeColors }) => themeColors.primaryColor};
		top: 0;
		left: 0;
		right: unset;
		border-radius: 100px;
		transition: 0.3s ease all;
		box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
	}
	&.active {
		background: #fff;
		color: #000;
		&::after {
			right: 0;
			left: unset;
		}
	}
	span {
		width: 30px;
		height: 30px;
		line-height: 30px;
		display: block;
		background: none;
		color: #fff;
	}
	@media ${sizeMedia('sm')} {
        margin :2rem 0;
    }

`;