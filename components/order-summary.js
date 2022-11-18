import { useHistory } from "react-router-dom";
export const Ordersummary = () => {
    const history = useHistory();
    const handleClick=()=>{
        history.push("/");
    }
    return (
        <>
            <div>Order placed</div>
            <button onClick={handleClick}>Back</button>
        </>
    );
};
