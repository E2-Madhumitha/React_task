import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function Newcakecontainer(props) {
    const [number, setnumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes-{props.numberofcakes}</h2>
            <input
                type="text"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
            />
            <button onClick={() => props.buyCake(number)}>
                buy {number} cake
            </button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        numberofcakes: state.cake.numberofcakes,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Newcakecontainer);
