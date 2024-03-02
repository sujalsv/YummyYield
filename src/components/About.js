import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// functional component
//  const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Sujal Here</h2>
//       <User name={"Sujal Virani creating functional component in functional component"} />
//       <UserClass name={"Sujal creating  class component inn functional component named About.js"} />
//     </div>
//   );
// };

//class component
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentdidmount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Sujal Here</h2>
        {/* <User
          name={
            "Sujal Virani creating function component in class component About.js"
          }
        />
        <UserClass
          name={"Sujal creating class component in  class component About.js"}
        /> */}
        <UserClass
          name={"Sujal creating class component in  class component About.js"}
        />
      </div>
    );
  }
}

export default About;

//we need to create state variables and update the ui when the state changes
//we  can use hooks for that which is known as use state.
// what does rendering mean? it means that you are invoking of the functional component you have made into the webpage. Loading a clsss based component on a webpage means creating the instance of the class. whenever you create a class the constructor is called. It allows us to add a variable in our functional.
//what do you mean by life cycle method?
// go through react life cycle method diagram.
// what is DOM?
//what is reconcilliation process?
//
