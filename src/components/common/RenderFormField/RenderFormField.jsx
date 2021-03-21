import React from 'react';
import {requireStyleError, container, errorBorder} from './RenderFormField.module.scss';

const RenderField = ({meta, input, typeTag, placeholder = '', errorMessage}) => {
	
	return (
		<div className={`${container} ${meta.touched && meta.error && errorBorder}`}>
			{React.createElement(typeTag, {...input, placeholder:placeholder}, null)}
			{ meta.touched && meta.error && <span className={requireStyleError}><span>{errorMessage}</span></span>}
		</div>
	)
}
export default RenderField;

