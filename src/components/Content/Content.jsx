import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { content_style } from './Content.module.css';
import FindUsersContainer from './FindUsers/FindUsersContainer'
import ProfileContainerWithHook from './Profile/ProfileContainerWithHook';
// const ProfileContainerWithHook = React.lazy(() => import('./Profile/ProfileContainerWithHook'));

const Content = () => {
	
	return (
		<div className={content_style}>
				{/* <Suspense fallback={<div>...Loading</div>}></Suspense> */}
				<Switch>
					<Route path='/profile/:userId?' render={() => <ProfileContainerWithHook/>}/>
					<Route path='/messages' render={() => <MessagesContainer />}/>
					<Route exact path='/findUsers'>
						<FindUsersContainer/>
					</Route>
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</Switch>
		</div>
	)
	
}
export default Content;