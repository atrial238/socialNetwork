import React from 'react';
import Friends from './Friends/Friends';
import  {wrapper} from './Sidebar.module.css';
import Navigation from './Navigation/Navigation';



const Sidebar = ({state}) => {
	
	return (
		<div className={wrapper}>
			<Navigation/>
			<Friends friends={state.friends}/>
		</div>
	)
}
export default Sidebar;
