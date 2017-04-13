import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentRating extends Component {

  render() {
    if (!this.props.rating) {
      return <h3>Choose a rating puhhlease.</h3>
    }
    return (
      <div>
        <h3>Current Rating:</h3>
        <div>
          {this.props.rating} stars.
          There are {this.props.ratingVolume} reviews so far.
          {this.props.userlist} have all given reviews.
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rating: state.rating,
    ratingVolume: state.ratingVolume,
    userlist: state.userlist
    // averageRating: state.averageRating
  };
}

export default connect(mapStateToProps)(CurrentRating);
