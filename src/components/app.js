import React, { Component } from 'react';

import Ratings from './ratings';
import CurrentRating from './current_rating';

export default class App extends Component {

  render() {
    return (
      <div>
        <h2>Ratings Reviews Widget</h2>
        <Ratings/>
        <CurrentRating/>
      </div>
    );
  }

}
