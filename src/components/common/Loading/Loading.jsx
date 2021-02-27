import React from 'react';
import {loading} from './Loading.module.css'
import loadImgSrc from '../../../assets/images/loading.gif'

 const Loading = () => {
	return <div className={loading}><img src={loadImgSrc} /></div>
}
export default Loading;