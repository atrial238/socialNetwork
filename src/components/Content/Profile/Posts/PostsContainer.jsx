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

const PostsContainer = (props) => {
	console.log(props)
	return <Posts {...props}/>
};

const mapStateToProps = (state) => ({postData: state.profile.postData});

export default connect(mapStateToProps, {postMesssgeActioncreator})(PostsContainer)