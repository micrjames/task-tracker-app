import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import AboutLink from './components/AboutLink';
import useAboutLink from './hooks/useAboutLink';

import { aboutHeader, aboutText, buttonText, aboutLinkText, addFormTexts } from './component_data';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAboutLink] = useAboutLink('/');

  return (
	 <div className="container">
	 	<AboutLink showLink={showAboutLink} aboutLinkText={aboutLinkText} />
	 	<Header title={'Task Tracker'}
	 			onAdd={() => setShowAddTask(!showAddTask)}
	 			showAdd={showAddTask}
	 			showButton={showAboutLink}
	 			buttonText={buttonText}
	 	/>
	 	<Routes>
	 		<Route path='/' element={<Home showAddTask={showAddTask} formTexts={addFormTexts} />} />
			<Route path='/about' element={<About aboutHeader={aboutHeader} aboutText={aboutText} />} />
	 	</Routes>
	 </div>
  );
}

export default App;
