import axios from 'axios'

import * as types from '../types'
import { url } from '../../config/config'

export const defaultValue = () => {
    return {
        type : types.USER,
        payload : {}
    }
}

export const register = (data) => {
    return {
        type : types.USER,
        payload : axios({
            method : "POST",
            url : `${url.server}api/v1/users/`,
            data : data
        })
    }
}