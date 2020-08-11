import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './BookCard.scss';

const BookCard = ({
  book_title,
  book_author,
  book_publication_year,
  book_publication_country,
  book_pages
}) => {
  return (
    <div className="card-wrapper">
      <Card bg="primary" className="book-card">
        <Card.Header as="h5">{book_title}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span>Author(s): </span>
            {book_author.map(author => (
              <div key={author}>{author}</div>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Publication year: </span>
            {book_publication_year}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Country: </span>
            {book_publication_country}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Pages: </span>
            {book_pages}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

BookCard.propTypes = {
  book_title: PropTypes.string.isRequired,
  book_author: PropTypes.arrayOf(PropTypes.string).isRequired,
  book_publication_year: PropTypes.number.isRequired,
  book_publication_country: PropTypes.string.isRequired,
  book_pages: PropTypes.number.isRequired
};

export default BookCard;
