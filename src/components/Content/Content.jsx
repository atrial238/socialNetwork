import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import { content_container } from './Content.module.scss';
import FindUsersContainer from './FindUsersContainer/FindUsersContainer'
import ProfileContainer from './Profile/ProfileContainer';
import Page404 from '../common/Page404/Page404';

const Content = () => {
	
	return (
		<div className={content_container}>
			<Switch>
				<Route exact path='/' render={() => <ProfileContainer/>}/>
				<Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
				<Route exact path='/messages/:userId?' render={() => <MessagesContainer />}/>
				<Route exact path='/findUsers' render={() => <FindUsersContainer />}/> 
				<Route path='*' render={()=> <Page404 />}/>
			</Switch>
		</div>
	)
}
export default Content;