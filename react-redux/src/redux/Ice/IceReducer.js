import { BUY_ICE} from "./IceTypes";
const initialState = {
    numberofice: 20,
};
const IceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                numberofice: state.numberofice + 1,
            };
        default:
            return state;
    }
};
export default IceReducer;