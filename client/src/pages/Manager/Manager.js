import React, { Component } from 'react'

class Manager extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: "",
    client: ""
  }

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: client.idToken.claims.email,
      currentUserName: client.idToken.claims.name
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>

      </div>
    )
  }
}

export default Manager;
