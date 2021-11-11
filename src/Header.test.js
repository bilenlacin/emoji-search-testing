import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('isRenderingHeader', () => {
  render(<Header />);

  const headerElement = screen.getByText(/Emoji Search/i);
  expect(headerElement).toBeInTheDocument();
});
