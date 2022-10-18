import axios from "axios";
import { Component } from "react";
import "./App.css";
import ListUser from "./components/ListUser";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.users.length !== 0 ? (
          <ListUser utilisateurs={this.state.users} />
        ) : (
          "Liste users vide"
        )}
      </div>
    );
  }

  componentDidMount() {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    getData().then((users) => this.setState({ users }));
  }
}

export default App;
