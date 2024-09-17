import "../index.css";
import { AddTodo, DisplayTask } from "./index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <AddTodo />,
    },
    {
      path: "/mytodo",
      element: <DisplayTask />,
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
