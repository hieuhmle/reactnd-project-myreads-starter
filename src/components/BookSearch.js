import React from 'react'; 
import { Link } from 'react-router-dom';
import Book from './Book';

const BookSearch = (props) => {
    const { query, books, onQueryChange, onChangeShelf, resetQuery } = props;

    // console.log(books)

    const renderBooks = () => {
        if (books.length) {
            return books.map(book => (
                <li key={book.id}>
                    <Book
                        onChangeShelf={(event, book) => onChangeShelf(event, book)}
                        book={book}
                    />
                </li>
            ));
        }
        else {
            return <p className='no-book'>No Books To Show</p>
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/' onClick={() => resetQuery()}>Close</Link>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => onQueryChange(event)}/>

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