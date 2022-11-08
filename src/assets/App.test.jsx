/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import App from '../App';

describe('Snapshot', () => {
	test('Snpashot app', () => {
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});
});
