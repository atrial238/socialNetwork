import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';

import styles from './FormChangeUserData.module.scss';
import LoadingSmall from '../../../../../common/Loading/LoadingSmall/LoadingSmall';
import {maxLength20, maxLength100} from '../../../../../../util/validateForm';
import { contactsType } from '../../../../../../redux/types/profile-reducer-types';
import { FormikErrors } from 'formik'

const {wrapper, textarea, button, buttons_wrapper, save_btn,
		cancel_btn, style_contacts, style_contacts_wrapper, 
		style_contacts_body, entire_form,
		submitting_process, buttons_save_wrapper, 
		submitting_error, submitting_success, field_error, field_wrapper} = styles;

interface PropsFormUserDataTypes {
	aboutMe: string
	handleClose: any
	contacts: contactsType
	lookingForAJobDescription: string
	updateProfileData: Function
	fullName: string
}



const FormChangeUserData: React.FC<PropsFormUserDataTypes> = ({aboutMe, handleClose, contacts, lookingForAJobDescription, updateProfileData, fullName}) => {

	const handleOnSubmit = (values: string, action: any) => {

		const {setSubmitting, setErrors, setStatus} = action
		updateProfileData(values)
		.then((res: any) => {
			if(res.data.resultCode === 0){
				setSubmitting(false)
				setStatus({submitSuccess: true})
				setTimeout(()=> {
					handleClose()
					setStatus({submitSuccess: false})
				}, 2000)
			}
		})
		.catch(() => {
			setSubmitting(false)
			setErrors({submitFaild: true})
			setTimeout(() => setErrors({submitFaild: false}), 5000)
		})
	}

	const initValueFormik = {
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
	}

	return (
		<div className={wrapper}>
			<Formik
				initialValues={{...initValueFormik}}
				initialStatus={{submitting_success: false}}
				onSubmit={(values: any, actions: any) => {handleOnSubmit(values, actions)}}
			>
				{({isSubmitting, errors, status}) => (

					<Form className={isSubmitting ? entire_form : ''}>
						
						<div>
							<h4>Full name:</h4>
							<div className={field_wrapper}>
								<Field name="fullName"	validate={maxLength20} className={textarea}/>
								<div className={field_error}><ErrorMessage name='fullName'/></div>
							</div>
						</div>

						<div>
							<h4>About me:</h4>
							<div className={field_wrapper}>
								<Field as='textarea' name="aboutMe"	validate={maxLength100} className={textarea}/>
								<div className={field_error}><ErrorMessage name='aboutMe'/></div>
							</div>
						</div>

						<div>
							<h4>Skills:</h4>
							<div className={field_wrapper}>
								<Field as='textarea' name="lookingForAJobDescription"	validate={maxLength100} className={textarea}/>
								<div className={field_error}><ErrorMessage name='lookingForAJobDescription'/> </div>
							</div>
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
								 
								{ // @ts-ignore 
									errors.submitFaild && <div className={submitting_error}>Something went wrong</div>}
								{ status.submitSuccess && <div className={submitting_success}>Success!</div>}
							</div>
						</div>
					</Form>
				)}
			</Formik>
	 </div>
	)
}
export default FormChangeUserData;