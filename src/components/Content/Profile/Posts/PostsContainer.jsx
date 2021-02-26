import { changeGlobalStatePostActionCreator, postMesssgeActioncreator } from '../../../../redux/profile-reducer';
import Posts from './Posts';
import {connect} from 'react-redux';

// const PostsContainer = () => {
// 	return (
		
// 		<GlobalContext.Consumer>
// 			{
// 				(store) => {
// 					const {postData, temporaryValue} = store.getState().profile;
// 					const postMessage = () => store.dispatch(postMesssgeActioncreator());
// 					const changeClobalStatePost = (value) => store.dispatch(changeGlobalStatePostActionCreator(value));
// 					return (
// 						<Posts
// 							postMessage={postMessage}
// 							changeClobalStatePost={changeClobalStatePost}
// 							postData={postData}
// 							temporaryValue={temporaryValue}
// 						/>
// 					)
// 				}
// 			}
// 		</GlobalContext.Consumer>
// 	)
// }
const mapStateToProps = (state) => {
	return {
		postData: state.profile.postData,
		temporaryValue: state.profile.temporaryValue
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		postMessage() {dispatch(postMesssgeActioncreator())},
		changeClobalStatePost(value) {dispatch(changeGlobalStatePostActionCreator(value))}
	}
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;