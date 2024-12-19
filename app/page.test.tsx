import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page from './page';

test('renders page component', () => {
	render(<Page />);
	const linkElement = screen.getByText(/page content/i);
	expect(linkElement).toBeInTheDocument();
});