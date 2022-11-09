/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Teste de Snapshot', () => {
	test('Snpashot da página Home', () => {
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
