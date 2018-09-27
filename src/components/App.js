import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import BookCase from './BookCase';
import BookSearch from './BookSearch';


class App extends Component {
    state = {
        books: [],
        query: '',
        searchResults: []
    }

    componentDidMount () {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    onChangeShelf (event, book) {
        const newShelf = event.target.value;
        BooksAPI.update(book, newShelf)
            .then(() => BooksAPI.getAll())
            .then(books => this.setState({books}));
    }

    onQueryChange (event) {
        this.setState({query: event.target.value}, () => this.searchBooks(this.state.query));
    }

    searchBooks (query) {
        if (query.length) {
            BooksAPI.search(query).then(books => this.setState({searchResults: books}));
        } else {
            this.setState({searchResults: []})
        }
    }

    resetQuery () {
        this.setState({query: '', searchResults: []})
    }

    render () {
        // BooksAPI.getAll().then(books => console.log(books));
        // BooksAPI.search('React').then(books => console.log(books));
        const { books, query, searchResults } = this.state;

        return (
            <div>
                <Route exact path='/' render={() => (
                    <BookCase 
                        books={books} 
                        onChangeShelf={(event, book) => this.onChangeShelf(event, book)}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch 
                        query={query} 
                        books={searchResults} 
                        onQueryChange={(event) => this.onQueryChange(event)}
                        onChangeShelf={(event, book) => this.onChangeShelf(event, book)}
                        resetQuery={() => this.resetQuery()}
                    />
                )}/> 
            </div>
        );
    }
}

export default App;