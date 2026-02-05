import NavBar from "./components/NavBar";
import Page from "./pages/Page";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Page />
    </Provider>
  );
}

export default App;
