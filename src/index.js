import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import NoteSummarizer from './Pages/NoteSummarizer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NoteSummarizer",
    element: <NoteSummarizer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router}/>
);
