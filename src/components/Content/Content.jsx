import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { content_style } from './Content.module.css';

const Content = ({content, 	dispatch}) => {
	return (
		<div className={content_style}>
			<Route path='/profile' render={() => <Profile 
																profile={content.profile} 
																dispatch={dispatch}
																/>} 
			/>
			<Route path='/messages' render={() => 
				<Messages 
					messages={content.messages}
					dispatch={dispatch}
				/>}
			/>
			<Route path='/news' component={News} />
			<Route path='/music' component={Music} />
			<Route path='/settings' component={Settings} />
		</div>
	)
}
export default Content;