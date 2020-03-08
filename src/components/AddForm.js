import React from "react";
import axios from "axios";
import {
  changeInputText,
  initializeForm,
  requestData,
  receiveDataSuccess,
  receiveDataFailed
} from "../actions";

const AddForm = ({ store }) => {
  const { inputText } = store.getState().form; // storeからフォームの内容を取得

  const handleSubmit = e => {
    e.preventDefault(); // フォームsubmit時のデフォルトの動作を抑制

    axios
      .post("/api/test", {
        inputText
      }) // キャラクターの名前、年齢からなるオブジェクトをサーバーにPOST
      .then(response => {
        console.log(response); // 後で行う動作確認のためのコンソール出力
        store.dispatch(initializeForm()); // submit後はフォームを初期化
      })
      .catch(err => {
        console.error(new Error(err));
      });
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          テキスト入力
          <input
            value={inputText}
            onChange={e => store.dispatch(changeInputText(e.target.value))}
          />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddForm;
