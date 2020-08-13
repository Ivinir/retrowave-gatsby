import React from 'react';
import App from '../../containers/App/App.jsx';
import Desktop from '../../components/Desktop/Desktop.jsx';
import Taskbar from '../../components/Taskbar/Taskbar.jsx';

const IndexPage = () => (
	<App childer={[]}>
		<Desktop />
		<Taskbar />
	</App>
);

export default IndexPage;
