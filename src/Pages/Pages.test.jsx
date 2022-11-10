/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Home } from './Home';
import { useFiltroContext } from '../Context/Filtro';

jest.mock('../Context/Filtro', () => {
	return {
		useFiltroContext: jest.fn(),
	};
});

describe('Teste de Snapshot', () => {
	beforeEach(() => {
		useFiltroContext.mockReturnValue([]);
	});

	test('Snpashot da página Home', () => {
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
