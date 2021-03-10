import {createSelector} from 'reselect';

const getUsers = state => state.findUsers.users;


export const getUsersSelecor = createSelector(getUsers, users => users.filter(user => user))