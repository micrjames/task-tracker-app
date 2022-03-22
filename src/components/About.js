import React from 'react';
import PropTypes from 'prop-types';

const About = ({ aboutHeader, aboutText }) => {
	return (
		<div className="about">
			<h2>{aboutHeader}</h2>
			<div>
			<ul>
				{aboutText && aboutText.map(line =>
					<li key={line.id}>{line.text}</li>
				)}
			</ul>
			</div>
		</div>
	);
};

About.defaultProps = { aboutHeader: 'About' };
About.propTypes = {
	aboutHeader: PropTypes.string,
	aboutText: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired 
	})).isRequired
};

export default About;
