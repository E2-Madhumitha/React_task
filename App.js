import { ExpenseItem, ExpenseItems } from "./ExpenseItem";
import Trial from "./trial";
import FavoriteColor from "./state";
import { Navmenu, Welcome, Garage } from "./class";
import NameLists from "./props";
import Mapping from "./map";
import MyForm from "./task";
import Goal from "./mapping";
import "./App.css";
import Form from "./Form";
import Car from "./car";
import Sampleform from "./Sampleform";
import Display from "./display";
import Control from "./Uncontrolledcomponent";
import Validation from "./Validation";
import Validationcontrol from "./validationcontrol";
import Validationuncontrol from "./validationuncontrol";
import Refs from "./refs";
import Events from "./Events";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Ordersummary } from "./components/order-summary";
import { Nomatch } from "./components/Nomatch";
import { Successfulsubmission } from "./Successfulsubmission";
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
                <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}>
                            {" "}
                        </Route>
                        <Route path="about" element={<About />}>
                            {" "}
                        </Route>
                        <Route path="contact" element={<Contact />}>
                            {" "}
                        </Route>
                        <Route path="order-summary" element={<Ordersummary />}>
                            {" "}
                        </Route>
                        <Route path="users" element={<Users />}>
                            <Route path=":userId" element={<Userdetails />} />
                            <Route path="admin" element={<Admin />} />
                        </Route>
                        <Route path="*" element={<Nomatch />}>
                            {" "}
                        </Route>
                        <Route path="products" element={<Products />}>
                            {" "}
                            <Route index element={<Featuredproducts />} />
                            <Route
                                path="featured"
                                element={<Featuredproducts />}
                            ></Route>
                            <Route path="new" element={<Newproducts />}></Route>
                        </Route>
                        <Route
                            path="profile"
                            element={
                                <RequireAuth>
                                    <Profile />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route path="login" element={<Login />}></Route>
                    </Routes>
                </AuthProvider>
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
