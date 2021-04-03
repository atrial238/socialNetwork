import React, {useState} from 'react';
import {pagination, currentPageClass} from './Pagination.module.scss';

const Pagination = ({totalItems, itemsPerPage, numberCurrentPage, setPage, amountVisiblePortion = 10}) => {

	const [countPortionVisibleItmes, setVisibleItems] = useState(1);

	const amountAllItmes = Math.ceil(totalItems / itemsPerPage),
			leftVisibleItems = (countPortionVisibleItmes - 1) * amountVisiblePortion,
			rightVisibleItems = countPortionVisibleItmes * amountVisiblePortion - 1 ;

	const changeVisibleItems = (direction) => {
		if(direction === 'right'){
			setVisibleItems(countPortionVisibleItmes + 1);
			setPage(leftVisibleItems + amountVisiblePortion + 1);
		}else{
			setVisibleItems(countPortionVisibleItmes - 1);
			setPage(leftVisibleItems - (amountVisiblePortion - 1));
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
	const portionVisibleItems = Array
											.from({length: amountAllItmes})
											.reduce((arr, _, index) => index  >= leftVisibleItems && index <= rightVisibleItems ? [...arr, index + 1] : arr, [])
											.map((numberItem) => 
												<li 
													key={numberItem}
													className={numberCurrentPage === numberItem ? currentPageClass : null}
													onClick={() => setPage(numberItem)}
												>{numberItem}</li>
	);
	
	return (
		<div className={pagination}>
			<button style={{marginRight: '10px'}} onClick={setFirstPortionItems}>first</button>
			{leftVisibleItems >= 1 && <button onClick={() => changeVisibleItems('left')} >Prev</button>}
			<ul>
				{portionVisibleItems}
			</ul>
			<button onClick={() =>changeVisibleItems('right') } style={{marginRight: '10px'}}>Next</button>
			<button onClick={setLastPortionItems}>last</button>
		</div>
	)
} 
export default Pagination;