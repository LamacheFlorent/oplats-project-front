import './Results.scss';
import React, { useState } from 'react';
import ListRecipes from './ListRecipes/ListRecipes';
import PaginationResults from './Pagination/Pagination';
import NotFound from '../NotFound/NotFound';

const Results = ({data, title}) => {    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleResults = data.slice(startIndex, endIndex);

    return (
        <div className='results'>
            <h1>{title}</h1>
            {data.length === 0 && <NotFound />}
            <ListRecipes results={visibleResults}/>
            <PaginationResults
                totalItems={data.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
};

export default Results;