import { Employeeform } from "./FormTypes";

export const employeeform = (details) => {
    
    return {
        type: Employeeform ,
        payload:details,
    };
};