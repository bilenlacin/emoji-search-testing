import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import EmojiResults from './EmojiResults';
import filterEmoji from './filterEmoji';

test('isRenderingEmojiResults', () => {
  const emojiData = filterEmoji('', 20);
  const { container } = render(<EmojiResults emojiData={emojiData} />);
  expect(container.firstChild).toHaveClass('component-emoji-results');
  expect(container.childNodes.length === 20);
});
