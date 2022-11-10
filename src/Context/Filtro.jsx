import { createContext, useContext, useMemo, useState } from 'react';

export const FiltroContext = createContext();
FiltroContext.displayName = 'FiltroContext';

export function FiltroProvider({ children }) {
	const [filtroVideos, setFiltroVideos] = useState('');
	const Videos = useMemo(
		() => ({
			filtroVideos,
			setFiltroVideos,
		}),
		[filtroVideos]
	);

	return (
		<FiltroContext.Provider value={Videos}>{children}</FiltroContext.Provider>
	);
}

export const useFiltroContext = () => {
	const { filtroVideos, setFiltroVideos } = useContext(FiltroContext);

	return {
		filtroVideos,
		setFiltroVideos,
	};
};

export default FiltroProvider;
