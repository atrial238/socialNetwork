import React, {useState} from 'react';
import {pagination, currentPageClass} from './Pagination.module.css';

const Pagination = ({totalItems, itemsPerPage, numberCurrentPage, setPage}) => {

	// const Math.ceil(totalItems / itemsPerPage)

	const numbersPages = Array.from({length: 9}).map((element, index) => 
									<li 
										key={index}
										className={numberCurrentPage === index + 1 ? currentPageClass : null}
										onClick={() => setPage(index + 1)}
									>{index + 1}</li>
	);

	return (
		
		<div className={pagination}>
			<button>Prev</button>
			<ul>
				{numbersPages}
			</ul>
			<button>Next</button>
		</div>
	)
	
} 

export default Pagination;
