import { ADD_CARD_DETAIL } from "../actions/actionCreators"


const initialState = {
    post: {}
}

const detailReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD_DETAIL:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}

export default detailReducer
