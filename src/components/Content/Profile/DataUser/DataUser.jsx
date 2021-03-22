import React, { useState } from 'react';
import Data from './Data/Data';
import ChangeDataForm from './ChangDataForm/ChangeDataForm';

const DataUser = props => {

	const [editMode, setEditMode] = useState(false);

	const onSubmit = (data) => {
		props.updateProfileData(data)
			.then(() => setEditMode(false))
	}
	const initialValues = props.profileUserData
	const data = { ...props, setEditMode, onSubmit, initialValues };

	return editMode ? <ChangeDataForm {...data} /> : <Data {...data} />;
}
export default DataUser;