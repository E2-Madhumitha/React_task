import { useParams } from "react-router-dom";

export default function User() {
    const { firstname, lastname } = useParams();

    return (
        <div>
            <p>USER PAGE</p>
            <div>
                username {firstname} {lastname}
            </div>
        </div>
    );
}
