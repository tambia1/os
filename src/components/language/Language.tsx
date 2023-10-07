import { ReactNode, useEffect, useState } from "react";
import { LanguageContext } from "./hooks/UseLanguage";
import { useSearchParams } from "react-router-dom";
import { ILanguage, ILanguageName, languages } from "@src/locale/Language.types";
import { all } from "@src/locale/all";

const defaultLanguageName: ILanguageName = import.meta.env.VITE_LANGUAGE || "en";
const defaultLanguage: ILanguage = languages[defaultLanguageName];

interface Props {
	children: ReactNode;
}

export const Language = ({ children }: Props) => {
	const [language, setCurrentLanguage] = useState(defaultLanguage);
	const [searchParams, setSearchParams] = useSearchParams();
	const [key, setKey] = useState(0);

	const setLanguage = (language: ILanguage) => {
		setCurrentLanguage(language);
		searchParams.set("language", language.languageName);
		setSearchParams(searchParams, { replace: true });
		setKey(key + 1);
	};

	useEffect(() => {
		const languageNameParam = searchParams.get("language") || "";

		switch (languageNameParam) {
			case languages.en.languageName:
				setCurrentLanguage(languages.en);
				break;

			case languages.fi.languageName:
				setCurrentLanguage(languages.fi);
				break;

			default:
				searchParams.delete("language");
				setSearchParams(searchParams, { replace: true });
				break;
		}
	}, [searchParams]);

	return (
		<LanguageContext.Provider key={key} value={{ all, language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
