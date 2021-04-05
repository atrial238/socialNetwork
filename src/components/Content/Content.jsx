import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import { content_container } from './Content.module.scss';
import FindUsersContainer from './FindUsersContainer/FindUsersContainer'
import ProfileContainer from './Profile/ProfileContainer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// const ProfileContainerWithHook = React.lazy(() => import('./Profile/ProfileContainerWithHook'));

const Content = () => {
	
	return (
		<div className={content_container}>
				{/* <Suspense fallback={<div>...Loading</div>}></Suspense> */}
				<ErrorBoundary>
					<Switch>
						<Route exact path='/' render={() => <ProfileContainer/>}/>
						<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
						<Route path='/messages' render={() => <MessagesContainer />}/>
						<Route path='/findUsers' render={() => <FindUsersContainer />}/>
					</Switch>
				</ErrorBoundary>
		</div>
	)
}
export default Content;