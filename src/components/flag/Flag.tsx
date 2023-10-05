import * as S from "./Flag.styles";
import { FlagName } from "./Flag.types";
import { ISize } from "@src/themes/Theme.types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	className?: string | undefined;
	flagName: FlagName;
	size?: ISize;
}

export const Flag = ({ className, flagName, size = "m", ...rest }: Props) => {
	return <S.Flag className={className} $size={size} $flagName={flagName} {...rest}></S.Flag>;
};
