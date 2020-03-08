import React from "react";
import styled from "styled-components";
import axios from "axios";
import { requestData, receiveDataSuccess, receiveDataFailed } from "../actions";

const FetchDataList = ({ store }) => {
  const { isFetching, resultArray } = store.getState().fetchData;

  const handleFetchData = () => {
    store.dispatch(requestData()); // axios.get()を呼ぶ前にisFetchingをtrueに！
    axios
      .get("/api/cotoha")
      .then(response => {
        // データ受け取りに成功
        const _resultArray = response.data;
        store.dispatch(receiveDataSuccess(_resultArray)); // データをstoreに保存するとともにisFetchingをfalseに
      })
      .catch(err => {
        // データ受け取りに失敗
        // console.error(new Error(err));
        store.dispatch(receiveDataFailed()); // isFetchingをfalseに
      });
  };

  const Item = styled.li`
    list-style: none;
  `;

  return (
    <>
      <br />
      <div>
        {isFetching ? (
          // データをFetch中ならばローディングアイコンを表示
          <h2>Now Loading...</h2>
        ) : (
          <div>
            <button onClick={() => handleFetchData()}>fetch data</button>
            <ul>
              {resultArray.map(result => (
                <Item key={result.id}>{`${result.inputText}`}</Item>
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
