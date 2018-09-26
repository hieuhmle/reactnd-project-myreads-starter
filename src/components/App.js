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

    render () {
        const { books } = this.state;
        return (
            <div>
                <BookCase books={books}/>
            </div>
        );
    }
}

export default App;