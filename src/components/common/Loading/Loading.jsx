import React from 'react';
import {loading, container} from './Loading.module.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

 const Loading = () => {
	 const LoadingProgress =  withStyles(() => ({

			root: {height: 10,borderRadius: 5},
			bar: {backgroundColor: '#00B8FF'},
			colorPrimary: {backgroundColor: '#ffffff'},

	}))(LinearProgress);

	return (
		<div className={container}>
			<div>
				<h1>Social Network</h1>
				<div className={loading}><LoadingProgress /></div>
			</div>
		</div>
	)
}
export default Loading;