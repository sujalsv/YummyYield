import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>Sujal Here</h2>
        <div>
          <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser})=>(
              <h1>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass
          name={"Sujal creating class component in  class component About.js"}
        />
      </div>
    );
  }
}

export default About;


