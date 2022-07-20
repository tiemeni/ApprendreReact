import { Provider } from "react-redux";
import Parent from "./components/Parents";
import store from "./redux/setup/store";


function App() {

  return (
    <Provider store={store}>
      <div>
        <Parent />
      </div>
    </Provider>
  );
}

export default App;
