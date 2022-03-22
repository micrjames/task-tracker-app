export const aboutHeader = 'About App';
export const aboutText = [
	{id: 1, text: 'Version: 1.0.0'},
	{id: 2, text: 'Add or Remove Tasks'},
	{id: 3, text: 'Set Reminders on Tasks'}
];

export const buttonText = [
	{ id: 1, text: 'Add', color: 'green'},
	{ id: 2, text: 'Close', color: 'red'}
];

export const aboutLinkText = [ 
	{ id: 1, link: '/about', text: 'About'},
	{ id: 2, link: '/', text: 'Go Back'}
];

export const addFormTexts = {
	controls: [
		{ id: 1, type: 'text', field: 'text',
			registerOptions: {
				required: true,
				pattern: /^[A-Z][a-z]{2,9}\s(the|a)\s([A-Z]|[a-z]){2,10}$/
			},
			label: 'Task', text: 'Add Task', prompt: 'Ex. Walk the Dog' },
		{ id: 2, type: 'text', field: 'day',
			registerOptions: {
				required: true,
				pattern: /^((To|Sun|Mon|Tues|Wednes|Thurs|Fri|Satur)day|Tomorrow)\sat\s([1-9]|1[012])[ap]m$/
			},
			label: 'Day & Time', text: 'Add Day & Time', prompt: 'Ex. Tuesday at 5pm' },
		{ id: 3, type: 'checkbox', field: 'reminder', registerOptions: {required: false, pattern: ''}, label: 'Set Reminder', text: '', prompt: '' }
	],
	submission: { id: 4, label: '', text: 'Save Task', prompt: 'Please add a task' }
};
