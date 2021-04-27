import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const LoadingSmall = ({size=40}) => {

	const useStyles = makeStyles(() => ({root: {color: '#00B8FF'}}));
	const classes = useStyles();
	return <CircularProgress className={classes.root} size={size}/>
}
export default LoadingSmall;