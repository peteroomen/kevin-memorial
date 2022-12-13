import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/home';
import Memories from './pages/memories';
import Music from './pages/music';
import Media from './pages/media';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/media",
    element: <Media />
  },
  {
    path: "/music",
    element: <Music />
  },
  {
    path: "/memories",
    element: <Memories />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);