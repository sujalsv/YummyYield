// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

// console.log(heading);   gives react object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 
// responsible for taking h1 tag and putting it over heading and put whole inside root



/*
 * <div id="parent">
 *     <div id="child">
 *      <h1>i m h1</h1>
 *     </div>
 * <div>
 */

// nested elements using html 


// const parent= React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"i m h1")));

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); 

// nested elements using react 

//  React.createElement() does not create an elemnt instead forms an object that html (browser understands)
// render converts into react component and puts it into DOM
// to pass the sibling instead of children one need to wrap childrens in an array of parent

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i m h1"),
    React.createElement("h2", {}, "i m h2"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 

// ignore errors in console will solve later on
// the above code keeps on getting messy if we includes more and more children , thats where JSX enters to make more TAGS in simple manner
// if div tag is already there in render before root.render then root.render will replace things because browser reads html first then goes to script line and reads react and root.render in app.js replaces
// everything will be rendered inside root, while things which are below and after the root in html file will remain the same
// react id a library bcz it works only on one small elemnt or tag like render and it does not comes with full advantages like full functional framework