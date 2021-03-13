import React from 'react';
import Loading from '../../../common/Loading/Loading';
import {my_data, avatar, content, about, header, bottom} from './DataUser.module.css';
import UserStatusWithHook from './UserStatus/UserStatusWithHook';

const DataUser = ({profileUserData, putMyStatusOnServerThunk, userStatus}) => {
	if(!profileUserData)  return <Loading/>;
 
	const {aboutMe, contacts, lookingForAJob, fullName, userId, photos} = profileUserData;

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
						<UserStatusWithHook
							userStatus = {userStatus}
							putMyStatusOnServerThunk={putMyStatusOnServerThunk}
						 />
					</div>
				</div>
		</div>
	)	
}
export default DataUser;