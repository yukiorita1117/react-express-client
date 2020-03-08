// 文字列定数
export const CHANGE_INPUT_TEXT = "CHANGE_NAME";
export const INITIALIZE_FORM = "INITIALIZE_FORM";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA_SUCCESS = "RECEIVE_DATA_SUCCESS";
export const RECEIVE_DATA_FAILED = "RECEIVE_DATA_FAILED";

// action creaters
export const changeInputText = text => ({
  type: CHANGE_INPUT_TEXT,
  text
});

export const initializeForm = () => ({
  type: INITIALIZE_FORM
});

export const requestData = () => ({
  type: REQUEST_DATA
});
export const receiveDataSuccess = resultArray => ({
  type: RECEIVE_DATA_SUCCESS,
  resultArray
});
export const receiveDataFailed = () => ({
  type: RECEIVE_DATA_FAILED
});
