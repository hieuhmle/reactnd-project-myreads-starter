import React from 'react';
import Suggestion from './Suggestion';

const Suggestions = (props) => {
    const allSuggestions = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 
    'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 
    'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 
    'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 
    'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 
    'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 
    'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 
    'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 
    'Virtual Reality', 'Web Development', 'iOS']

    const { query, onQueryChange } = props;
    const suggestions = allSuggestions.filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()));

    const renderSuggestions = () => {
        return suggestions.map(suggestion => 
            <Suggestion 
                key={suggestion} 
                suggestion={suggestion}
                onQueryChange={(query) => onQueryChange(query)}
            />
        )
    }

    return (
        <div className='suggestions-container'>
            {renderSuggestions()}
        </div>
    );
}

export default Suggestions;