import React from 'react';
import {wrapper, avatar, message} from './Post.module.scss';

const Post = ({like, text}) => {

	return (
		<div className={wrapper}>
			<div className={avatar}>
				<img src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a993b6ab294b86ff28bda7e7285b3445-1585695989613/6d4736cf-5e25-4bf3-a5af-145f3ac80bd1.jpg'/>
			</div>
			<div className={message}>{text}</div>
			<div style={{lineHeight: '54px', marginLeft: '20px'}}>like: {like}</div>
		</div>
	)
}
export default Post;