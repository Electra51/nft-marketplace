import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
      <ScrollToTop smooth color="#6f00ff" />
    </div>
  );
}

export default App;
