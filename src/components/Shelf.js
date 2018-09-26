import React from 'react'; 
import Book from './Book';

const Shelf = (props) => {
    const { title, books } = props;

    const renderBooks = () => {
        return books.map(book => (
            <li key={book.id}>
                <Book
                    thumbnail={book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
                    shelf={book.shelf}
                />
            </li>
        ))
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