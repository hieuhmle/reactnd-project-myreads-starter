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
        const path = window.location.pathname;
        if (path === '/') {
            this.setHomeState();
        } else if (path === '/search') {
            this.setSearchState();
        }      
    }

    setHomeState () {
        BooksAPI.getAll().then(books => this.setState({books, query:''}));
    }

    setSearchState () {
        this.setState({books: [], query: ''})
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

    onQueryChange (query) {
        this.setState({query}, () => {this.searchBooks(this.state.query); console.log(query)});
    }

    searchBooks (query) {
        if (query.length) {
            BooksAPI.search(query).then(books => {
                if (books[0]) {
                    this.setState({books});
                } else {
                    this.setState({books: []})
                }
            });
        } else {
            this.setState({books: []})
        }
    }

    render () {
        const { books, query } = this.state;

        return (
            <div>
                <Route exact path='/' render={() => (
                    <BookCase 
                        books={books} 
                        onShelfChange={(event, book) => this.onShelfChange(event, book)}
                        setSearchState={() => this.setSearchState()}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch 
                        query={query} 
                        books={books} 
                        onQueryChange={(event) => this.onQueryChange(event)}
                        onShelfChange={(event, book) => this.onShelfChange(event, book)}
                        setHomeState={() => this.setHomeState()}
                        setSearchState={() => this.setSearchState()}
                    />
                )}/> 
            </div>
        );
    }
}

export default App;