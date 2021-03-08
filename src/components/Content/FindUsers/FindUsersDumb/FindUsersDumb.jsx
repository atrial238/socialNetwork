import React from 'react';
import Friend from './Friend/Friend';
import { friends, pagination, currentPageClass, allFriendsClass } from './FindUsersDumb.module.css';
import Loading from '../../../common/Loading/Loading';

const FindUsersDumb = (props) => {

	const { 
		friendsArrFinded,
		numberCurrentPage,
		friendPerPage,
		totalFriend,
		setPage,
		isLoading,
		followThunk,
		unfollowThunk
	} = props;
	
	const allFriends = friendsArrFinded.map(friend =>
									<Friend
										key={friend.id}
										data={friend}
										followThunk={followThunk}
										unfollowThunk={unfollowThunk}
									/>
	);

	const paginationElements = Array.from({length: Math.ceil(totalFriend / friendPerPage)}).map((element, index) => 
									<li 
										key={index}
										className={numberCurrentPage === index + 1 ? currentPageClass : null}
										onClick={() => setPage(index + 1)}
									>{index + 1}</li>
	);

	return (
	<>
		<h2>Users</h2>
		<div className={friends}>
			{isLoading ? <Loading/> : <div className={allFriendsClass}>{allFriends}</div>}
		</div>
		<div className={pagination}>
			<ul>
				{paginationElements}
			</ul>
		</div>
	</>
	)
}
export default FindUsersDumb;