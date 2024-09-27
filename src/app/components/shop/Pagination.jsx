import React from 'react'
import { data } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../redux/features/paginationSlices';

const Pagination = () => {
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const CurrentPage = useSelector((state) => state.pagination.currentPage);
    const dispatch = useDispatch();

    const idxOfLastItem = itemsPerPage * CurrentPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const currentItems = data.slice(idxOfFirstItem, idxOfLastItem)
    console.log('Idx of first: ', idxOfFirstItem, 'Idx of Last: ', idxOfLastItem, 'currItms: ', currentItems);
    console.log('Items per Page: ',itemsPerPage, 'Current Page: ', CurrentPage);
    console.log('Current Items: ', currentItems);
    
    
    

    const totalPages = Math.ceil(data.length / itemsPerPage)
    console.log(totalPages);
    
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => dispatch(setCurrentPage(i))}
                    style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: CurrentPage === i ? 'lightgray' : 'white' }}
                >
                    {i}
                </button>
            );
        }
        console.log(pages);
        
        return pages;
    }
            
    return (
        <div>
            <div>
                {/* Render current items */}
                <ul>
                    {currentItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* Render pagination controls */}
                <div>{renderPageNumbers()}</div>
            </div>
        </div>
    )
}

export default Pagination
