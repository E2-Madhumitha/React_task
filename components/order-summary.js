import { useNavigate } from "react-router-dom";
export const Ordersummary = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Order placed</div>
            <button onClick={() => navigate("/")}>Back</button>
        </>
    );
};
