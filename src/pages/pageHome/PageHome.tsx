import { ReactNode, useState } from "react";
import * as S from "./PageHome.styles";
import { useTheme } from "@src/theme/UseTheme";
import { Icon } from "@src/icons/Icon";
import { IThemeName } from "@src/theme/Theme.types";
import { Button } from "./components/button/Button";
import { useLocalesSearchParams } from "@src/locales/useLocalesSearchParams";
import { useThemesSearchParams } from "@src/theme/useThemesSearchParams";
import { useSearchParams } from "react-router-dom";
import { useAppBarSearchParams } from "./useAppBarSearchParams";
import { IAppId } from "./PageHome.types";
import { apps } from "./PageHome.consts";
import { Animate } from "@src/components/animate/Animate";
import { useAnimate } from "@src/components/animate/UseAnimate";

export const PageHome = () => {
	const { theme } = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentApp, setCurrentApp] = useState<ReactNode>(null);
	const [appBarPosition, setAppBarPosition] = useState<S.IAppBarPosition>("bottom");
	const animate = useAnimate("hide");

	useLocalesSearchParams();
	useThemesSearchParams();
	useAppBarSearchParams({
		onChange: (appBarPosition: S.IAppBarPosition) => {
			setAppBarPosition(appBarPosition);
		},
	});

	const handleOnClickApplication = (appId: IAppId) => {
		const app = apps.find((app) => app.id === appId)!;
		setCurrentApp(app.component);
		animate.current.play("appear");
	};

	const handleClose = () => {
		animate.current.play("disappear").then(() => {
			setCurrentApp(null);
		});
	};

	const handleOnClickChangeTheme = (themeName: IThemeName) => {
		searchParams.set("theme", themeName);
		setSearchParams(searchParams, { replace: true });
	};

	return (
		<S.PageHome $appBarPosition={appBarPosition}>
			<S.Apps>
				<Animate useAnimate={animate}>{currentApp}</Animate>

				{apps.map((app) => (
					<Button key={app.id} id={app.id} title={app.title} icon={app.icon} onClick={handleOnClickApplication} />
				))}
			</S.Apps>

			<S.AppBar>
				<S.IconClose onClick={handleClose} $isVisible={!!currentApp}>
					<Icon iconName="iconXCircle" size={theme.size.l} />
				</S.IconClose>

				<S.IconTheme>
					{theme.themeName === "light" ? <Icon iconName="iconSun" onClick={() => handleOnClickChangeTheme("dark")} /> : <Icon iconName="iconMoon" onClick={() => handleOnClickChangeTheme("light")} />}
				</S.IconTheme>
			</S.AppBar>
		</S.PageHome>
	);
};
