/* eslint-disable import/no-extraneous-dependencies */
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
