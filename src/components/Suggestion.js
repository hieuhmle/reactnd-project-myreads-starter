import React from 'react';

const Suggestion = (props) => {
    const { suggestion, onQueryChange } = props;
    return (
        <div className='suggestion' onClick={() => onQueryChange(suggestion)}>{suggestion}</div>
    );
}

export default Suggestion;