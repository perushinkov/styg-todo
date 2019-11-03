import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from 'components/AddList/list-add.module.css';
import { addList } from 'store/actions/board/lists';

const AddList = ({
    addList,
    className,
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
        if (!title.length) {
            return;
        }

        addList({
            cards: [],
            title,
        });

        setTitle('');
    };

    return (
        <div className={`${styles.list_add} ${className}`}>
            <input type="text" value={title} onChange={onTitleChange} onKeyDown={onTitleKeyDown} />
            <button onClick={onSubmit}>Add List</button>
        </div>
    );
};

export default connect(
    null,
    {
        addList,
    }
)(AddList);
