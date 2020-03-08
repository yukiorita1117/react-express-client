import { combineReducers } from "redux";
import {
  CHANGE_INPUT_TEXT,
  INITIALIZE_FORM,
  REQUEST_DATA,
  RECEIVE_DATA_SUCCESS,
  RECEIVE_DATA_FAILED
} from "./actions";

const initialState = {
  form: {
    // AddFormに入力されている文字列
    inputText: ""
  },
  fetchData: {
    isFetching: false, // サーバーからcotohaの感情分析結果をを取ってきている最中かどうか
    resultArray: [] //感情分析の結果
  }
};

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.text // actionのinputTextプロパティに入力された名前を入れることにする
      };
    case INITIALIZE_FORM:
      return initialState.form; // 初期状態を返す
    default:
      return state;
  }
};

const fetchDataReducer = (state = initialState.fetchData, action) => {
  console.log("actionのなかみ", action.resultArray);
  switch (action.type) {
    // データをサーバーにリクエストするときにcharacters.isFetchingをtrueにする
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    //データをサーバーから取得時にfetchData.resultArrayに入れるとともにfetchData.isFetchingをfalseにする
    case RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        resultArray: action.resultArray
      };
    //データの受け取りに失敗した時にfetchData.isFetchingを単にfalseにする
    case RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  fetchData: fetchDataReducer
});

export default rootReducer;
