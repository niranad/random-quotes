import PropTypes from 'prop-types';

export const ShareButtons = ({bgColor, quote, author}) => {
	const styles = {
		backgroundColor: bgColor, 
		color: "black"
	}
	const tweet = quote + " -" + author;

	return (
		<div>
			<a 
	      id="tweet-quote" 
	      className="btn btn-default" 
	      style={styles}
	      href={`https://twitter.com/intent/tweet?text=${tweet.replace(/\s/g, "%20")}`}
	      data-text={quote}
	      target="_top" 
	      rel="noreferrer"
	    >
	    	<i className="fa fa-twitter"><strong> Tweet</strong></i>
	    </a>
	    <a 
	    	id="fshare"
		    className="btn btn-default"
		    style={styles}
		    href="https://www.facebook.com/sharer/sharer.php?u=codepen.io/niranad/full/RwpGEGM" 
		    target="_blank"
		    rel="noreferrer"
	    >
	    	<i className="fa fa-facebook"><strong> Share</strong></i>
	    </a>
		</div>
	)
}

ShareButtons.propTypes = {
	quote: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}