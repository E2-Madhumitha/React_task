//import "/App.css"
import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import User from "./User";
import React from "react";
function App() {
    // const history = useHistory();
    // console.log(history);
    //  const handleClick = () => {
    //     history.push("/contact");
    // };

    return (
        <div className="App">
            <header className="App-header">
                <NavLink
                    to="/"
                    style={{ color: "black" }}
                    activeStyle={{ color: "green" }}
                >
                    HOME
                </NavLink>
                <Link to={{ pathname: "/contact", state: { from: "root" } }}>
                    CONTACT
                </Link>
                <NavLink
                    to="/user/madhu/mitha"
                    style={{ color: "black" }}
                    activeStyle={{ color: "red" }}
                >
                    USER
                </NavLink>
                <h1>HELLO</h1>
                {/* <h2>{history.location.pathname}</h2> */}
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/user/:firstname/:lastname">
                    <User />
                </Route>
            </Switch>
            {/* <button onClick={handleClick}>GO BACK</button>  */}
        </div>
    );
}

export default App;
