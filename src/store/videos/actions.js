import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllVideos = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_VIDEOS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_VIDEOS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_VIDEOS_FAILED,
      payload: err
    });
  }
};

export const addVideo = newVideo => async dispatch => {
  console.log("add video", newVideo);
  dispatch({
    type: types.ADD_VIDEO_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newVideo);
    dispatch({
      type: types.ADD_VIDEO_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_VIDEO_FAILED,
      payload: err
    });
  }
};

export const removeVideo = id => async dispatch => {
  console.log("remove video", id);
  dispatch({
    type: types.REMOVE_VIDEO_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_VIDEO_SUCCESS,
      payload: id
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: types.REMOVE_VIDEO_FAILED,
      payload: err
    });
  }
};

export const editVideo = (updatedVideo, id) => async dispatch => {
  console.log("edit video", updatedVideo);
  dispatch({
    type: types.EDIT_VIDEO_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedVideo);
    dispatch({
      type: types.EDIT_VIDEO_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_VIDEO_FAILED,
      payload: err
    });
  }
};

export const selectVideo = video => dispatch => {
  console.log("select video", video);
  dispatch({
    type: types.SELECT_VIDEO_PENDING
  });
  try {
    dispatch({
      type: types.SELECT_VIDEO_SUCCESS,
      payload: video
    });
  } catch (err) {
    dispatch({
      type: types.SELECT_VIDEO_FAILED,
      payload: err
    });
  }
};
