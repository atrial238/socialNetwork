import React from 'react';

export const required = value => value || typeof value === 'number' ? undefined : 'Required';

const maxLength = max => value => value && value.length < max ? undefined : 'your message too long';

export const maxLength15 = maxLength(5);

export const renderField = ({meta, input, type, lable, id, style, placeholder = ''}) => {

	const redBorder = meta.touched && meta.error ? '2px solid red' : 'none';
	
	return (
		<>
			{React.createElement(lable, {...input, type:type, id:id, placeholder:placeholder}, null)}
			{meta.touched && meta.error ? meta.error : null}
		</>
	)
}
