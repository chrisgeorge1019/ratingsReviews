import { combineReducers } from 'redux';
import RatingReducer from './reducer_rating';
import RatingVolumeReducer from './reducer_rating_volume';
import AverageRatingReducer from './reducer_average_rating';

const rootReducer = combineReducers({
 rating: RatingReducer,
 ratingVolume: RatingVolumeReducer,
// averageRating: AverageRatingReducer
});

export default rootReducer;
