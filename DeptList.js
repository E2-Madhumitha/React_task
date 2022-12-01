import { useState, useEffect } from "react";
import { View } from "./View";
import { useNavigate } from "react-router-dom";
function DeptList() {
    const [inputarr, setinputarr] = useState([]);
    const [details, setdetails] = useState({
        department: "",
    });
    const navigate = useNavigate();
    const [error, seterror] = useState({});
    const [issubmit, setsubmitted] = useState(false);
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
    let { department } = details;
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

        setinputarr([
            ...inputarr,
            {
                department,
            },
        ]);
        console.log(inputarr);
        console.log(details);
        setdetails({
            department: "",
        });
        // localStorage.setItem("details", JSON.stringify(inputarr));
    };

    useEffect(() => {
        const data = localStorage.getItem("deptdetails");
        console.log(data);
        if (data) {
            setdetails(JSON.parse(data));
        }
    }, []);
    console.log("**************", details.name);
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
                                <button type="submit">Submit</button>
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
                                                  JSON.stringify(inputarr)
                                              )
                                            : // "SUCCESSFULLY VALIDATED!!!"
                                              null}
                              
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="view-container">
                {issubmit &&
                    error.name.length == 0 &&
                    error.department.length == 0 &&
                    error.job_title.length == 0 &&
                    error.contact_number.length == 0 &&
                    error.years_of_experience.length == 0 && (
                        <>
                            <div className="tablecontainer">
                                <table border={1}className="table">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>department</th>
                                            <th>jobtitle</th>
                                            <th>contact number</th>
                                            <th>experience</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {inputarr.length < 1 ? (
                                            <tr>
                                                <td colSpan={4}>
                                                    NO data Enter yet !
                                                </td>
                                            </tr>
                                        ) : (
                                            inputarr.map((info, ind) => {
                                                return (
                                                    <tr key={ind}>
                                                        <td>{info.name}</td>
                                                        <td>
                                                            {info.department}
                                                        </td>
                                                        <td>
                                                            {info.job_title}
                                                        </td>
                                                        <td>
                                                            {
                                                                info.contact_number
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                info.years_of_experience
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div> 
                        </>
                    )}
            </div> */}
        </>
    );
}

export default DeptList;
