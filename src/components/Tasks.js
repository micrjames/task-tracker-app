import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<div id="tasks">
			{tasks.map((task) => (
				<Task key={task.id} 
						task={task} 
						onDelete={onDelete} 
						onToggle={onToggle}
				/>
			))}
		</div>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		day: PropTypes.string.isRequired,
		reminder: PropTypes.bool.isRequired
	})).isRequired,
	onDelete: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired
};

export default Tasks;
