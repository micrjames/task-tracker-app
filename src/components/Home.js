import React from 'react';
import PropTypes from 'prop-types';

import Tasks from './Tasks';
import AddTask from './AddTask';
import useFetch from '../hooks/useFetch';
import { HOST, PORT } from '../config_server';
import { fetchData, setOption } from '../fetchData';

const Home = ({ noTask, showAddTask, formTexts }) => {
	const [tasks, setTasks] = useFetch([]);

	// Add Task
	const addTask = async task => {
		const data = await fetchData(`http://${HOST}:${PORT}/tasks`, setOption('POST', task)); 

		setTasks([...tasks, data]);
	};

	// Update Tasks
	const updateTasks = async (id, callback) => {
		const taskToUpdate =  await fetchData(`http://${HOST}:${PORT}/tasks/${id}`);
		callback(taskToUpdate);
		const updatedTasks = await fetchData(`http://${HOST}:${PORT}/tasks/${id}`, setOption('PUT', taskToUpdate)); 

		return updatedTasks;
	};

	// Delete Task
	const deleteTask = async id => {
		await fetch(`http://${HOST}:${PORT}/tasks/${id}`, {
			method: 'DELETE'
		});

		setTasks(tasks.filter(task => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = async id => {
		const data = await updateTasks(id, obj => {
			obj['reminder'] = !obj['reminder'];
		}); 

		setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task));
	};

	return (
		<div className="home">
			{showAddTask && <AddTask onAdd={addTask} formTexts={formTexts} />}
			{tasks.length > 0 ?
				<Tasks tasks={tasks}
						onDelete={deleteTask}
						onToggle={toggleReminder}
				/> : <span id="no-task">{noTask}</span>
			}
		</div>
	);
};

Home.defaultProps = { noTask: 'No Tasks To Show' }
Home.propTypes = {
	noTask: PropTypes.string,
	showAddTask: PropTypes.bool.isRequired,
};

export default Home;
