import React, {useState} from 'react';
import Loading from '../../../../common/Loading/Loading';
import {form, status} from './ChangeDataForm.module.css';
import UserStatusWithHook from './UserStatus/UserStatusWithHook';
import {Field, reduxForm} from 'redux-form';

const ChangeDataForm = ({profileUserData, putMyStatusOnServerThunk, userStatus, changeAvatarThunk, setEditMode, handleSubmit}) => {

	const uploadFile = (e) => {
		changeAvatarThunk(e.target.files[0]);
	}

	const btnChangeAvatar = <input onChange={uploadFile} type='file' style={{cursor: 'pointer', padding: '5px'}}/>

	if(!profileUserData)  return <Loading/>;

	const {aboutMe, contacts, lookingForAJob, fullName, lookingForAJobDescription, userId, photos} = profileUserData;
	const photo = photos.large || 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg';
	const myContacts = Object.keys(contacts).map(property => `${contacts[property]} `);

	return (
		<>
			<div><img src={photo}/>{btnChangeAvatar}</div>
			<div className={status}>status: <UserStatusWithHook userStatus = {userStatus} putMyStatusOnServerThunk={putMyStatusOnServerThunk}/></div>
			<form className={form} onSubmit={handleSubmit}>
				<div><label htmlFor='fullName'>FullName:</label><Field id='fullName' name='fullName'  type='text' component='input'/></div>
				<div><label htmlFor='aboutMe'>about Me:</label><Field id='aboutMe' name='aboutMe' type='text' component='textarea'/></div>
				<div><label htmlFor='lookingJob'>Looking for a job:</label><Field id='lookingJob' name='lookingForAJob' type='checkbox' component='input'/></div>
				<div><label htmlFor='mySkills'>My skills:</label><Field id='mySkills' name='lookingForAJobDescription' type='text' component='textarea'/></div>
				<button>Save</button>
			</form>
		</>
	)	
}
export default reduxForm({form: 'sendDataProfile'})(ChangeDataForm);