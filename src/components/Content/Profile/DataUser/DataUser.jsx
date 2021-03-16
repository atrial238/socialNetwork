import React, {useState} from 'react';
import Data from './Data/Data';
import ChangeDataForm from './ChangDataForm/ChangeDataForm';

const DataUser = props => {

	const [editMode, setEditMode] = useState(false);

	const onSubmit = (data) => {
	
		props.changeProfileDataThunk(data)
		.then(() => setEditMode(false))
	}
	const data = {...props, setEditMode, onSubmit};
	// editMode ? <DataForm {...data} /> :
	// return  <Data {...data}/>;
	return editMode ? <ChangeDataForm {...data}/> : <Data {...data}/>;
}
export default DataUser;