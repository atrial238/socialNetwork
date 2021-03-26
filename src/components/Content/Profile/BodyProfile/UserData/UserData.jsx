import React from 'react';
import {wrapper, contacts_wrapper, contacts_header, 
				skills_wrapper, live, edit_info} from './UserData.module.scss';
import socialIcons from './srcSocialIcons';
import skillsIcons from './srcSkillsIcons';
import ModalChangeUserData from './ModalChangeUserData/ModalChangeUserData';

const UserData = ({aboutMe, contacts, lookingForAJobDescription, isOwner}) => {

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const contactsElem = Object.keys(contacts)
		.map((socialName, index) => <div key={index}><a href="#"><img src={socialIcons[socialName]} alt="social icon"/></a></div>
	);

	let skillsElem = "I have no skills";

	if(isOwner && lookingForAJobDescription){
		skillsElem = lookingForAJobDescription.split(',')
		.map((skillsName, index) => <div key={index}><img src={skillsIcons[skillsName.replace(/\s/g, '')]} alt="social icon"/></div>)
	}
	
	return (
		<div className={wrapper}>
			<h3 className={live}>{isOwner ? 'Live in' : 'About me:'} <span>{aboutMe}</span></h3>
			<div>
				<h3>Skills:</h3>
				<div className={skills_wrapper}>{skillsElem}</div>
			</div>
			<div>
				<h3 className={contacts_header}>Contacts:</h3>
				<div className={contacts_wrapper}>{contactsElem}</div>
			</div>
			{isOwner && <button className={edit_info}  onClick={handleOpen} >Edint information</button>}
			<ModalChangeUserData open={open} handleClose={handleClose}/>
		</div>
	)
}

export default UserData;