/* eslint-disable import/prefer-default-export */
import { React, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import RegisterVideo from './Components/RegisterVideo';
import ColorModeProvider, { ColorModeContext } from './Context/ColorMode';
import { FiltroProvider } from './Context/Filtro';
import { CSSReset } from './global';

import { AppRouter } from './Routes';

const theme = {
	light: {
		backgroundBase: '#f9f9f9',
		backgroundLevel1: '#ffffff',
		backgroundLevel2: '#f0f0f0',
		borderBase: '#e5e5e5',
		textColorBase: '#222222',
	},
	dark: {
		backgroundBase: '#181818',
		backgroundLevel1: '#202020',
		backgroundLevel2: '#313131',
		borderBase: '#383838',
		textColorBase: '#FFFFFF',
	},
};
export function ProviderWrapper({ children }) {
	return <ColorModeProvider initialMode="dark">{children}</ColorModeProvider>;
}
export function MyApp({ children }) {
	const contexto = useContext(ColorModeContext);

	return <ThemeProvider theme={theme[contexto.mode]}>{children}</ThemeProvider>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<FiltroProvider>
		<ColorModeProvider initialMode="dark">
			<MyApp>
				<CSSReset />
				<AppRouter />
				<RegisterVideo />
			</MyApp>
		</ColorModeProvider>
	</FiltroProvider>
);
