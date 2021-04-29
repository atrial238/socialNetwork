import React from 'react';
import {WrappedFieldMetaProps, WrappedFieldInputProps} from 'redux-form'

interface PropsRenderFieldType {
	meta: WrappedFieldMetaProps
	input: WrappedFieldInputProps
	type: string
	typeTag: string
	placeholder: string
	errorMessage: string
}


export const RenderField: React.FC<PropsRenderFieldType> = ({meta, input, type, typeTag, placeholder = '', errorMessage}) => {


	return (
			<>
				{React.createElement(typeTag, {...input, type, placeholder}, null)}
				{meta.touched && meta.error ? <span>{errorMessage}</span> : null}
			</>
	)
}





