# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# flowchart

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types of routing

client side routing- has everything as component in it so it does not reload whole page (single page routing)

server side routing- has different pages like index.html, about-us.html, contactus.html and reloads whole page when gets the specific page (network call)

# redux toolkit

redux is not mandatory
redux makes it easier to debug
redux team offers 2 libraries

1. react redux
2. redux toolkit

we have slices(small portion of a redux store) in our redux store(nothing but a big whole javascript object) to not look our data clumsy. here we will create a cart slice that will contain all the data of our cart. when you click on the add button of the item, it dispatches and action then it calls a function which then modifies the cart slice of js object. The function in this is called a reducer.

we will use a selector to read the data from our store(cart slice in jv object(store)) to modify our react component(cart from header). this whole phenomena is called subscribing to the store. when we say "subscribe to our store" we basically mean "sync with the store" which means when the data inside the slice will change, react will automatically change the data inside the cart component.

# Flow will be

1. install redux toolkitnad react redux
2. build our store
3. connect our store to our app
4. slice (cart-slice)
5. selector

some of the actions in the cart are adding a item, removing a item (small apis to communicate with the redux store)
