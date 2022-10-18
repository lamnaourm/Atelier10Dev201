import axios from "axios";
import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  HandelPosts = () => {
    const getData = async () => {
      const posts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.activeId}`
      );
      return posts.data;
    };
    getData().then((posts) => this.setState({ posts }));
    this.props.handleChangeActiveId(this.props.user.id);
  };

  render() {
    return (
      <div className="child">
        <h3>
          nom: {this.props.user.name} {this.props.user.username}
        </h3>
        <p>email:{this.props.user.email}</p>
        <p>
          ville:{this.props.user.address.city}
          rue:{this.props.user.address.street}
        </p>
        <button onClick={this.HandelPosts}>details posts</button>

        {this.props.user.id === this.props.activeId && (
          <div>
            <h5 style={{ color: "green" }}>
              nombre des posts: {this.state.posts.length}
            </h5>
            {this.state.posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default User;
