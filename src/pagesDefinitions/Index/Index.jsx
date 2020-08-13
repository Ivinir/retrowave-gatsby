import React from 'react';
import App from '../../containers/App/App';
import Desktop from '../../components/Desktop/Desktop';
import Taskbar from '../../components/TaskBar/Taskbar';

const IndexPage = () => (
    <App childer={[]}>
        <Desktop></Desktop>
        <Taskbar></Taskbar>
    </App>
);

export default IndexPage;
