import * as types from "./actionCreators"



export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST
})

export const fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostsFailure = (error) => ({
    type: types.FETCH_POSTS_FAILURE,
    payload: error
})


export const fetchPosts = () => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch post');
          }
          return response.json();
        })
        .then((data) => {
          dispatch(fetchPostsSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchPostsFailure(error.message));
        });
    };
  };
  

