import * as types from '../types'

const initialState = {
    data: [],
    savedAnswer: [],
    type: null,
    question_count: null,
    isSubmit: false,
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
}

export default function questions(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ANSWER:
            return {
                ...state,
                savedAnswer: state.savedAnswer.concat(action.payload)
            }
        case types.SUBMIT_ANSWER_PENDING:
            return {
                ...state,
            }
        case types.SUBMIT_ANSWER_REJECTED:
            return {
                ...state,
                isError: true,
            }
        case types.SUBMIT_ANSWER_FULFILLED:
            return {
                ...state,
                isSubmit: true,
            }
        case types.QUESTION:
            return {
                ...state,
                data: [],
                savedAnswer: [],
                type: null,
                question_count: null,
                isSubmit: false,
                isSuccess: false,
                isLoading: false,
                isError: false,
                errorMessage: "",
            }

        case types.QUESTION_PENDING:
            return {
                ...state,
                isLoading: true,
            }

        case types.QUESTION_REJECTED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }


        case "QUESTION_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                type: action.payload.data.data.type,
                question_count: action.payload.data.question_count,
                data: action.payload.data.data,
            }

        default:
            return state
    }
}