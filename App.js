import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");
console.log(heading);

const jsxHeading = <h1 id="heading">Namaste React using jsx(element)</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
//rendering element in rreact


// const HeadingComponent=()=>{
//     return <h1 className="heading">namaste react functional component</h1>
// }
const HeadingComponent = () => (
  <div>
    {jsxHeading}
    <h1 className="heading">namaste react (functional component)</h1>
  </div>
);

root.render(<HeadingComponent/>);
//rendering element in jsx


// {Title()}
// <Title/>
// <Title></Title>
// all 3 same things
