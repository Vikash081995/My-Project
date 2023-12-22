import React from "react";
import "./App.css";
import NavDrawer from "./components/NavDrawer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookmarksPanel from "./components/BookmarksPanel";
import YoutubePanel from "./components/YoutubePanel";

const router = createBrowserRouter([
  {
    path: "/bookmarks-tab ",
    element: <BookmarksPanel />
  },
  {
    path: "/youtube-tab",
    element: <YoutubePanel />
  }
]);

function App() {
  return (
    <>
      <NavDrawer>
        <RouterProvider router={router} />
      </NavDrawer>
    </>
  );
}

export default App;
