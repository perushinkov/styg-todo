import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addList } from 'store/actions/board/lists';

const AddList = ({
    addList,
}) => {
    const [title, setTitle] = useState('');

    const onTitleChange = event => {
        setTitle(event.target.value);
    };

    const onTitleKeyDown = event => {
        if (event.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        addList({
            cards: [],
            title,
        });

        setTitle('');
    };

    return (
        <div>
            <div>Title: <input type="text" value={title} onChange={onTitleChange} onKeyDown={onTitleKeyDown} /></div>
            <div><button onClick={onSubmit}>Add List</button></div>
        </div>
    );
};

export default connect(
    null,
    {
        addList,
    }
)(AddList);
