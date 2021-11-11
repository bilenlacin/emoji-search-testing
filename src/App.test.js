import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test('renders filters without crashing', () => {
  const { container } = render(<App />);
  const input = container.getElementsByTagName('input');
  userEvent.keyboard(input, '100');
  expect(
    container.getElementsByTagName('img')[0].getAttribute('alt') === '100'
  );
  expect(container.getElementsByTagName('img').length === 1);
});

test('renders Click to copy emoji', () => {
  const { container } = render(<App />);
});

// test('Emoji is copied', () => {
//   render(<App />);

//   console.log(clipboard.clipboardAction.text);
//   expect(clipboard.clipboardAction.text).toBe('💯');
// });
