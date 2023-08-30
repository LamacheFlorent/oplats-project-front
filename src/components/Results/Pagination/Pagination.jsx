import './Pagination.scss';
import Pagination from 'react-bootstrap/Pagination';

const PaginationResults = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const pages = [];
    for (let i = 1; i <= totalPageCount; i++) {
        pages.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Pagination className="pagination">
            {pages}
        </Pagination>
    );

};

export default PaginationResults;