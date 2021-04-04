import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingProgressContent = ({children, height, width=300}) => (
	<ContentLoader
	  height={height}
	  width={width}
	  speed={1}
	  backgroundColor={'#333'}
	  foregroundColor={'#999'}
	>
	 {children}
	</ContentLoader>
 )