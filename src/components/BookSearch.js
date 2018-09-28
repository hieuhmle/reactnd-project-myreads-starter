import React from 'react'; 
import { Link } from 'react-router-dom';
import Book from './Book';
import Suggestions from './Suggestions'

const BookSearch = (props) => {
    const { query, books, onQueryChange, onShelfChange, setHomeState, setSearchState } = props;

    /**
     * @description render <Book/> component
     */
    const renderBooks = () => {
        if (books.length) {
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
                <Link className="close-search" to='/' onClick={() => setHomeState()}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                        id="search-input" 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={query} 
                        onChange={(event) => onQueryChange(event.target.value)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 8 && !query.length) {
                                setSearchState();
                            }
                          }}
                    />
                </div>
                <div className="clear-search" onClick={() => setSearchState()}></div>
            </div>
            <Suggestions onQueryChange={(query) => onQueryChange(query)}query={query}/>
            <div className="search-books-results">
                <ol className="books-grid">
                    {renderBooks()}
                </ol>
            </div>
        </div>
    );
}

export default BookSearch;