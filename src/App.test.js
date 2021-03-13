import { render, screen } from '@testing-library/react';
import AppContainer from './AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/find users/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('render iwthout chrashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AppContainer/> , div);
	ReactDOM.unmountComponentAtNode(div);
})
