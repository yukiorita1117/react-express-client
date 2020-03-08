import React from "react";
import styled from "styled-components";
import axios from "axios";
import { requestData, receiveDataSuccess, receiveDataFailed } from "../actions";

const FetchDataList = ({ store }) => {
  const { isFetching, resultArray } = store.getState().fetchData;
  console.log("resultArrayない？？", store.getState().fetchData);

  const handleFetchData = () => {
    store.dispatch(requestData()); // axios.get()を呼ぶ前にisFetchingをtrueに！
    axios
      .get("/api/test")
      .then(response => {
        // データ受け取りに成功
        const _resultArray = response.data;
        store.dispatch(receiveDataSuccess(_resultArray)); // データをstoreに保存するとともにisFetchingをfalseに
      })
      .catch(err => {
        // データ受け取りに失敗
        console.error(new Error(err));
        store.dispatch(receiveDataFailed()); // isFetchingをfalseに
      });
  };
  console.log("ええええええ", resultArray);

  return (
    <>
      <br />
      <div>
        {isFetching ? ( // isFetchingの値で分岐
          <h2>Now Loading...</h2> // データをFetch中ならばローディングアイコンを表示
        ) : (
          <div>
            <button onClick={() => handleFetchData()}>fetch data</button>
            <ul>
              {resultArray.length > 1 &&
                resultArray.map(result => (
                  <li key={result.id}>{`${result.inputText}`}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <br />
    </>
  );
};

export default FetchDataList;
