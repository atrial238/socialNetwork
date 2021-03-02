import React from 'react';
import Loading from '../../../common/Loading/Loading';
import {my_data, avatar, content, about, header, bottom} from './DataUser.module.css';

class DataUser extends React.Component {

	state = {
		status: 'its my status here was written someday',
		isStatusModify: false,
		temporaryValue: ''
	}

	handleStatus = (e) => this.setState({isStatusModify: !this.state.isStatusModify, status: e.target.value});

	handleInput = (e) => this.setState({temporaryValue: e.target.value});

	render() {

	if(!this.props.profileData)  return <Loading/> ;
 
	const {aboutMe, contacts, lookingForAJob, fullName, userId, photos} = this.props.profileData;

	const photo = photos.large || 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg';
	
	return (
		<div className={my_data}>
				<div className={avatar}><img src={photo}/></div>
				<div className={content}>
					<div className={header}>
						<h3>{fullName || `no data`}</h3>
						<div className={about}>{aboutMe || `no data`}</div>
					</div>
					<div className={bottom}>
						{
							this.state.isStatusModify 
								? <input 
										autoFocus 
										type="text" 
										onBlur={(e) => this.handleStatus(e)}
										onChange={(e) => this.handleInput(e)}
										vlaue={this.state.temporaryValue} 
									/> 
								: <span onDoubleClick={this.handleStatus}>{this.state.status}</span>
						}
					</div>
				</div>
		</div>
	)
	}
}
	
	

export default DataUser;