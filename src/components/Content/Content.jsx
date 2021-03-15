import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { content_style } from './Content.module.css';
import FindUsersContainer from './FindUsers/FindUsersContainer'
import Login from './Login/Login';
import Loading from '../common/Loading/Loading';

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const Content = () => {
	
	return (
		<div className={content_style}>
				<Suspense fallback={<div>...Loading</div>}>
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
				</Suspense>
				<Route path='/messages' render={() => <MessagesContainer />}/>
				<Route path='/findUsers' render={() => <FindUsersContainer/>}/>
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />
				<Route path='/login' component={Login}/>
		
		</div>
	)
	
}
export default Content;