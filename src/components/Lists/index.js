import React from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import AddList from 'components/AddList';
import styles from 'components/Lists/lists.module.css';
import { getLists } from 'store/getters/board/lists';

const Lists = ({ lists }) => {

    return (
        <div className={styles.lists}>
            <div className={`${styles.lists_inner} fancy-scroll`}>
                <div className={styles.lists_items}>
                    { lists.map(list => <List className={styles.list} list={list} key={list.id}/>) }

                    <AddList className={styles.add_list}/>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        lists: getLists(state)
    })
)(Lists);
