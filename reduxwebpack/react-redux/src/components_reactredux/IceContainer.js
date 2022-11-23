import React from "react";
import { buyIce } from "../redux";
import { connect } from "react-redux";

function Icecontainer(props) {
    return (
        <div>
            <h2>Number of ice-{props.numberofice}</h2>
            <button onClick={props.buyIce}>buy Ice</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        numberofice: state.ice.numberofice,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        buyIce: () => dispatch(buyIce()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Icecontainer);