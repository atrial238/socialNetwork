import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField, required, maxLength15} from '../../../../common/util/rederFormField';
import { formClass, column, textarea } from '../DeployMessage.module.css';

const FormMessage = ({handleSubmit}) => {

	return (
		<form  className={formClass + ' ' + column} onSubmit={handleSubmit}>
			<Field className={textarea} type='text' name='message' lable='textarea' style='inline-block' component={renderField} validate={[required, maxLength15]}/>
			<button type='submit'>send</button>
		</form>
	)
}
export default reduxForm({form: 'messages'})(FormMessage);