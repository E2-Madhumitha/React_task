import { Employeeform ,DeptList} from "./FormTypes";

export const employeeform = (details) => {
    console.log("action")
    return {
        type: Employeeform,
        payload:details,
    };
};
export const deptList = (details) => {
    console.log(details)
    console.log("action")
    return {
        type: DeptList,
        payload:details,
    };
};