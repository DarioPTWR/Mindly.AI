import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import ShareStory from "./pages/ShareStory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/share",
      element: <ShareStory />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App