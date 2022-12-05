import { DeptList, Employeeform } from "./FormTypes";
const initialState = {
   inputarr:[],
   iparr:[]
};

const FormReducer = (state = initialState, action) => {

    console.log("reducer")
    switch (action.type) {
        case Employeeform:
            return {
                ...state,
                inputarr: [...state.inputarr,action.payload]
            };
      
        case DeptList:
            return {
                ...state,
                iparr: [...state.iparr,action.payload]
            };
        default:
            return state;
    }
};
export default FormReducer;