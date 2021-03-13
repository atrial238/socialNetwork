import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Loading from './components/common/Loading/Loading';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import {initializedThunk} from './redux/app-reducer';

class App extends Component {

	componentDidMount = () => this.props.initializedThunk();

	render(){
		if(!this.props.isInintApp) return <Loading/>
		return (
			<Router>
				<div className='app_wrapper'>
					<HeaderContainer/>
					<Sidebar friends={this.props.friends}/>
					<Content className='app_wrapper_content'/>
				</div>
			</Router>
		)
	}
} 

const mapStateToProps = (state) => {
	return {
		isInintApp: state.app.initialized,
		friends: state.sidebar.friends
	}
}
export default connect(mapStateToProps, {initializedThunk})(App);
