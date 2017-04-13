import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { starSelected } from '../actions/actions_index';
import { bindActionCreators } from 'redux';

class Ratings extends Component {

  renderStars(maxRating, rating, newUser, fullStar = "../Images/StarImage.jpg", blankStar = "../Images/BlankStar.jpg"){
    let userlist = this.props.userlist;
    if (!userlist) {
      userlist = [];
    };

    userlist.push(newUser);

    let results = [];
    for (let i = 1; i <= maxRating; i++) {
      results.push( <img src={(i<=rating)?fullStar:blankStar} alt="Star Image"
          width="40" height="40" value="one" key={i}
          onClick={() => this.props.starSelected(i, this.props.ratingVolume, userlist)}/>);
    }
    return results;
  }

  render() {
    return (
      <div>
        {this.renderStars(this.props.maxRating, this.props.rating, "chris george")}
      </div>
    );
  }
}

//anything returned from this function will end up as props on Ratings
function mapStateToProps(state) {
  const maxRating = 5;

  return {
    rating: state.rating,
    maxRating: maxRating,
    ratingVolume: state.ratingVolume,
    userlist: state.userlist
//    averageRating: state.averageRating
  };
}

//anything returned from this function will end up as props on Ratings
function mapDispatchToProps(dispatch) {
  //whenever starSelected is called, result will be passed to all reducers
  return bindActionCreators({ starSelected: starSelected}, dispatch); //this.props.starSelected
}

// promote ratings from a component to container
export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
