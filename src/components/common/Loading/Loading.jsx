import React from 'react';
import {loading, container} from './Loading.module.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const LoadingProgress =  withStyles(() => ({

	root: {height: 10,borderRadius: 5},
	bar: {backgroundColor: '#00B8FF'},
	colorPrimary: {backgroundColor: '#ffffff'},

}))(LinearProgress);

 const Loading = ({isInintAppFail}) => {
	 
	 const error = isInintAppFail && 'Oops! something went wrong'
	return (
		<div className={container}>
			<div>
				<h1>Social Network</h1>
				<div className={loading}>{error || <LoadingProgress />}</div>
			</div>
		</div>
	)
}
export default Loading;