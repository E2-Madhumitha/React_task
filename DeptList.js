import { useState, useEffect } from "react";
import { View } from "./View";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deptList } from "./Form/FormAction";
function DeptList() {
   // const [inputarr, setinputarr] = useState([]);
    const [details, setdetails] = useState({
        department: "",
    });
    const navigate = useNavigate();
    const [error, seterror] = useState({});
    const [issubmit, setsubmitted] = useState(false);
    const iparr = useSelector ((state) => state.iparr);
    const dispatch = useDispatch ();
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const re = /^[A-Za-z]*$/;
        const removeEmptySpaces = /\s/g;
        if (name == "department" && !value) {
            seterror({ ...error, department: "Department is required" });
        } else if (name == "department" && removeEmptySpaces.test(value)) {
            seterror({ ...error, department: "No whitespace allowed" });
        } else if (name == "department" && !re.test(value)) {
            seterror({ ...error, department: "Only alphabets allowed" });
        } else if (name == "department" && re.test(value)) {
            seterror({ ...error, department: "" });
        }

        setdetails({ ...details, [name]: value });
        console.log(details);
    };
   // let { department } = details;
    const submitchange = (e) => {
        e.preventDefault();
        const val = (details) => {
            let err = {};

            if (!details.department) {
                err.department = "Department is required";
            } else if (error.department) {
                err.department = error.department;
            } else if (!error.department) {
                err.department = "";
            }

            return err;
        };
        if (details.department) {
            setsubmitted(true);
        } else if (!details.department) {
            seterror(val(details));
        }
        setdetails({
            department: "",
        });
    };
    //     setinputarr([
    //         ...inputarr,
    //         {
    //             department,
    //         },
    //     ]);
    //     console.log(inputarr);
    //     console.log(details);
    //     setdetails({
    //         department: "",
    //     });
    //     // localStorage.setItem("details", JSON.stringify(inputarr));
    

    // useEffect(() => {
    //     const data = localStorage.getItem("deptdetails");
    //     console.log(data);
    //     if (data) {
    //         setdetails(JSON.parse(data));
    //     }
    // }, []);
    // console.log("**************", details.name);
    return (
        <>
            <div className="container">
                <form className="form" onSubmit={submitchange}>
                    <div className="sample">
                        <div className="header">
                            <p>Department Form</p>
                        </div>
                        <div className="content">
                            <div className="departmentd">
                                <label>Department*</label>
                                <input
                                    type="text"
                                    name="department"
                                    value={details.department}
                                    onChange={handlechange}
                                />
                                <span>{error.department}</span>
                            </div>

                            <div className="but">
                                <button type="submit"  onClick={() =>
                                        dispatch(deptList(details))
                                    }>Submit</button>
                                <button
                                    type="button"
                                    onClick={() => navigate("/deptview")}
                                >
                                    Table
                                </button>

                                
                                        {issubmit &&
                                        error.department.length == 0
                                            ? localStorage.setItem(
                                                  "deptdetails",
                                                  JSON.stringify(iparr)
                                              )
                                            : // "SUCCESSFULLY VALIDATED!!!"
                                              null}
                              
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </>
    );
}

export default DeptList;
