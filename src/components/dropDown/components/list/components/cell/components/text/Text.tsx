import * as S from "./Text.styles";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const Text = ({ children }: Props) => {
	return <S.Text>{children}</S.Text>;
};