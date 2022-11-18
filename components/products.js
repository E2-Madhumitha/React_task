import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Productslist from "./Productslist";
export const Products = () => {
    const { path, url } = useRouteMatch();
    return (
        <>
            <div>
                <input type="search" placeholder="search products" />
            </div>
            <ul>
                <li>
                    {" "}
                    <Link to={`${url}/featured`}>Featured</Link>
                </li>
                <li>
                    {" "}
                    <Link to={`${url}/new`}>New</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Productslist />
                </Route>
            </Switch>
        </>
    );
};
