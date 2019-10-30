import React from 'react';
import { connect } from 'react-redux';

import { getListCards } from 'store/getters/board/lists';
import AddCard from './AddCard';

const List = ({
    list,
    getListCards,
}) => {
    const cards = getListCards(list.id);

    return (
        <div>
            <h3>{ list.title }</h3>

            { cards.map(card => <div key={card.id}><h4>{ card.title }</h4></div>) }

            <AddCard listId={list.id} />
        </div>
    );
};

export default connect(
    state => ({
        getListCards: getListCards(state),
    }),
)(List);
