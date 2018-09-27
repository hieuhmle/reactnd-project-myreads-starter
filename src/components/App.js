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
    }

    componentDidMount () {
        this.setDefaultState();
    }

    setDefaultState () {
        BooksAPI.getAll().then(books => this.setState({books, query:''}));
    }

    onShelfChange (event, book) {
        const newShelf = event.target.value;
        BooksAPI.update(book, newShelf)
            .then(() => {
                if (this.state.query.length) {
                    this.searchBooks(this.state.query);
                } else {
                    BooksAPI.getAll().then(books => this.setState({books}))
                }
            })
    }

    onQueryChange (event) {
        this.setState({query: event.target.value}, () => this.searchBooks(this.state.query));
    }

    searchBooks (query) {
        if (query.length) {
            BooksAPI.search(query).then(books => this.setState({books}));
        } else {
            this.setState({books: []})
        }
    }

    render () {
        // BooksAPI.getAll().then(books => console.log(books));
        // BooksAPI.search('React').then(books => console.log(books));
        const { books, query } = this.state;

        return (
            <div>
                <Route exact path='/' render={() => (
                    <BookCase 
                        books={books} 
                        onShelfChange={(event, book) => this.onShelfChange(event, book)}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch 
                        query={query} 
                        books={books} 
                        onQueryChange={(event) => this.onQueryChange(event)}
                        onShelfChange={(event, book) => this.onShelfChange(event, book)}
                        setDefaultState={() => this.setDefaultState()}
                    />
                )}/> 
            </div>
        );
    }
}

export default App;