import { useState, useEffect } from 'react';
import { HOST, PORT } from '../config_server';
import { fetchData } from '../fetchData';

const useFetch = taskArr => {
	const [tasks, setTasks] = useState(taskArr);

	const fetchTasks = async () => {
		return await fetchData(`http://${HOST}:${PORT}/tasks`);
	}; 

	useEffect(() => {
		(async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		})();
	}, []);

	return [tasks, setTasks];
};

export default useFetch;
