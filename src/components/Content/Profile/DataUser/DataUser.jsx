import React from 'react';
import Loading from '../../../common/Loading/Loading';
import {my_data, avatar, content, about} from './DataUser.module.css';

const DataUser = ({profileData}) => {
	
	if(!profileData)  return <Loading/> ;
 
	const {aboutMe, contacts, lookingForAJob, fullName, userId, photos} = profileData;

	const photo = photos.large || 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg';
	return (
		<div className={my_data}>
				<div className={avatar}><img src={photo}/></div>
				<div className={content}>
					<h3>{fullName}</h3>
					<div className={about}>{aboutMe}</div>
				</div>
		</div>
	)
}
export default DataUser;