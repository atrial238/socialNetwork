import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutUser} from '../../redux/auth-reucer';


const HeaderContainer = props => <Header {...props} />

const mapStateToProps = ({auth}) => ({login: auth.login, avatar: auth.avatar});

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);
