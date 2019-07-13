import * as types from '../types'

const initialState = {
    data: [],
    id: null,
    isSuccess : false,
    isLoading : false,
    isError : false,
    errorMessage  : "",
}

export default function users(state = initialState, action){
    switch (action.type){
        case types.USER :
        return {
            ...state,
            data: [],
            isLoading : false,
            isError : false,
            errorMessage  : "",
            isSuccess : false
        }
        
        case types.USER_PENDING :
        return {
            ...state,
            isLoading : true,
        }

        case types.USER_REJECTED :
        return {
            ...state,
            isLoading : false,
            isError : true,
            errorMessage : action.payload
        }

       
        case "USER_FULFILLED" :
        return {
            ...state,
            isLoading : false,
            isSuccess : true,
            id : action.payload.data.data.id
        }

        case "USER_FULFILED" : 
        return {
            ...state,
            isLoading : false,
            isSuccess : true,
            id : action.payload.data.data.id
        }

        default:
        return state
    }
}