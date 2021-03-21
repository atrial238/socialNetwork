import React from 'react';
import { imgBg } from '../Login.module.scss'
import {pathAllImage} from '../background_login_img_import';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Lazy } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

const LoginSlider = () => {
	
	SwiperCore.use([EffectFade, Autoplay, Lazy]);
	
	const images = pathAllImage.map((path, index) => 
													!index ? <img key={path} src={path} alt="background"  />
															 : <img key={path} data-src={path} alt="background" className='swiper-lazy' />  )
	
	return (
			<div className={imgBg}>
				<Swiper 
					effect='fade'
					autoplay={{delay: 5000}} speed={1000}
					lazy={{loadPrevNext: true}} 
					style={{width: '100%', height: '100%'}} 
				>
					{images.map((item, index) => <SwiperSlide key={index}>{item}</SwiperSlide>)}
				</Swiper>
			</div>
	)
}

export default LoginSlider;

