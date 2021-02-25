import React from 'react';
import Friends from './Friends/Friends';
import  {wrapper} from './Sidebar.module.css';
import Navigation from './Navigation/Navigation';



const Sidebar = ({store}) => {
	
	return (
		<div className={wrapper}>
			<Navigation/>
			<Friends friends={store.getState().sidebar.friends}/>
		</div>
	)
}
export default Sidebar;
