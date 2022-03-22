import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, onAdd, showAdd, showButton, buttonText }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			{showButton && <Button
				color={showAdd ? buttonText[1].color : buttonText[0].color}
				text={showAdd ? buttonText[1].text : buttonText[0].text}
				onClick={onAdd}
			/>}
		</header>
	);
};

Header.defaultProps = { title: 'Title' };

Header.propTypes = {
	title: PropTypes.string,
	onAdd: PropTypes.func.isRequired,
	showAdd: PropTypes.bool.isRequired,
	showButton: PropTypes.bool.isRequired,
	buttonText: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		color: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired 
	})).isRequired
};

export default Header;
