import {
  LOAD_CATS,
  LOAD_CATS_SUCCESS,
  LOAD_CATS_FAILURE,
  LIKE_CAT,
} from './actionTypes';
import axios from 'axios';
import {catSourceURL} from '../contants';

export const fetchCats = () => (dispatch) => {
  dispatch({type: LOAD_CATS});

  axios
    .get(catSourceURL)
    .then((res) => {
      const list = res.data.data;
      const catDict = {};
      list.map((cat) => (catDict[cat.id] = {...cat, liked: false}));
      dispatch({type: LOAD_CATS_SUCCESS, cats: catDict});
    })
    .catch((error) => {
      dispatch({type: LOAD_CATS_FAILURE});
    });
};

export const likeCat = (catID) => (dispatch) => {
  dispatch({type: LIKE_CAT, catID: catID});
};
