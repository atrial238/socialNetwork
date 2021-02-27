import React from 'react';
import {my_data, avatar, content, about} from './MyData.module.css';

const MyData = (props) => {
	let name;
	if(props.data.profile){
		 name =props.data.profile.fullName;
	}

	return (
		<div className={my_data}>
				<div className={avatar}><img src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg'/></div>
				<div className={content}>
					<h3>{name}</h3>
					<div className={about}>something</div>
				</div>
		</div>
	)
}
export default MyData;