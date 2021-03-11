import profileReducer, {
	postMesssgeActioncreator,
	deletePostAC
} from "./profile-reducer"


test('length of postArr shoud be increment', () => {
	//test data
	const action = postMesssgeActioncreator('some very important message');
	const state = {
		postData: [{
				id: '1',
				text: 'Something really important was written here1',
				like: '33'
			},
			{
				id: '2',
				text: 'Something really important was written here2',
				like: '3'
			},
			{
				id: '3',
				text: 'Something really important was written here3',
				like: '53'
			},
			{
				id: '4',
				text: 'Something really important was written here4',
				like: '63'
			},
			{
				id: '5',
				text: 'Something really important was written here5',
				like: '14'
			},
		]
	}
	//test action 
	const newState = profileReducer(state, action);
	// expectation
	expect(newState.postData.length).toBe(6);
})

test('length of postArr should be decriment', () => {
	const action = deletePostAC(3);
	const state = {
		postData: [{
				id: '1',
				text: 'Something really important was written here1',
				like: '33'
			},
			{
				id: '2',
				text: 'Something really important was written here2',
				like: '3'
			},
			{
				id: '3',
				text: 'Something really important was written here3',
				like: '53'
			},
			{
				id: '4',
				text: 'Something really important was written here4',
				like: '63'
			},
			{
				id: '5',
				text: 'Something really important was written here5',
				like: '14'
			},
		]
	}
	const newState = profileReducer(state, action);
	expect(newState.postData.length).toBe(5);
})