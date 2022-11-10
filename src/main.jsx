import React from 'react';
import ReactDOM from 'react-dom/client';
import { FiltroProvider } from './Context/Filtro';

import { AppRouter } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FiltroProvider>
			<AppRouter />
		</FiltroProvider>
	</React.StrictMode>
);
