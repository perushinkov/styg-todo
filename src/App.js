import React from 'react';
import { connect } from 'react-redux';

import AddList from 'components/AddList';
import Lists from 'components/Lists';

function App() {
  return (
    <div className="App">
      <Lists />

      <AddList />
    </div>
  );
}

export default connect(
  null,
  {}
)(App);