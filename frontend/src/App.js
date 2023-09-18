import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import'./assets/css/App.scss';
import { Provider } from "react-redux";
import store from "./store/configureStore";

const reduxStore = store();

const App = () => {
  return (
   
    <Provider store={reduxStore}>
      <RouterProvider router={routes} />
    </Provider>

  );
};

export default App;
