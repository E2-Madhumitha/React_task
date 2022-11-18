import { ExpenseItem, ExpenseItems } from "./Sample/ExpenseItem";
import Trial from "./Sample/trial";
import FavoriteColor from "./Sample/state";
import { Navmenu, Welcome, Garage } from "./Sample/class";
import NameLists from "./Sample/props";
import Mapping from "./Sample/map";
import MyForm from "./Validation/task";
import Goal from "./Sample/mapping";
import "./App.css";
import Form from "./Validation/Form";
import Car from "./Sample/car";
import Sampleform from "./Validation/Sampleform";
import Display from "./Sample/display";
import Control from "./Validation/Uncontrolledcomponent";
import Validation from "./Validation/Validation";
import Validationcontrol from "./Validation/validationcontrol";
import Validationuncontrol from "./Validation/validationuncontrol";
import Refs from "./Sample/refs";
import Events from "./Sample/Events";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Ordersummary } from "./components/order-summary";
import { Nomatch } from "./components/Nomatch";
import { Successfulsubmission } from "./Validation/Successfulsubmission";
import { Products } from "./components/products";
import { Featuredproducts } from "./components/Featuredproducts";
import { Newproducts } from "./components/Newproducts";
import { Users } from "./components/Users";
import { Userdetails } from "./components/Userdetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
function App() {
    const myLists = ["bruce", "david", "margret", "bruce"];
    const menuItems = [1, 2, 3, 4, 5];
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif",
    };

    return (
        <div className="App">
            {/* <h2 style={{color:"red", backgroundColor:"blue"}} > hello world</h2>
      <h1 style={mystyle}>Madhu</h1>
      <h1 className='madhu'>mitha</h1> */}
            {/* <Trial/>
      <ExpenseItem/> 
      <ExpenseItems/>
      <FavoriteColor/>
      <Form />
      <Control />
      <Display />
      <Validation />
      <Sampleform />
      <Events />
      <Welcome />
      <Refs />
      <Validationuncontrol />
      <Navmenu/> 
      <Garage/>
      <Mapping/>
      <NameLists/>
      <MyForm/>
      <Goal/>
      <Car/> 
       <Validationcontrol />*/}
            <BrowserRouter>
                {/* <AuthProvider> */}
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/ordersummary">
                        <Ordersummary />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route exact path="*">
                        <Nomatch />
                    </Route>

                    {/* <Route
                            path="profile"
                            element={
                                <RequireAuth>
                                    <Profile />
                                </RequireAuth>
                            }
                        ></Route> */}
                    {/* <Route path="login" element={<Login />}></Route> */}
                </Switch>
                {/* </AuthProvider> */}
            </BrowserRouter>
            {/* <Routes>
                    <Route path="/" element={<Validationcontrol />}>
                        {" "}
                    </Route>
                    <Route path="successfulvalidation" element={<Successfulsubmission />}>
                        {" "}
                    </Route>
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default App;
