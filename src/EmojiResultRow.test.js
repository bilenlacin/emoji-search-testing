import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import EmojiResultRow from './EmojiResultRow';
import filterEmoji from './filterEmoji';

test('isRenderingEmojiResult', () => {
  const emojiData = filterEmoji('', 20);
  const { container } = render(
    <EmojiResultRow
      key={emojiData[0].title}
      symbol={emojiData[0].symbol}
      title={emojiData[0].title}
    />
  );

  expect(container.firstChild).toHaveClass('component-emoji-result-row');
  expect(container.getElementsByTagName('img')[0].hasAttribute('src'));
  expect(container.getElementsByTagName('img')[0].getAttribute('src') !== '');

  const clipboardDiv = container.getElementsByTagName('div')[0];
  fireEvent.click(clipboardDiv);
  console.log(clipboardDiv.getAttribute('data-clipboard-text'));
  expect(clipboardDiv.getAttribute('data-clipboard-text') === '💯');
});

test('is checking copied item', () => {
  const emojiData = filterEmoji('', 20);
  const { container } = render(
    <EmojiResultRow
      key={emojiData[0].title}
      symbol={emojiData[0].symbol}
      title={emojiData[0].title}
    />
  );

  const clipboardDiv = container.getElementsByTagName('div')[0];
  fireEvent.click(clipboardDiv);
  console.log(clipboardDiv.getAttribute('data-clipboard-text'));
  expect(clipboardDiv.getAttribute('data-clipboard-text') === '💯');
});
