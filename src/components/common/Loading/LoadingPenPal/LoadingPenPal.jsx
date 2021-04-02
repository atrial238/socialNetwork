import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingPenPal = () => (
	<ContentLoader
	  height={200}
	  speed={1}
	  backgroundColor={'#333'}
	  foregroundColor={'#999'}
	>
	  <rect x="0" y="0" rx="25" ry="25" width="50" height="50" />
	  <rect x="60" y="15" rx="10" ry="10" width="220" height="20" />
	  <rect x="0" y="60" rx="25" ry="25" width="50" height="50" />
	  <rect x="60" y="75" rx="10" ry="10" width="220" height="20" />
	  <rect x="0" y="120" rx="25" ry="25" width="50" height="50" />
	  <rect x="60" y="135" rx="10" ry="10" width="220" height="20" />
	</ContentLoader>
 )