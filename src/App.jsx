import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="overflow-x-hidden box-border w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
