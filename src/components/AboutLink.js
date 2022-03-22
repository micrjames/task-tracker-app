import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AboutLink = ({ showLink, aboutLinkText }) => {
	return (
		<div id='about-link'>
			<Link id='link'
					to={showLink ? aboutLinkText[0].link : aboutLinkText[1].link}
			>{showLink ? aboutLinkText[0].text : aboutLinkText[1].text}</Link>	
		</div>
	);
};

AboutLink.propTypes = {
	showLink: PropTypes.bool.isRequired,
	aboutLinkText: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		link: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired 
	})).isRequired
};

export default AboutLink;
