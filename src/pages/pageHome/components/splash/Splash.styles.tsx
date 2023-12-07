import { Animate } from "@src/components/animate/Animate";
import styled from "styled-components";
import logo from "./assets/logo.png";

export const Splash = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 1rem;
	box-sizing: border-box;

	color: #ffffff;
	background-color: #000000;

	z-index: 1;
`;

export const Logo = styled(Animate)`
	position: relative;
	background-image: url(${logo});
	background-size: contain;
	width: 10rem;
	height: 10rem;
`;

export const Version = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
`;
