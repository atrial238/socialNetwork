import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Loading from './components/common/Loading/Loading';
import Content from './components/Content/Content';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import {initializedThunk} from './redux/app-reducer';

class App extends Component {

	componentDidMount = () => this.props.initializedThunk();
	
	render(){
		const {isInintApp, friends, isAuth, isInintAppFail} = this.props;
		
		const entireApp = <div className='app_wrapper'>
									<HeaderContainer/>
									{/* <Sidebar friends={friends}/> */}
									<Content className='app_wrapper_content'/>
								</div>

		return isInintApp ? <Router>
										<Route path='/login' component={Login}/>
										<Route path='/' >
											{isAuth ? entireApp : <Redirect to='/login'/>}
										</Route>
									</Router>
								: <Loading isInintAppFail={isInintAppFail}/>
	}
} 

const mapStateToProps = (state) => ({
		isInintApp: state.app.initialized,
		isInintAppFail: state.app.isInintAppFail,
		friends: state.sidebar.friends,
		isAuth: state.auth.isAuth,
		
});

export default connect(mapStateToProps, {initializedThunk})(App);
