import React, { Component } from 'react';
import '../App.css';
import BookCase from './BookCase';
import * as BooksAPI from '../BooksAPI';

class App extends Component {
    state = {
        books: []
    }

    componentDidMount () {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    onChangeShelf (event, book) {
        const newShelf = event.target.value;
        BooksAPI.update(book, newShelf)
            .then(result => BooksAPI.getAll())
            .then(books => this.setState({books}))
    }

    render () {
        BooksAPI.getAll().then(books => console.log(books));
        BooksAPI.search('React').then(books => console.log(books));
        const { books } = this.state;

        return (
            <div>
                <BookCase books={books} onChangeShelf={(event, book) => this.onChangeShelf(event, book)}/>
            </div>
        );
    }
}

export default App;