import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingProgressContent = ({children, height}) => (
	<ContentLoader
	  height={height}
	  speed={1}
	  backgroundColor={'#333'}
	  foregroundColor={'#999'}
	>
	 {children}
	</ContentLoader>
 )