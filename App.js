import "./App.css";
import Employeeform from "./Employeeform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { View } from "./View";
import DeptList from "./DeptList";
import { Deptview } from "./Deptview";
import { Navbar } from "./Navbar";
import { Department } from "./Department";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Employeeform />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/deptdetails" element={<DeptList />} />
                    <Route path="/deptview" element={<Deptview />} />
                    <Route path="/department" element={<Department />} />
                </Routes>
            </Router>
        </div>
        </Provider>
    );
}

export default App;
