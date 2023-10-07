import Router from "./routes/Router";
import { Provider } from "react-redux";
import store from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App