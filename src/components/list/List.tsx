import * as S from "./List.styles";
import { ReactNode } from "react";
import { Cell } from "./components/cell1/Cell";
import { Title } from "./components/title1/Tile";

interface Props {
	children?: ReactNode;
}

export const List = ({ children }: Props) => {
	return <S.Container>{children}</S.Container>;
};

List.Cell = Cell;
List.Title = Title;
