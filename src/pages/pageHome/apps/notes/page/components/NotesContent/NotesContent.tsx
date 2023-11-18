import { ReactNode } from "react";
import * as S from "./NotesContent.styles";

interface Props {
	children: ReactNode;
}

export const NotesContent = ({ children }: Props) => {
	return (
		<S.NotesContent>
			<S.TextArea>{children}</S.TextArea>
		</S.NotesContent>
	);
};
