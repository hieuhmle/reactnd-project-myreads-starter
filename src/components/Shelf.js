import React from 'react'; 
import Book from './Book';

const Shelf = (props) => {
    const { title, books, onChangeShelf } = props;

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
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {renderBooks()}
            </ol>
            </div>
        </div>
    );
}

export default Shelf;