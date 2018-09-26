import React from 'react'; 

const Shelf = (props) => {
    const { title, books } = props;

    const renderBooks = () => {
        return books.map(book => (
            <li key={book.id}></li>
            // TODO: Add BOOK component
        ))
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                
            </ol>
            </div>
        </div>
    );
}

export default Shelf;