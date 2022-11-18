import { useParams } from "react-router-dom";
export const Userdetails = () => {
    const {userId} = useParams();
    return <div>Details about user{userId}</div>;
};


