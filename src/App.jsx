import { Provider } from "react-redux";
import store from "../src/store/store";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
/* import "./App.css";

function App() {
    return <div>메인페이지</div>;
}

export default App;
 */
