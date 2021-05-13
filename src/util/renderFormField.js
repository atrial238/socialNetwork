import React from 'react';

export const renderField = ({meta, input, type, typeTag, id, placeholder = '', errorMessage}) => {

	const redBorder = meta.touched && meta.error ? '2px solid red' : 'none';
	
	return (
		<>
			{React.createElement(typeTag, {...input, type, id, placeholder}, null)}
			{meta.touched && meta.error ? <span htmlFor={id}>{errorMessage}</span> : null}
		</>
	)
}

