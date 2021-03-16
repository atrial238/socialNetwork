import React, {useState} from 'react';
import Loading from '../../../../common/Loading/Loading';
import {my_data, avatar, content, about, header, bottom, skills, contactsClass} from './Data.module.css';


const Data = ({profileUserData, userStatus, isOwner, setEditMode}) => {


	if(!profileUserData)  return <Loading/>;

	const {aboutMe, contacts, lookingForAJob, fullName, lookingForAJobDescription, userId, photos} = profileUserData;
	const photo = photos.large || 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg';
	const myContacts = Object.keys(contacts).map(property => `${contacts[property]} `);

	return (
		<>
			<div className={my_data}>
					<div className={avatar}><img src={photo}/></div>
					<div className={content}>
						<div className={header}>
							<h3>{fullName || `no data`}</h3>
							<div className={about}>{aboutMe || `no data`}</div>
						</div>
						<div>{lookingForAJob && 'Looking for a job'}</div>
						<div className={skills}>
							<div>{lookingForAJobDescription && 'My skills:'}</div>
							<div>{lookingForAJobDescription}</div>
						</div>
						<div className={contactsClass}>
							<div>Contacts: </div>
							<div>{myContacts}</div>
						</div>
						<div className={bottom}>
							Status: {userStatus}
						</div>
					</div>
			</div>
			{isOwner && <button onClick={()=> setEditMode(true)}>edit profile</button>}
		</>	
	)	
}
export default Data;