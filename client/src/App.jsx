import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import ShareStory from "./pages/ShareStory";
import Admin from "./pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/share",
      element: <ShareStory />
    },
    {
      path: "/admin",
      element: <Admin/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App