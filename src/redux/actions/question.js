import axios from 'axios'

import * as types from '../types'
import { url } from '../../config/config'

export const defaultValue = () => {
    return {
        type : types.QUESTION,
        payload : {}
    }
}

export const getQuestion = (number) => {
    return {
        type : types.QUESTION,
        payload : axios({
            method : "GET",
            url : `${url.server}api/v1/questions?number=${number}`
        })
    }
}

export const addAnswer = (data) => {
    return {
        type : types.ADD_ANSWER,
        payload : data
    }
}

export const submitAnswer = (data) => {
    return {
        type : types.SUBMIT_ANSWER,
        payload : axios({
            method : "POST",
            url : `${url.server}api/v1/answers`,
            data : data
        })
    }
}