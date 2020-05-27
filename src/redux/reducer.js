

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './actionTypes'


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state;
    }

}

export default reducer;