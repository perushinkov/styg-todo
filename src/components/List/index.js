import React from 'react';
import { connect } from 'react-redux';

import { getListCards } from 'store/getters/board/lists';
import AddCard from 'components/AddCard';
import Card from 'components/Card';
import styles from 'components/List/list.module.css';

const List = ({
    list,
    getListCards,
    className,
}) => {
    const cards = getListCards(list.id);

    return (
        <div className={`${styles.list} fancy-scroll ${className}`}>
            <h3 className={styles.title}>{ list.title }</h3>

            <AddCard listId={list.id} />

            { cards.map(card => <Card card={card} key={card.id} />) }
        </div>
    );
};

export default connect(
    state => ({
        getListCards: getListCards(state),
    }),
)(List);
