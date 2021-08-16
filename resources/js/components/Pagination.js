import React from 'react';
import '../../sass/components/Pagination.scss'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    // console.log('activePage', currentPage);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageNumbers.map(number => {
                    const active = currentPage === number ? 'activePage' : '';
                    return (
                        <li
                            key={number}
                            className={`page-item`}>
                            <a
                                onClick={()=> paginate(number)}
                                className={`page-link ${active}`}
                            >
                                <span>
                                    {number}
                                </span>
                            </a>
                        </li>
                    )
                })}
                {/*                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#"><span>1</span></a></li>
                <li className="page-item"><a className="page-link" href="#"><span>2</span></a></li>
                <li className="page-item"><a className="page-link" href="#"><span>3</span></a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>*/}
            </ul>
        </nav>
    );
};

export default Pagination;
