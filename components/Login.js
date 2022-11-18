// import { useState } from "react";
// import { useAuth } from "./auth";
// import { useNavigate, useLocation } from "react-router-dom";
// export const Login = () => {
//     const [user, setUser] = useState("");
//     const auth = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const redirectpath = location.state?.path || "/";
//     const handlelogin = () => {
//         auth.login(user);
//         navigate(redirectpath, { replace: true });
//     };
//     return (
//         <div>
//             <label>
//                 Username:
//                 <input type="text" onChange={(e) => setUser(e.target.value)} />
//             </label>
//             <button onClick={handlelogin}>Login</button>
//         </div>
//     );
// };
