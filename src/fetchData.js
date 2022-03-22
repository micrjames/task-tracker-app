export const fetchData = async (url, options = {}) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};

export const setOption = (method, bodyData) => {
	return {
		method,
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(bodyData)
	};
};
