import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Loading from './components/common/Loading/Loading';
import Content from './components/Content/Content';
import Login from './components/Content/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import {initializedThunk} from './redux/app-reducer';
import {compose} from 'redux';

class App extends Component {

	componentDidMount = () => this.props.initializedThunk();
	
	render(){
		const {isInintApp, friends, isAuth} = this.props;
		if(!isInintApp) return <Loading/>
		
		return (
			<>
				<Route path='/login' component={Login}/>
				<Route exact path='/' >
					{	
						isAuth 
								? <Redirect to='/login'/> 
								: <div className='app_wrapper'>
										<HeaderContainer/>
										<Sidebar friends={friends}/>
										<Content className='app_wrapper_content'/>
								 </div>
					}
				</Route>
			</>
		)
	}
} 

const mapStateToProps = (state) => {
	return {
		isInintApp: state.app.initialized,
		friends: state.sidebar.friends,
		isAuth: state.auth.resultCode
	}
}
export default connect(mapStateToProps, {initializedThunk})(App);
