import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import spinner from './spinner.gif';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>Throwing pokeballs...</h5>
      </React.Fragment>
    );
  }
}
