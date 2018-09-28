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

    // Set states according to paths
    componentDidMount () {
        const path = window.location.pathname;
        if (path === '/') {
            this.setHomeState();
        } else if (path === '/search') {
            this.setSearchState();
        }      
    }

    /**
     * @description Set books on shelf as App state
     */
    setHomeState () {
        BooksAPI.getAll().then(books => this.setState({books, query:''}));
    }

    /**
     * @description Set empty books array and empty string as App state
     */
    setSearchState () {
        this.setState({books: [], query: ''})
    }

    /**
     * @description Check if searched books are on shelf. If yes, update the shelf property on the books on shelf
     * @param {array} books - Arrays of searched books
     * @returns {array} Arrays of searched books with shelf property
     */
    checkOnShelf(books) {
        return BooksAPI.getAll()
            .then(function(savedBooks) {
                for (let i = 0; i < books.length; i++) {
                    for (let j = 0; j < savedBooks.length; j++) {
                        if (books[i].id === savedBooks[j].id) {
                            books[i].shelf = savedBooks[j].shelf;
                        }
                    }
                }
                return books;
            })
    }

    /**
     * @description Update shelf of a book when user move the book to another shelf
     * @param {object} event - Search input onChange event
     * @param {obj} book - The book to be moved
     */
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

    /**
     * @description Update query state then call searchBooks function
     * @param {string} query
     */
    onQueryChange (query) {
        this.setState({query}, () => this.searchBooks(this.state.query));
    }

    /**
     * @description Search books by query then update state accordingly
     * @param {string} query
     */
    searchBooks (query) {
        if (query.length) {
            BooksAPI.search(query).then(books => {
                if (books[0]) {
                    this.checkOnShelf(books).then(books => this.setState({books}));
                } else {
                    this.setState({books: []});
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