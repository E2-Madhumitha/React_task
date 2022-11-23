import { BUY_CAKE } from "./cakeTypes";
const initialState = {
    numberofcakes: 10,
};
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberofcakes: state.numberofcakes - action.payload,
            };
        default:
            return state;
    }
};
export default cakeReducer;
