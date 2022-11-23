import Cakecontainer from "./Cakecontainer";
import { Provider } from "react-redux";
import store from "../redux/store";
import IceContainer from "./IceContainer";
import Newcakecontainer from "./Newcakecontainer";
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <IceContainer />
                <Cakecontainer />
                <Newcakecontainer />
            </div>
        </Provider>
    );
}

export default App;
