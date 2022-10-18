import React, { Component } from "react";
import User from "./User";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 1,
    };
  }
  render() {
    return (
      <div className="App">
        {this.props.utilisateurs.map((user) => (
          <User
            key={user.id}
            user={user}
            activeId={this.state.activeId}
            handleChangeActiveId={() => this.setState({ activeId: user.id })}
          />
        ))}
      </div>
    );
  }
}

export default ListUser;
