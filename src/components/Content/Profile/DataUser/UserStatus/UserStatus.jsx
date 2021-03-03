import React, {Component} from 'react';


export default class UserStatus extends Component {
	state = {
		status: 'its my status here was written someday',
		isStatusModify: false,
		temporaryValue: ''
	}
	handleInput = (e) =>  this.setState({temporaryValue: e.target.value});
	handleStatus = (e) => this.setState({isStatusModify: !this.state.isStatusModify, status: e.target.value || this.state.status});

	render() {
		return (
			this.state.isStatusModify 
								? <input 
										autoFocus 
										type="text" 
										onBlur={(e) => this.handleStatus(e)}
										onChange={(e) => this.handleInput(e)}
										vlaue={this.state.temporaryValue} 
									/> 
								: <div onDoubleClick={this.handleStatus}>{this.state.status}</div>
		)
	}
}