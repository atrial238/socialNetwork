import React from 'react';
import Users from './Users/Users';
import Pagination from '../../../common/Pagination/Pagination';
import {LoadingProgressContent} from '../../../common/Loading/LoadingProgressContent/LoadingProgressContent';
import { wrapper, body} from './FindUsers.module.scss';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';

const FindUsers = ({friendsArrFinded, 
						numberCurrentPage, friendPerPage,
						totalFriend, setPage, isLoading, isUserLoadingFail}) => {

// make preloader
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

// preloader or content will be displayed
	const allFriendsElement = isLoading 
										? placeholderContent.map(placeholderData =><Users key={Math.random()} {...placeholderData}/>)
										: friendsArrFinded.map(friendData => 
											<Users 
												key={friendData.id} 
												{...friendData} 
												isLoading={isLoading}
											/>)

// props for Pagination
	const propsPagination = {
		totalItems: totalFriend,
		itemsPerPage: friendPerPage,
		numberCurrentPage: numberCurrentPage,
		setPage: setPage,
	}

	return (
		<>
			<ErrorBoundary>
				
				<div className={wrapper}>
					{
						isUserLoadingFail 
							? <div>Something went wrong</div> 
							: <div className={body}>{allFriendsElement}</div>
					}
				</div>
			</ErrorBoundary>

			<ErrorBoundary>
				<Pagination {...propsPagination} />
			</ErrorBoundary>
		</>
	)
}
export default FindUsers;