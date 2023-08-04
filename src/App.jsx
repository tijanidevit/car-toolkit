import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Cart, Dashboard } from "./pages";
import Layout from "./components/Layout";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
