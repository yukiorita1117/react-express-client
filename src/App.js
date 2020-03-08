import React, { Component } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import FetchDataList from "./components/FechDataList";

class App extends Component {
  state = { users: [], cotoha: [] };
  prevProps = [];

  // fetchCotoha = () => {
  //   fetch("/cotoha")
  //     .then(res => res.json())
  //     .then(cotoha => this.setState({ cotoha }));
  // };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch("/cotoha")
      .then(res => res.json())
      .then(cotoha => this.setState({ cotoha }));
  }

  // componentDidUpdate(prevProps) {
  //   // 変更されたら再フェッチ
  //   if (this.state.cotoha !== prevProps) {
  //     console.log("prevProps", prevProps);
  //   }
  // }

  render() {
    this.prevProps = this.state.cotoha;

    return (
      <div className="App">
        <h1>Usersからdata取得</h1>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}

        <h2>感情分析</h2>
        <AddForm store={this.props.store} />

        <h2>Cotohaからdata取得</h2>
        <FetchDataList store={this.props.store} />

        {/* {this.prevProps.map(cotoha => (
          <div key={cotoha.id}>{cotoha.text}</div>
        ))} */}

        {/* <form method="get" action="/cotoha">
          <input type="text" name="name" />
          <br />
          <br />
          <input type="submit" value="createって話" />
        </form> */}
      </div>
    );
  }
}

export default App;
