import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import ShareStory from "./pages/ShareStory";
import Admin from "./pages/Admin";
import Images from "./pages/Images";

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
    },
    {
      path:"/images",
      element: <Images/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App