import { ILanguage } from "@src/language/Language.types";
import { all } from "@src/language/translations/all";
import { createContext, useContext } from "react";

interface Props {
	all: typeof all;
	language: ILanguage;
	setLanguage: (language: ILanguage) => void;
}

export const LanguageContext = createContext<Props | null>(null);

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("Language must be rendered as a child component");
	}

	return context;
};
