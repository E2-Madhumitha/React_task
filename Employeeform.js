import { useState, useEffect } from "react";
import { View } from "./View";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { employeeform } from "./Form/FormAction";
function Employeeform(props) {
    const [inputarr, setinputarr] = useState([]);
    const [details, setdetails] = useState({
        name: "",
        department: "",
        job_title: "",
        contact_number: "",
        years_of_experience: "",
    });
    const navigate = useNavigate();
    const [error, seterror] = useState({});
    const [issubmit, setsubmitted] = useState(false);
    const data = JSON.parse(localStorage.getItem("deptdetails"));
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const re = /^[A-Za-z]*$/;
        const num = /^[0-9\b]+$/;
        const removeEmptySpaces = /\s/g;
        const alpnum = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
        if (name == "name" && !value) {
            seterror({ ...error, name: "Name is required" });
        } else if (name == "name" && removeEmptySpaces.test(value)) {
            seterror({ ...error, name: "No whitespace allowed" });
        } else if (name == "name" && !re.test(value)) {
            seterror({ ...error, name: "Only alphabets allowed" });
        } else if (name == "name" && re.test(value)) {
            seterror({ ...error, name: "" });
        }
        if (name == "department" && !value) {
            seterror({ ...error, department: "Department is required" });
        } else if (name == "department" && removeEmptySpaces.test(value)) {
            seterror({ ...error, department: "No whitespace allowed" });
        } else if (name == "department" && !re.test(value)) {
            seterror({ ...error, department: "Only alphabets allowed" });
        } else if (name == "department" && re.test(value)) {
            seterror({ ...error, department: "" });
        }

        if (name == "job_title" && !value) {
            seterror({ ...error, job_title: "Jobtitle is required" });
        } else if (name == "job_title" && removeEmptySpaces.test(value)) {
            seterror({ ...error, job_title: "No whitespace allowed" });
        } else if (name == "job_title" && !alpnum.test(value)) {
            seterror({ ...error, job_title: "Only alphanumerics allowed" });
        } else if (name == "job_title" && alpnum.test(value)) {
            seterror({ ...error, job_title: "" });
        }
        if (name == "contact_number" && !value) {
            seterror({ ...error, contact_number: "Contactnumber is required" });
        } else if (name == "contact_number" && removeEmptySpaces.test(value)) {
            seterror({ ...error, contact_number: "No whitespace allowed" });
        } else if (name == "contact_number" && !num.test(value)) {
            seterror({ ...error, contact_number: "Only numerics allowed" });
        } else if (
            name == "contact_number" &&
            (value.length < 9 || value.length > 10)
        ) {
            seterror({
                ...error,
                contact_number: "Contactnumber must contain 10 digits",
            });
        } else if (name == "contact_number" && num.test(value)) {
            seterror({ ...error, contact_number: "" });
        }

        if (name == "years_of_experience" && !value) {
            seterror({
                ...error,
                years_of_experience: "Experience is required",
            });
        } else if (
            name == "years_of_experience" &&
            removeEmptySpaces.test(value)
        ) {
            seterror({
                ...error,
                years_of_experience: "No whitespace allowed",
            });
        } else if (name == "years_of_experience" && !num.test(value)) {
            seterror({
                ...error,
                years_of_experience: "Only numerics allowed",
            });
        } else if (
            name == "years_of_experience" &&
            (value.length < 1 || value.length > 2)
        ) {
            seterror({
                ...error,
                years_of_experience: "Not allowed",
            });
        } else if (name == "years_of_experience" && num.test(value)) {
            seterror({ ...error, years_of_experience: "" });
        }

        setdetails({ ...details, [name]: value });
        console.log(details);
    };
    let { name, department, job_title, contact_number, years_of_experience } =
        details;
    const submitchange = (e) => {
        e.preventDefault();
        const val = (details) => {
            let err = {};
            if (!details.name) {
                err.name = "Name is required";
            } else if (error.name) {
                err.name = error.name;
            } else if (!error.name) {
                err.name = "";
            }

            if (!details.department) {
                err.department = "Department is required";
            } else if (error.department) {
                err.department = error.department;
            } else if (!error.department) {
                err.department = "";
            }

            if (!details.job_title) {
                err.job_title = "Jobtitle is required";
            } else if (error.job_title) {
                err.job_title = error.job_title;
            } else if (!error.job_title) {
                err.job_title = "";
            }

            if (!details.contact_number) {
                err.contact_number = "Contactnumber is required";
            } else if (error.contact_number) {
                err.contact_number = error.contact_number;
            } else if (!error.contact_number) {
                err.contact_number = "";
            }

            if (!details.years_of_experience) {
                err.years_of_experience = "Experience is required";
            } else if (error.years_of_experience) {
                err.years_of_experience = error.years_of_experience;
            } else if (!error.years_of_experience) {
                err.years_of_experience = "";
            }
            return err;
        };
        if (
            details.name &&
            details.department &&
            details.job_title &&
            details.contact_number &&
            details.years_of_experience
        ) {
            setsubmitted(true);
        } else if (
            !details.name ||
            !details.department ||
            !details.job_title ||
            !details.contact_number ||
            !details.years_of_experience
        ) {
            seterror(val(details));
        }

        setinputarr([
            ...inputarr,
            {
                name,
                department,
                job_title,
                contact_number,
                years_of_experience,
            },
        ]);
        console.log(inputarr);
        console.log(details);
        setdetails({
            name: "",
            department: "",
            job_title: "",
            contact_number: "",
            years_of_experience: "",
        });
        // localStorage.setItem("details", JSON.stringify(inputarr));
    };

    //  useEffect(() => {
    //     const datas = localStorage.getItem("details");
    //     console.log(data);
    //     if (datas) {
    //         setdetails(JSON.parse(datas));
    //     }
    // }, []);
    console.log("**************", details.department);
    return (
        <>
            <div className="container">
                <form onSubmit={submitchange}>
                    <div className="sample">
                        <div className="header">
                            <p>Employee Registration Form</p>
                        </div>
                        <div className="content">
                            <div className="name">
                                <label>Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={details.name}
                                    onChange={handlechange}
                                    maxLength={15}
                                />
                                <span>{error.name}</span>
                            </div>
                            <div className="department">
                                <label>Department*</label>
                                <select value={details.department} name="department" onChange={handlechange}>
                                    {data.map((option,index)=>(
                                    <option key={index} value={option.department}>{option.department}</option>
                                    ))}
                                </select>

                                {/* <span>{error.department}</span> */}
                            </div>
                            <div className="job_title">
                                <label>Job Title*</label>
                                <input
                                    type="text"
                                    name="job_title"
                                    value={details.job_title}
                                    onChange={handlechange}
                                />
                                <span>{error.job_title}</span>
                            </div>
                            <div className="contact_number">
                                <label>Contact number*</label>
                                <input
                                    type="text"
                                    name="contact_number"
                                    value={details.contact_number}
                                    onChange={handlechange}
                                />
                                <span>{error.contact_number}</span>
                            </div>
                            <div className="years_of_experience">
                                <label>Experience*</label>
                                <input
                                    type="text"
                                    name="years_of_experience"
                                    value={details.years_of_experience}
                                    onChange={handlechange}
                                />
                                <span>{error.years_of_experience}</span>
                            </div>
                            <div className="but">
                                <button type="submit" onClick={props.employeeform}>Submit</button>
                                <button
                                    type="button"
                                    onClick={() => navigate("view")}
                                >
                                    Table
                                </button>

                                {
                                    <p style={{ color: "green" }}>
                                        {issubmit &&
                                        error.name.length == 0 &&
                                        // error.department.length == 0 &&
                                        error.job_title.length == 0 &&
                                        error.contact_number.length == 0 &&
                                        error.years_of_experience.length == 0
                                            ? "SUCCESSFULLY VALIDATED!!!"
                                            // localStorage.setItem(
                                            //       "details",
                                            //       JSON.stringify(inputarr)
                                            //   )
                                            : // "SUCCESSFULLY VALIDATED!!!"
                                              null}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
      
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        inputarr: state.inputarr,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      employeeform  : (details) => dispatch(employeeform(details)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Employeeform);
