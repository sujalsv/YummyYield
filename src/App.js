import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { createContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

// import Grocery from "./components/Grocery";

// lazy loading/on demand loading : initially the code wont be there in our code it will only pop up when there  is a request for that component. it will be done by using named export lazy.

const Grocery = lazy(() => import("./components/Grocery"));
// the import we use in above line is not the usaual import that we use, instead it is the function and will take the path of the component.parcel willl bundel all the js files into one file.But wont include grocery in it if we import like this and grocery will be there only when we click on grocery from navbar. It converted into 2 js bundles main bundle and grocery.js . You can see al thsi from the network tab by refreshing it.

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "sujal virani",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      //react is very fast and as grocery code is not there inside our code initially so it will throw an error as the rendering time completes bedore the grocery code comes. Hence react provides suspence to wrap inside.
      //why do we need lazy laoding?
      //other names: chunking, code splitting, dynamic bundling,lazy loading, on demand  loading., dynamic imports..
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

//VARIOUS WAYS OF CSS: NORMAL CSS, SCSS, SASS, STYLED COMPONENET, MATERIAL UI, BOOTSTRAP, CHAKRA UI, ANT DESIGN, TAILWIND CSS
// npx tailwind css: npx mean we are executing the tailwind css/ initializing tailwind css in our repository.

//higher order function is a normal java script function that takes a component and returns a component
