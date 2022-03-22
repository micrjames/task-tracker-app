import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePath = path => { 
	const [whichPath, setWhichPath] = useState(path);
	let location = useLocation();
	useEffect(() => {
		setWhichPath(location.pathname);
	}, [location]);

	return [whichPath];
};

export default usePath;
