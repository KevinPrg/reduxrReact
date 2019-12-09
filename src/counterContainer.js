import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button
      onClick={() => dispatch({ type: 'MOREONE' })}
    >
      + 1
    </button>
    <button
      onClick={() => dispatch({ type: 'LESSONE' })}
    >
      - 1
    </button>
    <button
      onClick={() => dispatch({ type: 'RESET' })}
    >
      reset
    </button>
    <button
      onClick={() => dispatch({ type: 'MORETEN' })}
    >
      + 10
    </button>
    <button
      onClick={() => dispatch({ type: 'LESSTEN' })}
    >
      - 10
    </button>
  </div>
);

export default connect(mapStateToProps)(CounterContainer);