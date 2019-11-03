import React from 'react';
import { connect } from 'react-redux';

import Lists from 'components/Lists';
import 'reset.css';
import 'base.css';

function App() {
  return (
    <div className="App">
      <Lists />
    </div>
  );
}

export default connect(
  null,
  {}
)(App);