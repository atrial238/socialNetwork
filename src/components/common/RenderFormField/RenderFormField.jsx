import React from 'react';
import {requireStyleError, container, errorBorder} from './RenderFormField.module.scss';
import PropTypes from 'prop-types';

const RenderField = ({meta, input, typeTag, placeholder = '', errorMessage}) => {
	
	return (
		<div className={`${container} ${meta.touched && meta.error && errorBorder}`}>
			{React.createElement(typeTag, {...input, placeholder:placeholder}, null)}
			{ meta.touched && meta.error && <span className={requireStyleError}><span>{errorMessage}</span></span>}
		</div>
	)
}
export default RenderField;

RenderField.propTypes = {
	meta: PropTypes.object,
	input: PropTypes.object,
	typeTag: PropTypes.string,
	placeholder: PropTypes.string,
	errorMessage: PropTypes.string,
}

