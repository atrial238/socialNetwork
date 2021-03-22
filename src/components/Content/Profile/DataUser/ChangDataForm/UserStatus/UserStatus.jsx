import React, { Component } from 'react';

export default class UserStatus extends Component {
	state = {
		temporaryStatus: this.props.userStatus,
		isStatusModify: false,
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.userStatus !== this.props.userStatus) {

			this.setState({ temporaryStatus: this.props.userStatus })
		}
	}

	handleInput = (e) => this.setState({
		temporaryStatus: e.currentTarget.value
	});

	statusUpdate = (e) => {
		this.setState({ isStatusModify: !this.state.isStatusModify })
		const state = this.state.temporaryStatus || this.props.userStatus;
		this.props.updateStatus(state);

	};
	render() {
		return (
			this.state.isStatusModify
				? <input
					autoFocus
					type="text"
					onBlur={(e) => this.statusUpdate(e)}
					onChange={(e) => this.handleInput(e)}
					value={this.state.temporaryStatus}
				/>
				: <div
					onDoubleClick={() => this.setState({ isStatusModify: !this.state.isStatusModify })}
				>{this.props.userStatus || 'No status'}</div>
		)
	}
}