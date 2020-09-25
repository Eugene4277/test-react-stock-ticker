import * as ActionTypes from "./actionTypes";

export const setTicker = (data) => ({
    type: ActionTypes.FETCH_TICKER,
    payload: data
});