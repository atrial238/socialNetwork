import React from 'react';
import {status_input, buttons_wrapper, button, input_fade,
				 button_fade, wrapper_input, loading_spinner, button_save } from './EditModeStatus.module.scss';
import LoadingSmall from '../../../../../../common/LoadingSmall/LoadingSmall';

const EditModeStatus = ({ temporaryStatus, setTemporaryStatus, isStatusEdit, 
									isError, isStatusUpload, deactivateEditMode, setIsStatusEdit }) => {

	const dataButton = {
		className: `${button} ${isStatusUpload && button_fade} ${button_save}`,
		onClick: deactivateEditMode,
		disabled: isStatusUpload
	}
	
	const dataTextarea = {
		autoFocus: true,
		type: "text",
		onChange: setTemporaryStatus,
		value: temporaryStatus,
		className: `${status_input} ${isStatusUpload && input_fade}`
	}

	return (
		<div>
			<div className={wrapper_input}>
				<textarea {...dataTextarea}></textarea>
				<div className={isStatusUpload && loading_spinner ? loading_spinner : ''}>
					{(isError && 'Something went wroung') || (isStatusUpload && <LoadingSmall/>)}
				</div>
			</div>
			<div className={buttons_wrapper}>
				<button {...dataButton}><span>Save</span></button>
				<button className={button} onClick={() => setIsStatusEdit(!isStatusEdit)}><span>Cancel</span></button>
			</div>
		</div>
	)
}
export default EditModeStatus;
