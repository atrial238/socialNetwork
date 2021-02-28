import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { content_style } from './Content.module.css';
import FindUsersContainer from './FindUsers/FindUsersContainer'

const Content = ({store}) => {
	return (
		<div className={content_style}>
			<Route path='/profile' render={() => <ProfileContainer/>}/>
			<Route path='/messages' render={() => <Messages store={store}/>}/>
			<Route path='/findUsers' render={() => <FindUsersContainer/>}/>
			<Route path='/news' component={News} />
			<Route path='/music' component={Music} />
			<Route path='/settings' component={Settings} />
		</div>
	)
	
}
export default Content;