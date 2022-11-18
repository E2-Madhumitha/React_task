import { useHistory } from "react-router-dom";
export const Home=() =>{
    const history = useHistory();
    const handleClick = () => {
        history.push("/ordersummary");
    };
    return (
        <>
            <div>Home page</div>
            <button onClick={handleClick}>Place order</button>
        </>
    );
}

