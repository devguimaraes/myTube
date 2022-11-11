/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-alert */
import { React, createContext, useState } from 'react';

export const ColorModeContext = createContext({
	mode: '',
	setMode: () => {
		alert('Você precisa me configurar primeiro!');
	},
	toggleMode: () => {
		alert('Você precisa me configurar primeiro!');
	},
});

export default function ColorModeProvider({ initialMode, children }) {
	const [mode, setMode] = useState(initialMode);

	function toggleMode() {
		if (mode === 'dark') setMode('light');
		if (mode === 'light') setMode('dark');
	}

	return (
		<ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
			{children}
		</ColorModeContext.Provider>
	);
}
