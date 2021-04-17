import React, {useState} from 'react';
import IconNavigationEnd from '../../../assets/images/pagination/last.svg';
import IconNavigationContinue from '../../../assets/images/pagination/previous.svg';
import styles from './Pagination.module.scss';

const {pagination, currentPageClass, next, last, first, previous, disabl_btn} = styles;

interface propsPagination {
	totalItems: number
	itemsPerPage: number
	numberCurrentPage: number
	setPage: (currentPage: number) => void
	amountVisiblePortion?: number
}

const Pagination: React.FC<propsPagination> = ({totalItems, itemsPerPage, numberCurrentPage, setPage, amountVisiblePortion = 10}) => {

	const [countPortionVisibleItmes, setVisibleItems] = useState(1);

// count all needed elements, also left visible and rigth visible element
	const amountAllItmes = Math.ceil(totalItems / itemsPerPage),
			leftVisibleItems = (countPortionVisibleItmes - 1) * amountVisiblePortion ,
			rightVisibleItems = countPortionVisibleItmes * amountVisiblePortion - 1;
			
//function for navigation: next, previous, last, first
	const changeVisibleItems = (direction: string) => {
		if(direction === 'right'){
			setVisibleItems(countPortionVisibleItmes + 1);
			setPage(rightVisibleItems + 2);
		}else{
			setVisibleItems(countPortionVisibleItmes - 1);
			setPage(leftVisibleItems );
		}
	}

	const setLastPortionItems = () => {
		setVisibleItems(amountAllItmes / amountVisiblePortion);
		setPage(amountAllItmes - (amountVisiblePortion - 1))
	}

	const setFirstPortionItems = () => {
		setVisibleItems(1);
		setPage(1);
	}

//elements which will be displayed
	const arrayPages: number[] = Array.from({length: amountAllItmes}, (_, index) => index + 1);

	// props for each element
	const getPropsForList = (num: number) => ({
		key: num,
		className: numberCurrentPage === num ? currentPageClass : undefined,
		onClick: () => setPage(num),
	})

	const portionVisibleItems = arrayPages
											.filter((_, index) => index >= leftVisibleItems && index <= rightVisibleItems)
											.map((numberItem) => <li {...getPropsForList(numberItem)}>{numberItem}</li>
	);

// props for buttons
const btnFirst = {
			className: `${first} ${leftVisibleItems === 0 ? disabl_btn : ''}`,
			onClick: setFirstPortionItems,
			disabled: leftVisibleItems === 0
		},
		btnPrevious = {
			className: `${previous} ${leftVisibleItems < 9 ? disabl_btn : ''}`,
			onClick: () => changeVisibleItems('left'),
			disabled: leftVisibleItems < 9
		},
		btnNext = {
			className:`${next} ${(rightVisibleItems + 1) === amountAllItmes ? disabl_btn : ''}`,
			onClick: () => changeVisibleItems('right'),
			disabled:(rightVisibleItems + 1) === amountAllItmes
		},
		btnLast = {
			className: `${last} ${(rightVisibleItems + 1) === amountAllItmes ? disabl_btn : ''}`,
			onClick: setLastPortionItems,
			disabled: (rightVisibleItems + 1) === amountAllItmes
		}

	return (
		<div className={pagination}>

			<button {...btnFirst}><img src={IconNavigationEnd} alt="end navigation"/></button>
			<button {...btnPrevious}><img src={IconNavigationContinue} alt="Continue navigation"/></button>
		
			<ul>{portionVisibleItems}</ul>
		
			<button {...btnNext}><img src={IconNavigationContinue} alt="Continue navigation"/></button>
			<button {...btnLast}><img src={IconNavigationEnd} alt="end navigation"/></button>
			
		</div>
	)
} 
export default Pagination;