import React from 'react';
import {wrapper, contacts_wrapper, contacts_header, skills_wrapper, live} from './UserData.module.scss';
import socialIcons from './srcSocialIcons';
import skillsIcons from './srcSkillsIcons';

const UserData = ({aboutMe, contacts, lookingForAJobDescription, isOwner }) => {
	
	const contactsElem = Object.keys(contacts)
		.map((socialName, index, arr) => {
			return <div key={index}><a href="#"><img src={socialIcons[socialName]} alt="social icon"/></a></div>
		}
	);

	const skillsElem = lookingForAJobDescription.split(',')
		.map((skillsName, index) => <div key={index}><img src={skillsIcons[skillsName.replace(/\s/g, '')]} alt="social icon"/></div>)

	return (
			<div className={wrapper}>
				<h3 className={live}>Live in <span>{aboutMe}</span></h3>
				<div>
					<h3>Skills:</h3>
					<div className={skills_wrapper}>{skillsElem}</div>
				</div>
				<div>
					<h3 className={contacts_header}>Contacts:</h3>
					<div className={contacts_wrapper}>{contactsElem}</div>
				</div>
				{isOwner && <button>Edint information</button>} 
			</div>
	)
}

export default UserData;