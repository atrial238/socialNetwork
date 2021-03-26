import React from 'react';
import {wrapper, textarea, button, buttons_wrapper, save_btn,
			 cancel_btn, style_contacts_input, style_contacts, 
			 style_contacts_wrapper, style_contacts_body, entire_form, submitting_process, buttons_save_wrapper } from './FormChangeUserData.module.scss';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import LoadingSmall from '../../../../../common/LoadingSmall/LoadingSmall';

const validateTextarea = (value) => {
   let error;
 
   if (value && value.length > 100) {
		
     error = 'To long';
   } 
	return error;
}
const validateFullName = (value) => {
	let error;
	if(value && value.length > 20) {
		error = 'Name to long'
	}
}
const FormChangeUserData = ({aboutMe, handleClose, contacts, lookingForAJobDescription, updateProfileData, fullName}) => {
	
	return (
		<div className={wrapper}>
			<Formik
				initialValues={{
					aboutMe: aboutMe || '',
					lookingForAJobDescription: lookingForAJobDescription || '',
					contacts: {
						facebook: contacts.facebook || '',
						website: contacts.website || '',
						vk: contacts.vk || '',
						twitter: contacts.twitter || '',
						instagram: contacts.instagram || '',
						youtube:contacts.youtube || '',
						github: contacts.github || '',
						mainLink: contacts.mainLink || ''
					},
					fullName: fullName || ''
				}}
				onSubmit={values => {
					updateProfileData(values)
					.then(() => handleClose());
				}}
			>
				{({isSubmitting}) => (
					<Form className={isSubmitting ? entire_form : ''}>
						<div>
							<h4>Full name:</h4>
							<Field name="fullName"	validate={validateFullName} className={textarea}/>
							<ErrorMessage name='fullName'/>
						</div>

						<div>
							<h4>About me:</h4>
							<Field as='textarea' name="aboutMe"	validate={validateTextarea}  className={textarea}/>
							<ErrorMessage name='aboutMe'/>
						</div>

						<div>
							<h4>Skills:</h4>
							<Field as='textarea' name="lookingForAJobDescription"	validate={validateTextarea}  className={textarea}/>
							<ErrorMessage name='lookingForAJobDescription'/> 
						</div>

						<div className={style_contacts}>
							<h4>Contacts:</h4>
							<div className={style_contacts_body}>
								<div className={style_contacts_wrapper}>
									<label htmlFor="facebook">Facebook: </label>
									<Field id='facebook' name="contacts.facebook"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="website">Website: </label>
									<Field id='website' name="contacts.website"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="vk">Vk: </label>
									<Field id='' name="contacts.vk"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="twitter">Twitter: </label>
									<Field id='twitter' name="contacts.twitter"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="instagram">Instagram: </label>
									<Field id='instagram' name="contacts.instagram"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="youtube">Youtube: </label>
									<Field id='youtube' name="contacts.youtube"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="github">Github: </label>
									<Field id='github' name="contacts.github"  />
								</div>
								<div className={style_contacts_wrapper}> 
									<label htmlFor="mainLink">MainLink: </label>
									<Field id='mainLink' name="contacts.mainLink"  />
								</div>
							</div>
						</div>

						<div className={buttons_wrapper}>

							<div className={button}>
								<label htmlFor="button"></label>
								<button id='button' className={cancel_btn} type='button' onClick={handleClose}><span>Cancel</span></button>
							</div>
							<div className={buttons_save_wrapper}>
								<div className={button}>
									<label htmlFor="submit"></label>
									<button id='submit' className={save_btn} type='submit' disabled={isSubmitting}><span>Save</span></button>
								</div>
								{ isSubmitting && <div className={submitting_process}><LoadingSmall size={25}/></div>}
							</div>
						</div>
					</Form>
				
				)}
			</Formik>
	 </div>
	)
}
export default FormChangeUserData;