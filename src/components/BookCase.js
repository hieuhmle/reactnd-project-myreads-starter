import React from 'react'; 
import Shelf from './Shelf';

const BookCase = (props) => {
    const { books } = props;

    const shelves = [
        {id: 'currentlyReading', title: 'Currently Reading'},
        {id: 'wantToRead', title: 'Want To Read'},
        {id: 'read', title: 'read'}
    ];

    const filterBooksByShelf = (shelf) => {
        return books.filter(book => book.shelf === shelf);
    }

    const renderShelves = () => {
        return shelves.map(shelf => (
            <li key={shelf.id}>
                <Shelf 
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
              
            </div>
        </div>
    );
}

export default BookCase;