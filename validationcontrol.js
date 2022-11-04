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
        seterror(validate(details));
        setdetails((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const submitchange = (e) => {
        e.preventDefault();
        const val = (details) => {
            let err = {};
            if (!details.username) {
                err.username = "Username is required";
            }
            if (!details.mobilenumber) {
                err.mobilenumber = "Mobilenumber is required";
            }
            if (!details.email) {
                err.email = "Email is required";
            }
            if (!details.password) {
                err.password = "Password is required";
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
            !details.username &&
            !details.mobilenumber &&
            !details.email &&
            !details.password
        ) {
            seterror(val(details));
        }
        localStorage.setItem("details", JSON.stringify(details));
    };

    useEffect(() => {
        const data = localStorage.getItem("details");
        console.log(data);
        if (data) {
            setdetails(JSON.parse(data));
        }
    }, []);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const removeEmptySpaces = /^\s/g;
        const re = /^[A-Za-z]*$/;
        const num = /^[0-9\b]+$/;
        const pwd =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!values.username) {
            errors.username = "Username is required";
        } else if (
            removeEmptySpaces.test(values.username) ||
            !re.test(values.username)
        ) {
            errors.username = "Only alphabets allowed";
        }
        if (!values.mobilenumber) {
            errors.mobilenumber = "Mobilenumber is required";
        } else if (
            removeEmptySpaces.test(values.mobilenumber) ||
            !num.test(values.mobilenumber)
        ) {
            errors.mobilenumber = "Only numerics are allowed";
        } else if (
            values.mobilenumber.length < 9 ||
            values.mobilenumber.length > 10
        ) {
            errors.mobilenumber = "Mobilenumber must contain 10 digits";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not valid";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length > 15) {
            errors.password = "Password must be less than 15 characters";
        } else if (!pwd.test(values.password)) {
            errors.password = "This is not valid";
        }
        return errors;
    };

    return (
        <div className="container">
            <form onSubmit={submitchange}>
                <div className="sample">
                    <div className="header">
                        <p>Registration Form</p>
                    </div>
                    <div className="content">
                        <div className="name">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={details.username}
                                onChange={handlechange}
                            />
                            <span>{error.username}</span>
                        </div>
                        <div className="mobilenumber">
                            <label>Mobilenumber</label>
                            <input
                                type="text"
                                name="mobilenumber"
                                value={details.mobilenumber}
                                onChange={handlechange}
                            />
                            <span>{error.mobilenumber}</span>
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={details.email}
                                onChange={handlechange}
                            />
                            <span>{error.email}</span>
                        </div>
                        <div className="password">
                            <label>Password</label>
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
                                {issubmit && Object.keys(error).length === 0
                                    ? "successfully validated!!!"
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

