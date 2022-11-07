import { useState, useEffect } from "react";
function Validationcontrol() {
    const [details, setdetails] = useState({
        username: "",
        mobilenumber: "",
        email: "",
        password: "",
    });
    const [error, seterror] = useState({});
    const [issubmit, submitted] = useState(false);
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const re = /^[A-Za-z]*$/;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const num = /^[0-9\b]+$/;
        const pwd =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;

        const removeEmptySpaces = /\s/g;
        if (name == "username" && !value) {
            seterror({ ...error, username: "Username is required" });
        } else if (name == "username" && removeEmptySpaces.test(value)) {
            seterror({ ...error, username: "No whitespace allowed" });
        } else if (name == "username" && !re.test(value)) {
            seterror({ ...error, username: "Only alphabets allowed" });
        } else if (name == "username" && re.test(value)) {
            seterror({ ...error, username: "" });
        }

        if (name == "mobilenumber" && !value) {
            seterror({ ...error, mobilenumber: "Mobilenumber is required" });
        } else if (name == "mobilenumber" && removeEmptySpaces.test(value)) {
            seterror({ ...error, mobilenumber: "No whitespace allowed" });
        } else if (name == "mobilenumber" && !num.test(value)) {
            seterror({ ...error, mobilenumber: "Only numerics allowed" });
        } else if (
            name == "mobilenumber" &&
            (value.length < 9 || value.length > 10)
        ) {
            seterror({
                ...error,
                mobilenumber: "Mobilenumber must contain 10 digits",
            });
        } else if (name == "mobilenumber" && num.test(value)) {
            seterror({ ...error, mobilenumber: "" });
        }

        if (name == "email" && !value) {
            seterror({ ...error, email: "Email is required" });
        } else if (name == "email" && !regex.test(value)) {
            seterror({ ...error, email: "This is not valid" });
        } else if (name == "email" && regex.test(value)) {
            seterror({ ...error, email: "" });
        }

        if (name == "password" && !value) {
            seterror({ ...error, password: "Password is required" });
        } else if (name == "password" && value.length > 15) {
            seterror({
                ...error,
                password: "Password must be less than 15 characters",
            });
        } else if (name == "password" && !pwd.test(value)) {
            seterror({ ...error, password: "This is not valid" });
        } else if (name == "password" && pwd.test(value)) {
            seterror({ ...error, password: "" });
        }

        setdetails((prev) => {
            return { ...prev, [name]: value };
        });
        console.log(details);
    };
    //console.log("error", error.username);
    const submitchange = (e) => {
        e.preventDefault();
        const val = (details) => {
            let err = {};
            if (!details.username) {
                err.username = "Username is required";
            } else if (error.username) {
                err.username = error.username;
            } else if (!error.username) {
                err.username = "";
            }

            if (!details.mobilenumber) {
                err.mobilenumber = "Mobilenumber is required";
            } else if (error.mobilenumber) {
                err.mobilenumber = error.mobilenumber;
            } else if (!error.mobilenumber) {
                err.mobilenumber = "";
            }
            if (!details.email) {
                err.email = "Email is required";
            } else if (error.email) {
                err.email = error.email;
            } else if (!error.email) {
                err.email = "";
            }

            if (!details.password) {
                err.password = "Password is required";
            } else if (error.password) {
                err.password = error.password;
            } else if (!error.password) {
                err.password = "";
            }
            return err;
        };
        if (
            details.username &&
            details.mobilenumber &&
            details.email &&
            details.password
        ) {
            submitted(true);
        } else if (
            !details.username ||
            !details.mobilenumber ||
            !details.email ||
            !details.password
        ) {
            seterror(val(details));
        }
        // localStorage.setItem("details", JSON.stringify(details));
    };

    // useEffect(() => {
    //     const data = localStorage.getItem("details");
    //     console.log(data);
    //     if (data) {
    //         setdetails(JSON.parse(data));
    //     }
    // }, []);
    console.log(Object.keys(error).length);
    console.log(error.username);
    console.log(error.mobilenumber);
    console.log(error.email);
    console.log(error.password);
    return (
        <div className="container">
            <form onSubmit={submitchange}>
                <div className="sample">
                    <div className="header">
                        <p>Registration Form</p>
                    </div>
                    <div className="content">
                        <div className="name">
                            <label>Username*</label>
                            <input
                                type="text"
                                name="username"
                                value={details.username}
                                onChange={handlechange}
                                maxLength={15}
                            />
                            <span>{error.username}</span>
                        </div>
                        <div className="mobilenumber">
                            <label>Mobilenumber*</label>
                            <input
                                type="text"
                                name="mobilenumber"
                                value={details.mobilenumber}
                                onChange={handlechange}
                            />
                            <span>{error.mobilenumber}</span>
                        </div>
                        <div className="email">
                            <label>Email*</label>
                            <input
                                type="text"
                                name="email"
                                value={details.email}
                                onChange={handlechange}
                            />
                            <span>{error.email}</span>
                        </div>
                        <div className="password">
                            <label>Password*</label>
                            <input
                                type="text"
                                name="password"
                                value={details.password}
                                onChange={handlechange}
                            />
                            <span>{error.password}</span>
                        </div>
                        <div className="but">
                            <button type="submit">Submit</button>
                            <p style={{ color: "green" }}>
                                {issubmit &&
                                error.username.length == 0 &&
                                error.mobilenumber.length == 0 &&
                                error.email.length == 0 &&
                                error.password.length == 0
                                    ? "SUCCESSFULLY VALIDATED!!!"
                                    : null}
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Validationcontrol;


