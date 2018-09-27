import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import BookCase from './BookCase';
import BookSearch from './BookSearch';


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
            .then(() => BooksAPI.getAll())
            .then(books => this.setState({books}))
    }

    render () {
        // BooksAPI.getAll().then(books => console.log(books));
        // BooksAPI.search('React').then(books => console.log(books));
        const { books } = this.state;

        return (
            <div>
                <Route exact path='/' render={() => (
                    <BookCase books={books} onChangeShelf={(event, book) => this.onChangeShelf(event, book)}/>
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch />
                )}/> 
            </div>
        );
    }
}

export default App;