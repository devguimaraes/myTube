/* eslint-disable import/no-extraneous-dependencies */
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Videos } from './Components/PageVideos';

import { Home } from './Pages/Home';

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/videos/:id" element={<Videos />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
