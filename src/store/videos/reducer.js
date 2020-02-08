import * as types from "./constants";

const initialState = {
  all: [],
  selectedVideo: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_VIDEOS_PENDING:
    case types.ADD_VIDEO_PENDING:
    case types.REMOVE_VIDEO_PENDING:
    case types.EDIT_VIDEO_PENDING:
    case types.SELECT_VIDEO_PENDING:
      return state;

    case types.FETCH_ALL_VIDEOS_FAILED:
    case types.ADD_VIDEO_FAILED:
    case types.REMOVE_VIDEO_FAILED:
    case types.EDIT_VIDEO_FAILED:
    case types.SELECT_VIDEO_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_VIDEO_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_VIDEO_SUCCESS:
      return {
        ...state,
        all: state.all.filter(video => video.id !== action.payload)
      };

    case types.EDIT_VIDEO_SUCCESS:
      return {
        ...state,
        all: [
          action.payload,
          ...state.all.filter(video => video.id !== action.payload.id)
        ]
      };

    case types.SELECT_VIDEO_SUCCESS:
      return {
        ...state,
        selectedVideo: action.payload
      };

    default:
      return state;
  }
};
