import * as S from "./Settings.styles";
import { usePager } from "@src/components/pager/hooks/UsePager";
import { Pager } from "@src/components/pager/Pager";
import { Language } from "./../language/Language";
import { Theme } from "./../theme/Theme";
import { List } from "@src/components/list/List";
import { Text } from "@src/components/text/Text";
import { Icon } from "@src/components/icon/Icon";
import { About } from "../about/About";
import { useLanguage } from "@src/components/language/hooks/UseLanguage";

export const Settings = () => {
	const pager = usePager();
	const { language } = useLanguage();

	const handleOnClickLanguage = () => {
		pager.pushPage(<Pager.Page id="language" title={language.settings.language.title} body={<Language />} />);
	};

	const handleOnClickTheme = () => {
		pager.pushPage(<Pager.Page id="theme" title={language.settings.theme.title} body={<Theme />} />);
	};

	const handleOnClickAbout = () => {
		pager.pushPage(<Pager.Page id="about" title={language.settings.about} body={<About />} />);
	};

	return (
		<S.Settings>
			<List.Title>
				<Text>{language.settings.apearance}</Text>
			</List.Title>

			<List>
				<List.Cell onClick={handleOnClickLanguage}>
					<List.Cell.Image>
						<Icon iconName="globe" size="s" />
					</List.Cell.Image>
					<List.Cell.Text>
						<Text>{language.settings.language.title}</Text>
					</List.Cell.Text>
					<List.Cell.Arrow>
						<Icon iconName="chevronRight" size="s" />
					</List.Cell.Arrow>
				</List.Cell>

				<List.Cell onClick={handleOnClickTheme}>
					<List.Cell.Image>
						<Icon iconName="aperture" size="s" />
					</List.Cell.Image>
					<List.Cell.Text>
						<Text>{language.settings.theme.title}</Text>
					</List.Cell.Text>
					<List.Cell.Arrow>
						<Icon iconName="chevronRight" size="s" />
					</List.Cell.Arrow>
				</List.Cell>
				<List.Cell onClick={handleOnClickAbout}>{language.settings.about}</List.Cell>
			</List>
		</S.Settings>
	);
};
