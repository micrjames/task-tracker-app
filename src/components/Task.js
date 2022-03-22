import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div 
			className={`task ${task.reminder ? 'reminder' : ''}`} 
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.text}
				<FaTimes className="icon" onClick={() => onDelete(task.id)} /> 
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		day: PropTypes.string.isRequired,
		reminder: PropTypes.bool.isRequired
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired
};

export default Task;
