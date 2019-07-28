import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.scss';

const Pagination = ({currentPage, pagesLength, setCurrentPage}) => {

    const goToPage = (page) => {
        setCurrentPage(page)
    }
    return (
        <div className={styles.pagination}>
            <button onClick={() => goToPage(0)} disabled={currentPage === 0}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <button onClick={() => goToPage(currentPage-1)} disabled={currentPage === 0}>
                <i className="fas fa-angle-left"></i>
            </button>
            {
                new Array(pagesLength).fill(1).map((page, index) => (
                    <button key={index} onClick={() => goToPage(index)} className={(currentPage === index) ? styles.activePage : undefined}>{index+1}</button>
                ))
            }
            <button onClick={() => goToPage(currentPage+1)} disabled={currentPage === pagesLength-1}>
                <i className="fas fa-angle-right"></i>                
            </button>
            <button onClick={() => goToPage(pagesLength-1)} disabled={currentPage === pagesLength-1}>
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    pagesLength: PropTypes.number,
    setCurrentPage: PropTypes.func,
};

Pagination.defaultProps = {
    currentPage: 0,
    pagesLength: 0,
    setCurrentPage: () => {},
};

export default Pagination;