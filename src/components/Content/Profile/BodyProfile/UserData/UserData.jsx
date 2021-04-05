import React from 'react';
import {wrapper, contacts_wrapper, contacts_header, 
				skills_wrapper, live, edit_info, aboutMe_wrapper} from './UserData.module.scss';
import socialIcons from './srcSocialIcons';
import skillsIcons from './srcSkillsIcons';
import ModalChangeUserData from './ModalChangeUserData/ModalChangeUserData';
import FormChangeUserData from './FormChangeUserData/FormChangeUserData';

const UserData = ({aboutMe, contacts, lookingForAJobDescription, isOwner, updateProfileData, fullName}) => {
	
// handle modal widow for edit user information
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

// make elements with icons for every contacts(facebook, website, vk, twitter, instagram, youtube, github, others)
	const contactsElem = Object.keys(contacts)
								.map((socialName, index) => 
									<div key={index}>
										<a target='_blank' href={contacts[socialName] || '#'}>
											<img src={socialIcons[socialName]} alt="social icon"/>
										</a>
									</div>
	);

// make elements with icons for every skills
	const getIconSrc = skillsName => skillsIcons[skillsName.replace(/\s/g, '')];
	
	let skillsElem = "User have no skills";

	if(isOwner && lookingForAJobDescription){

		skillsElem = lookingForAJobDescription.split(',')
							.map((skillsName, index) => 
								<div key={index}>
									{
										getIconSrc(skillsName)
											? <img src={getIconSrc(skillsName)} alt="social icon"/>
											: skillsName
									}
								</div>
	)}

// props for form edit user information
	const data = {aboutMe, contacts, lookingForAJobDescription, updateProfileData, fullName};

	return (
		<div className={wrapper}>
			<h3 ><span>About me: </span></h3>
			<div className={aboutMe_wrapper}>{aboutMe || "User didn't write about himself"}</div>
			<div>
				<h3>Skills:</h3>
				<div className={skills_wrapper}>{skillsElem}</div>
			</div>
			<div>
				<h3 className={contacts_header}>Contacts:</h3>
				<div className={contacts_wrapper}>{contactsElem}</div>
			</div>
			{isOwner && <button className={edit_info}  onClick={handleOpen} >Edit information</button>}
			<ModalChangeUserData open={open} handleClose={handleClose}>
				<FormChangeUserData handleClose={handleClose} {...data}/>
			</ModalChangeUserData>
		</div>
	)
}

export default UserData;