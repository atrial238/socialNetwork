import React from 'react';
import styles from './UserData.module.scss';
import socialIcons from './srcSocialIcons';
import skillsIcons from './srcSkillsIcons';
import ModalChangeUserData from './ModalChangeUserData/ModalChangeUserData';
import FormChangeUserData from './FormChangeUserData/FormChangeUserData';

const {wrapper, contacts_wrapper, contacts_header, 
		skills_wrapper, edit_info, aboutMe_wrapper} = styles;

interface PropsUserDataType {
	aboutMe: string
	contacts: {
		facebook: string
		website: string
		vk: string
		twitter: string
		instagram: string
		youtube: string
		github: string
		mainLink: string
	}
	lookingForAJobDescription: string
	isOwner: boolean
	updateProfileData: Function
	fullName: string
}
const UserData: React.FC<PropsUserDataType> = ({aboutMe, contacts, lookingForAJobDescription, isOwner, updateProfileData, fullName}) => {
	
// handle modal widow for edit user information
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

// make elements with icons for every contacts(facebook, website, vk, twitter, instagram, youtube, github, others)
	const contactsElem = Object.keys(contacts)
								.map((socialName: any, index: any) => 
									<div key={index}>
										<a target='_blank' href={(contacts as any)[socialName] || '#'}>
											<img src={(socialIcons as any)[socialName]} alt="social icon"/>
										</a>
									</div>
	);

// make elements with icons for every skills
	const getIconSrc = (skillsName: any) => (skillsIcons as any)[skillsName.replace(/\s/g, '')];
	
	let skillsElem: any = "User have no skills";

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
			<div className={aboutMe_wrapper}><span>{aboutMe || "User didn't write about himself"}</span></div>
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