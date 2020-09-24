import {
  LOAD_CATS,
  LOAD_CATS_SUCCESS,
  LOAD_CATS_FAILURE,
  LIKE_CAT,
} from './actionTypes';

const initialState = {
  isLoading: false,
  cats: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATS:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_CATS_SUCCESS:
      return {
        isLoading: false,
        cats: action.cats,
      };

    case LOAD_CATS_FAILURE:
      return {
        isLoading: false,
        cats: [],
      };

    case LIKE_CAT:
      return {
        isLoading: false,
        cats: {
          ...state.cats,
          [action.catID]: {
            ...state.cats[action.catID],
            liked: !state.cats[action.catID].liked,
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
