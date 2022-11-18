import { useHistory, useLocation } from "react-router-dom";
function Contact() {
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(history);
    const gobackHandle = () => {
        history.goBack();
        // history.push("/");
    };
    const goforwardHandle = () => {
        history.goForward();
        // history.push("/");
    };
    return (
        <>
            <p>CONTACT PAGE</p>
            <p>Location:{location.pathname}</p>
            <p>From:{location.state.from}</p>
            <button onClick={gobackHandle}>BACK</button>
            <button onClick={goforwardHandle}>FORWARD</button>
        </>
    );
}
export default Contact;
