import React from 'react'; 
import { Link } from 'react-router-dom';
import Book from './Book';

const BookSearch = (props) => {
    const { query, books, onQueryChange, onShelfChange, setDefaultState } = props;

    const renderBooks = () => {
        if (query.length) {
            return books.map(book => (
                <li key={book.id}>
                    <Book
                        onShelfChange={(event, book) => onShelfChange(event, book)}
                        book={book}
                    />
                </li>
            ));   
        } else {
            return <p className='no-book'>No Books To Show</p>
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/' onClick={() => setDefaultState()}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => onQueryChange(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {renderBooks()}
                </ol>
            </div>
        </div>
    );
}

export default BookSearch;