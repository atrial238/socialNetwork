const initialState = {
		friends: [{
				name: 'andrew',
				src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
			},
			{
				name: 'Sasha',
				src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
			},
			{
				name: 'Viktoria',
				src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
			},
		]
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}
export default sidebarReducer

