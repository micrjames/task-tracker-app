import { useState, useEffect } from "react";
import usePath from './usePath';

const useAboutLink = link => {
	const [showAboutLink, setShowAboutLink] = useState(true);

	const [path] = usePath(link);

	useEffect(() => {
		if(path === '/about') setShowAboutLink(false);
		else setShowAboutLink(true);
	}, [path]);

	return [showAboutLink];
};

export default useAboutLink;
