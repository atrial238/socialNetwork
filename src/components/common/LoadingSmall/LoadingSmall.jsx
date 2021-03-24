import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const LoadingSmall = () => {

	const useStyles = makeStyles(() => ({root: {color: '#00B8FF'}}));
	const classes = useStyles();
	return <CircularProgress className={classes.root}/>
}
export default LoadingSmall;