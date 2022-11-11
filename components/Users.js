import { Outlet, useSearchParams } from "react-router-dom";
export const Users = () => {
   const [searchparams,setsearchparams]= useSearchParams();
   const showactiveusers= searchparams.get('filter')==="active";
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet />
            <div>
                <button onClick={()=>setsearchparams({filter:"active"})}>Active users</button>
                <button onClick={()=>setsearchparams({})}>Reset filters</button>
            </div>
            {
                showactiveusers?(<h2>showing active users</h2>):(<h2>showing all users</h2>)
            }
        </div>
    );
};
