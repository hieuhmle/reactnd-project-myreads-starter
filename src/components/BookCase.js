import React from 'react'; 

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
            <li key={shelf.id}></li>
            // TODO: Add Shelf Component
        ));
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <ol>

                </ol>
            </div>
            <div className="open-search">
              
            </div>
        </div>
    );
}

export default BookCase;