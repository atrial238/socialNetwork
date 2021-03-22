import React from 'react';
import Friends from './Friends/Friends';
import  {wrapper} from './Sidebar.module.css';

const Sidebar = ({friends}) => {
	
	return (
		<div className={wrapper}>
			<Friends friends={friends}/>
		</div>
	)
}

export default Sidebar;