import React, {useState} from 'react';
import {pagination, currentPageClass} from './Pagination.module.css';

const Pagination = ({totalItems, itemsPerPage, numberCurrentPage, setPage, amountVisiblePortion = 9}) => {

	const [numberPortionVisibleItmes, setVisibleItems] = useState(1);

	const amountAllItmes = Math.ceil(totalItems / itemsPerPage),
		leftVisibleItems = (numberPortionVisibleItmes - 1) * amountVisiblePortion,
		rightVisibleItems = numberPortionVisibleItmes * amountVisiblePortion - 1 ;

	const changeVisibleItems = (direction) => {
		if(direction){
			setVisibleItems(numberPortionVisibleItmes + 1)
			setPage(leftVisibleItems + amountVisiblePortion + 1)
		}else{
			setVisibleItems(numberPortionVisibleItmes - 1);
			setPage(leftVisibleItems - (amountVisiblePortion - 1))
		}
	}

	const portionVisibleItems = Array
											.from({length: amountAllItmes})
											.reduce((arr, elem, index) => index  >= leftVisibleItems && index <= rightVisibleItems ? [...arr, index + 1] : arr, [])
											.map((elem) => 
												<li 
													key={elem}
													className={numberCurrentPage === elem ? currentPageClass : null}
													onClick={() => setPage(elem)}
												>{elem}</li>
	);
	
	return (
		<div className={pagination}>
			{leftVisibleItems >= 1 && <button onClick={() => changeVisibleItems(false)} >Prev</button>}
			<ul>
				{portionVisibleItems}
			</ul>
			<button onClick={() =>changeVisibleItems(true) }>Next</button>
		</div>
	)
} 
export default Pagination;