import { Employeeform } from "./FormTypes";
const initialState = {
   inputarr:[]
};

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case Employeeform:
            return {
                ...state,
                inputarr: [state.inputarr,action.payload]
            };
        default:
            return state;
    }
};
export default FormReducer;