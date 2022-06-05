import React from 'react';
import PropTypes from 'prop-types';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Tumblr from 'react-sharingbuttons/dist/buttons/Tumblr';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';

const buttonStyle = {
	width: 15,
	padding: 5
}

export const SharingButtons = ({ quote , author }) => {
	const url = "https://codepen.io/niranad/full/RwpGEGM";
	const shareText = quote + " -" + author;
	const tumblr = {
		title: "A favorite quote",
		caption: shareText,
		content: url
	}

	return (
		<div>
			<Twitter id="tweet-quote" url={url} shareText={shareText} />
			<Facebook url={url} />
			<Tumblr 
				style={buttonStyle} url={url} title={tumblr.title} 
				caption={tumblr.caption} content={tumblr.content}
			/>
		</div>	
	);
}

SharingButtons.defaultProps = { quote: "With wisdom is understanding." };
SharingButtons.propTypes = { quote: PropTypes.string.isRequired };
