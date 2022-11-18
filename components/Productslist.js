import { useParams } from "react-router-dom";
function Productslist() {
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}
export default Productslist;
