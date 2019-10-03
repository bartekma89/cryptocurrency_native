import axios from "axios";
import { get } from "lodash";

import { apiBaseURL } from "../utils/constants";
import { apiKey } from "../config";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "./actionTypes";

//TODO Dodac ladowanie bledow do reducera za pomoca async/await

export const fetchCoinData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios({
      method: "GET",
      url: `${apiBaseURL}/top/totaltoptiervolfull?limit=10&tsym=USD&api_key={${apiKey}}`
    })
      .then(res => {
        const data = get(res, "data");
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: data });
      })
      .catch(err => {
        console.log(err);
        const data = get(err, "data");
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: data });
      });
  };
};
