import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'


//do not use PROPS in redux.  Use Components.

const initState = {
    films: []
}


export const getFilms = (searchInput) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=bfab15aae72f6c05d2016f56e65511fc&language=en-US&page=1`).then(response => {
            console.log(response.data)
            dispatch({
                type: "GET_FILMS",
                films: response.data.results

            })
        })
    }
}

// const getData

const reducer = (prevState = initState, action) => {
    switch (action.type) {
        case "GET_FILMS":
            return {
                films: action.films
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))
