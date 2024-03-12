import React, { useState } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "defaultName",
        url: "null",
        id: 0,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sujalsv");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    const { login, url, id } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Name:{login}</h1>
        <p>URL:{url} </p>
        <p>ID:{id} </p>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
