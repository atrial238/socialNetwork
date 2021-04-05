import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {hasError: false}
	}
	static getDerivedStateFromError = () => ({ hasError: true });
	
	render = () => this.state.hasError ? <div><h2>Something went wrong.</h2></div> : this.props.children 

}
export default ErrorBoundary;