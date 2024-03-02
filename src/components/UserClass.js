import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
    // console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sujalsv");
    const json = await data.json();
    // console.log("child componentdidmount");
    console.log(json)
  }
  render() {
    // console.log("child render");
    const { name } = this.props;
    return (
      <div className="user-card">
        {/* <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count increase
        </button> */}
        <h1>Name:{name}</h1>
        <h2>Email: sujalviranisv@gmail.com</h2>
        <h3>Location: Ahmedabad</h3>
      </div>
    );
  }
}

export default UserClass;

// how this class component is mounted/loaded in webpage/ lifecycle of class based components
// the firdt thing when the class  component is loaded it will call the constructor and then it will call the render method to show the output. when u say class loads means creating the new instance of the class.
// componentdidmount is another method which react class based compont gives us and is called after the first render. when the component is loaded first the constructor is called then render is called and once the class based component is mounted in the DOM then this componentdidmount is called.
// lifecycle of react component
// constructor  -> render -> componentDidMount
// why component did mount is given to us?
// it is used to make api calls
//why api call is made inside component did mount? bcz we want to quickly render the component, make an api call then fill the data
// we make api call inside functional component using use effect by passing a callback function. empty dependency array is used inside useEffect to call the api just once.
