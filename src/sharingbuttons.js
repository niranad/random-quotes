import React from 'react';
import PropTypes from 'prop-types';
import { Facebook, Tumblr, Twitter } from 'react-sharingbuttons';

const buttonStyle = {
  width: 15,
  padding: 5,
};

export const SharingButtons = ({ quote, author }) => {
  const url = 'https://niranad.github.io/random-quotes';

  return (
    <div>
      <Twitter id='tweet-quote' url={url} shareText={quote + ' -' + author} />
      <Facebook url={url} />
      <Tumblr
        style={buttonStyle}
        url={url}
        title='Quote of the day!'
        caption={quote}
        content={`A favorite quote by ${author}`}
      />
    </div>
  );
};

SharingButtons.defaultProps = {
  quote: 'With wisdom is understanding.',
  author: 'God',
};
SharingButtons.propTypes = { quote: PropTypes.string.isRequired };
