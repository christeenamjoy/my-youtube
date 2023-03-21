import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { store } from "./Components/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./Components/Container";
import WatchContainer from "./Components/WatchContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "watch",
        element: <WatchContainer />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer /> 
    </Provider>
  );
}

export default App;
