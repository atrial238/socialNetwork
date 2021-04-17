import React from 'react';
import styles from './RenderFormField.module.scss';

const {requireStyleError, container, errorBorder} = styles;

const RenderField = (props: any) => {

	const {meta, input, typeTag, placeholder = '', errorMessage} = props;
	
	return (
		<div className={`${container} ${meta.touched && meta.error && errorBorder}`}>
			{React.createElement(typeTag, {...input, placeholder:placeholder}, null)}
			{meta.touched && meta.error && <span className={requireStyleError}><span>{errorMessage}</span></span>}
		</div>
	)
}
export default RenderField;