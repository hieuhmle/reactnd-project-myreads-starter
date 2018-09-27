import React from 'react'; 

const Book = (props) => {
    const { onShelfChange, book} = props;
    const { title, authors, shelf } = book;
    const thumbnail = book.imageLinks.thumbnail;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={shelf ? shelf : 'none'} onChange={(event) => onShelfChange(event, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors ? authors.reduce((str, author) => str + author + '\n') : ''}</div>
        </div>
    );
}

export default Book;