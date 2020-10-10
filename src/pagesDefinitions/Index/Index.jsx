import React from 'react';
import App from '../../containers/App/App.jsx';
import Desktop from '../../components/Desktop/Desktop.jsx';
import Taskbar from '../../components/Taskbar/Taskbar.jsx';
import BackgroundSection from '../../components/BackgroundSection/BackgroundSection.jsx';

const IndexPage = () => (
	<App childer={[]}>
		<Desktop />
		<Taskbar />
		<BackgroundSection />
	</App>
);

export default IndexPage;
