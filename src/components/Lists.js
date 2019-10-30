import React from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { getLists } from 'store/getters/board/lists';

const Lists = ({ lists }) => {

    return (
        <div>
            { lists.map(list => <List list={list} key={list.id}/>) }
        </div>
    );
};

export default connect(
    state => ({
        lists: getLists(state)
    })
)(Lists);
