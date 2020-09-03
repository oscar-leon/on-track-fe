import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard';

import './BookList.scss';

const BookList = ({ books }) => {
  return (
    <div className="book-container">
      <h1 className="book-title">Books list:</h1>
      <div className="book-list">
        {books.map(({ id, ...bookProps }) => (
          <BookCard key={id} {...bookProps} />
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookList;
