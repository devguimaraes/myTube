/* eslint-disable import/no-extraneous-dependencies */
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
