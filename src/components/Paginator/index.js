import React from 'react';
import { useHistory } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

import usePageQuery from '../../hooks/usePageQuery';

import './Paginator.scss';

const Paginator = () => {
  const page = usePageQuery();
  const history = useHistory();

  const updatePage = newPage => {
    history.push(`/?page=${newPage}`);
  };

  const handleNext = () => {
    const nextPage = page + 1;

    updatePage(nextPage);
  };

  const handlePrevious = () => {
    if (page <= 1) return;

    const nextPage = page - 1;

    updatePage(nextPage);
  };

  return (
    <div className="paginator-container fixed-bottom">
      <div className="paginator-wrapper">
        <Pagination>
          <Pagination.Prev onClick={handlePrevious} />
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Next onClick={handleNext} />
        </Pagination>
      </div>
    </div>
  );
};

export default Paginator;
