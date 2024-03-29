import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from 'components/AddCard/add-card.module.css';
import { addCard } from 'store/actions/board/cards';

const AddCard = ({ listId, addCard }) => {
    const [title, setTitle] = useState('');

    const onAddCard = () => {
        if (!title.length) {
            return;
        }

        addCard({
            card: {
                title,
            },
        
            listId,
        });

        setTitle('');
    };

    const onTitleChange = event => {
        setTitle(event.target.value);
    };

    const onTitleKeyDown = event => {
        if (event.keyCode === 13) {
            onAddCard();
        }
    }

    return (
        <div className={styles.add_card}>
            <input onKeyDown={onTitleKeyDown} onChange={onTitleChange} value={title} />
            <button onClick={onAddCard}>Add Card</button>
        </div>
    )
};

export default connect(
    null,
    {
        addCard,
    }
)(AddCard);