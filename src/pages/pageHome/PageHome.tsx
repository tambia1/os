import { ReactNode, useState } from "react";
import * as S from "./PageHome.styles";
import { useThemeContext } from "@src/theme/UseThemeContext";
import { Icon } from "@src/icons/Icon";
import { ITheme, IThemeName, themes } from "@src/theme/Theme.types";
import { Button } from "./components/button/Button";
import { useLocalesSearchParams } from "@src/pages/pageHome/hooks/useLocalesSearchParams";
import { useThemesSearchParams } from "@src/pages/pageHome/hooks/useThemesSearchParams";
import { useSearchParams } from "react-router-dom";
import { useBarSearchParams } from "./hooks/useBarSearchParams";
import { IAppId } from "./PageHome.types";
import { apps } from "./PageHome.consts";
import { Animate } from "@src/components/animate/Animate";
import { useAnimate } from "@src/components/animate/UseAnimate";
import { ILanguageName } from "@src/locales/i18n.types";
import { useTranslation } from "react-i18next";

export const PageHome = () => {
	const { theme } = useThemeContext();
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentApp, setCurrentApp] = useState<ReactNode>(null);
	const [barPosition, setBarPosition] = useState<S.IBarPosition>("bottom");
	const [isVisibleButtonClose, setIsVisibleButtonClose] = useState(false);
	const animateApp = useAnimate("hide");
	const { setTheme } = useThemeContext();
	const { i18n } = useTranslation();

	useLocalesSearchParams({
		onChange: (language: ILanguageName) => {
			i18n.changeLanguage(language);
		},
	});

	useThemesSearchParams({
		onChange: (themeName: ITheme["themeName"]) => {
			setTheme(themes[themeName]);
		},
	});

	useBarSearchParams({
		onChange: (barPosition: S.IBarPosition) => {
			setBarPosition(barPosition);
		},
	});

	const handleOnClickApplication = (appId: IAppId) => {
		const app = apps.find((app) => app.id === appId)!;
		setCurrentApp(app.component);
		setIsVisibleButtonClose(true);
		animateApp.current.play("appear");
	};

	const handleOnClickClose = () => {
		setIsVisibleButtonClose(false);
		animateApp.current.play("disappear").then(() => {
			setCurrentApp(null);
		});
	};

	const handleOnClickChangeTheme = (themeName: IThemeName) => {
		searchParams.set("theme", themeName);
		setSearchParams(searchParams, { replace: true });
	};

	return (
		<S.PageHome $barPosition={barPosition}>
			<S.Apps>
				<Animate useAnimate={animateApp}>{currentApp}</Animate>

				{apps.map((app) => (
					<Button key={app.id} id={app.id} title={app.title} icon={app.icon} onClick={handleOnClickApplication} />
				))}
			</S.Apps>

			<S.Bar>
				<S.IconClose onClick={handleOnClickClose} $isVisible={isVisibleButtonClose}>
					<Icon iconName="iconXCircle" size={theme.size.l} />
				</S.IconClose>

				<S.IconTheme>
					{theme.themeName === "light" ? <Icon iconName="iconSun" onClick={() => handleOnClickChangeTheme("dark")} /> : <Icon iconName="iconMoon" onClick={() => handleOnClickChangeTheme("light")} />}
				</S.IconTheme>
			</S.Bar>
		</S.PageHome>
	);
};
