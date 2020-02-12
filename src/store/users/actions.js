import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_USERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("RES", response.data);
    dispatch({
      type: types.FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

export const addUser = newUser => async dispatch => {
  dispatch({
    type: types.ADD_USER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newUser);
    dispatch({
      type: types.ADD_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_USER_FAILED,
      payload: err
    });
  }
};

export const removeUser = id => async dispatch => {
  dispatch({
    type: types.REMOVE_USER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_USER_SUCCESS,
      payload: id
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: types.REMOVE_USER_FAILED,
      payload: err
    });
  }
};

export const editUser = (updatedUser, id) => async dispatch => {
  dispatch({
    type: types.EDIT_USER_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedUser);
    dispatch({
      type: types.EDIT_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_USER_FAILED,
      payload: err
    });
  }
};

export const selectUser = user => dispatch => {
  dispatch({
    type: types.SELECT_USER_PENDING
  });
  try {
    dispatch({
      type: types.SELECT_USER_SUCCESS,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: types.SELECT_USER_FAILED,
      payload: err
    });
  }
};
