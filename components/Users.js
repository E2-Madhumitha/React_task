// import {  useSearchParams } from "react-router-dom";
// export const Users = () => {
//    const [searchparams,setsearchparams]= useSearchParams();
//    const showactiveusers= searchparams.get('filter')==="active";
//     return (
//
//                 <button onClick={()=>setsearchparams({filter:"active"})}>Active users</button>
//                 <button onClick={()=>setsearchparams({})}>Reset filters</button>
//             </div>
//             {
//                 showactiveusers?(<h2>showing active users</h2>):(<h2>showing all users</h2>)
//             }
//         </div>
//     );
// };
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Admin } from "./Admin";
import useQuery from "./hooks";
import { Userdetails } from "./Userdetails";
export const Users = () => {
    const { path, url } = useRouteMatch();
    const query = useQuery();
    const categoryName = query.get("category") || "";
    return (
        <>
            <h1>{categoryName}</h1>
            <ul>
                <li>
                    {" "}
                    <Link to={`${url}/Id`}>Id</Link>
                </li>
                <li>
                    {" "}
                    <Link to={`${url}/admin`}>Admin</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>USER 1</h3>
                    <h3>USER 2</h3>
                    <h3>USER 3</h3>
                </Route>
                <Route path={`${path}/:userId`}>
                    <Userdetails />
                </Route>
                <Route path={`${path}/admin`}>
                    <Admin />
                </Route>
            </Switch>
        </>
    );
};
