import React from 'react';

const Suggestion = (props) => {
    const { suggestion, onQueryChange } = props;
    
    return (
        <div className='suggestion' onClick={() => {
            document.getElementById('search-input').focus();
            onQueryChange(suggestion)
        }}>
            {suggestion}
        </div>
    );
}

export default Suggestion;