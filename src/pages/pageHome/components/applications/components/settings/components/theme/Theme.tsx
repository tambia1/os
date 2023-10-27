import * as S from "./Theme.styles";
import { List } from "@src/components/list/List";
import { Text } from "@src/components/text/Text";
import { Icon } from "@src/components/icon/Icon";
import { useTheme } from "@src/theme/hooks/UseTheme";
import { themes } from "@src/theme/Theme.types";
import { useLanguage } from "@src/language/hooks/UseLanguage";

export const Theme = () => {
	const { lang } = useLanguage();
	const { theme, setTheme } = useTheme();

	const handleOnClickLight = () => {
		setTheme(themes.light);
	};

	const handleOnClickDark = () => {
		setTheme(themes.dark);
	};

	return (
		<S.Theme>
			<List.Section>
				<Text>{lang.settings.theme.title}</Text>
			</List.Section>

			<List>
				<List.Cell onClick={handleOnClickLight}>
					<List.Cell.Image>
						<Icon iconName="globe" />
					</List.Cell.Image>
					<List.Cell.Text>
						<Text>{lang.settings.theme.light}</Text>
					</List.Cell.Text>
					<List.Cell.Arrow>
						<Icon iconName={theme.themeName === "light" ? "v" : ""} />
					</List.Cell.Arrow>
				</List.Cell>

				<List.Cell onClick={handleOnClickDark}>
					<List.Cell.Image>
						<Icon iconName="globe" />
					</List.Cell.Image>
					<List.Cell.Text>
						<Text>{lang.settings.theme.dark}</Text>
					</List.Cell.Text>
					<List.Cell.Arrow>
						<Icon iconName={theme.themeName === "dark" ? "v" : ""} />
					</List.Cell.Arrow>
				</List.Cell>
			</List>
		</S.Theme>
	);
};
