import React from 'react';
import {Field} from 'react-final-form'
import RenderField from '../../../common/RenderFormField/RenderField';
import {required} from '../../../../util/validateForm';
import {image, inputWrapper} from './Captcha.module.scss';


const Captcha = ({captcha}) => {
	return (
		 <div>
			<img src={captcha} className={image}/>
			<div className={inputWrapper}>
				<Field 
					type="text" 
					typeTag='input' 
					name='captcha' 
					validate={required} 
					errorMessage='Enter characters from picture'
					placeholder='Enter characters from picture'
				>
					{props => (<RenderField {...props}/>)}
				</Field>
			</div>
		</div>
	)
}

export default Captcha;
