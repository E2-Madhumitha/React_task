import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function Cakecontainer(props) {
    return (
        <div>
            <h2>Number of cakes-{props.numberofcakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        numberofcakes: state.numberofcakes,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
