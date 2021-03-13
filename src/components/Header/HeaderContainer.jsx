import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthData, logoutUser} from '../../redux/auth-reucer';

const HeaderContainer = ({userAuth, logoutUser}) => <Header {...userAuth} logoutUser={logoutUser}/> 

const mapStateToProps = state => ({userAuth: state.auth});

export default connect(mapStateToProps, {getAuthData, logoutUser})(HeaderContainer);