import { Pages } from "@pages/Pages.types";
import { PageNotFound } from "@pages/pageNotFound/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Theme } from "@src/theme/Theme";
import { GlobalStyle } from "@src/styles/globalStyles";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { PageHome } from "./pages/pageHome/PageHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
	const { i18n } = useTranslation();
	const queryClient = new QueryClient();

	return (
		<Suspense fallback="...loading">
			<I18nextProvider i18n={i18n}>
				<BrowserRouter basename="/os">
					<QueryClientProvider client={queryClient}>
						<GlobalStyle />
						<Theme>
							<Routes>
								<Route path={Pages.notFound} element={<PageNotFound />} />
								<Route path={Pages.home} element={<PageHome />} />
							</Routes>
						</Theme>
					</QueryClientProvider>
				</BrowserRouter>
			</I18nextProvider>
		</Suspense>
	);
};
