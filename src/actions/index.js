// actions
import jsonPlaceholder from '../api/jsonPlaceholder';

// due to asynchronous process, it returns function instead of action object by utilizing redux-thunk
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};
