import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [], cotoha: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch("/cotoha")
      .then(res => res.json())
      .then(cotoha => this.setState({ cotoha }));
  }

  render() {
    return (
      <div className="App">
        <h1>Usersからdata取得</h1>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}

        <h2>感情分析</h2>
        <form method="post" action="/cotoha">
          <input type="text" name="name" />
          <br />
          <br />
          <input type="submit" value="createって話" />
        </form>

        <h2>Cotohaからdata取得</h2>
        {this.state.cotoha.map(cotoha => (
          <div key={cotoha.id}>{cotoha.text}</div>
        ))}
      </div>
    );
  }
}

export default App;
