import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import NoteSummarizer from './Pages/NoteSummarizer';
import QuizGenerator from './Pages/QuizGenerator';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NoteSummarizer",
    element: <NoteSummarizer />,
  },
  {
    path: "/QuizGenerator",
    element: <QuizGenerator />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router}/>
);
