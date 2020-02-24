import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div classname="App">
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key="{user.id}">{user.username}</div>
        ))}
        <h2>POSTING TEST</h2>
        <form method="post" action="/create">
          <input type="text" name="name" />
          <br />
          <br />
          <input type="submit" value="createって話" />
        </form>
      </div>
    );
  }
}

export default App;
