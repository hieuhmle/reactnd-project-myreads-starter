import React from 'react'; 
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

const BookCase = (props) => {
    const { books, onShelfChange, setSearchState } = props;

    const shelves = [
        {id: 'wantToRead', title: 'Want To Read'},
        {id: 'currentlyReading', title: 'Currently Reading'},
        {id: 'read', title: 'Read'}
    ];

    /**
     * @description get books from an exact shelf
     * @param {string} shelf
     */
    const filterBooksByShelf = (shelf) => {
        return books.filter(book => book.shelf === shelf);
    }

    /**
     * @description render <Shelf/> components
     */
    const renderShelves = () => {
        return shelves.map(shelf => (
            <li key={shelf.id}>
                <Shelf 
                    onShelfChange={(event, book) => onShelfChange(event, book)}
                    title={shelf.title}
                    books={filterBooksByShelf(shelf.id)}
                />
            </li>
        ));
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <ul>
                    {renderShelves()}
                </ul>
            </div>
            <div className="open-search">
                <Link to='/search' onClick={() => setSearchState()}></Link>
            </div>
        </div>
    );
}

export default BookCase;