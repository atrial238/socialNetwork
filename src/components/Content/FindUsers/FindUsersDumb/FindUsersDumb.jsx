import React from 'react';
import Users from './Users/Users';
import { friends, allFriendsClass } from './FindUsersDumb.module.css';
import Loading from '../../../common/Loading/Loading';
import Pagination from '../../../common/Pagination/Pagination';

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
									<Users
										key={friend.id}
										data={friend}
										followThunk={followThunk}
										unfollowThunk={unfollowThunk}
									/>
	);

	return (
	<>
		<h2>Users</h2>
		<div className={friends}>
			{isLoading ? <Loading/> : <div className={allFriendsClass}>{allFriends}</div>}
		</div>
		<Pagination 
			totalItems={totalFriend}
			itemsPerPage={friendPerPage}
			numberCurrentPage={numberCurrentPage}
			setPage={setPage}
		/>
		
	</>
	)
}
export default FindUsersDumb;