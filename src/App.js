import React, { useState, useEffect } from 'react';
import getBooks from './services/getBooks';
import Spinner from './components/Spinner';
import BookList from './components/BookList';
import Paginator from './components/Paginator';
import usePageQuery from './hooks/usePageQuery';

function App() {
  const page = usePageQuery();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks({ page })
      .then(({ books: booksResponse }) => setBooks(booksResponse))
      .then(() => setLoading(false));
  }, [page]);

  if (loading) return <Spinner />;

  return (
    <div className="app-container">
      {books.length ? <BookList books={books} /> : <div>No results found!</div>}

      <Paginator />
    </div>
  );
}

export default App;
