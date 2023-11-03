import styled from "styled-components";

export const DropDown = styled.div`
	width: 15rem;
`;

export const ListContainer = styled.div<{ $isOpen: boolean }>`
	margin-top: 0.1rem;
	display: grid;
	grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
	opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
	transition: all 0.3s ease;
`;

export const ContainerIconArrow = styled.div<{ $isOpen: boolean }>`
	transition: all 0.3s ease;

	transform: rotateX(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
`;
