import React from 'react';
import { connect, ConnectedProps  } from 'react-redux';
import Header from './Header';
import { logoutUser} from '../../redux/auth-reucer';
import {stateType} from '../../redux/store';

interface PropsHeaderStateType {login: string | null, avatar: string | null}

export interface PropsHeader extends PropsHeaderStateType {logoutUser: () => void}

const HeaderContainer: React.FC<PropsHeader> = props => <Header {...props} />

const mapStateToProps = (state: stateType): PropsHeaderStateType => ({login: state.auth.login, avatar: state.auth.avatar});

export default connect<PropsHeaderStateType, {}, PropsHeader, stateType>(mapStateToProps, {logoutUser})(HeaderContainer);