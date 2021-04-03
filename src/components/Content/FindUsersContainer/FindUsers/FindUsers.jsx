import React from 'react';
import Users from './Users/Users';
import { wrapper, body } from './FindUsers.module.scss';
import Loading from '../../../common/Loading/Loading';
import Pagination from '../../../common/Pagination/Pagination';
import {LoadingProgressContent} from '../../../common/Loading/LoadingProgressContent/LoadingProgressContent';

const FindUsers = ({friendsArrFinded, 
						numberCurrentPage,friendPerPage,
						totalFriend, setPage, isLoading, isUserLoadingFail}) => {

	const loadingProgressAvatar = (
				<LoadingProgressContent height={95}>
					<rect x="0" y="0" rx="50" ry="50" width="100" height="95" />
				</LoadingProgressContent>
			),
			loadingProgressName = (
				<LoadingProgressContent height={95}>
					<rect x="0" y="35" rx="10" ry="10" width="180" height="30" />
				</LoadingProgressContent>
			),
			palaceholderObj = {
				placeholder: {loadingProgressAvatar, loadingProgressName},
				isLoading
			},
			placeholderContent = Array.from({length: friendPerPage}, () => palaceholderObj);

	const allFriendsElement = isLoading 
	 										? placeholderContent.map(placeholderData =><Users key={Math.random()} {...placeholderData}/>)
											: friendsArrFinded.map(friendData =><Users key={friendData.id} {...friendData} isLoading={isLoading}/>)

	return (
		<>
			<div className={wrapper}>
				{
					isUserLoadingFail 
						? <div>Something went wrong</div> 
						: <div className={body}>{allFriendsElement}</div>
				}
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
export default FindUsers;