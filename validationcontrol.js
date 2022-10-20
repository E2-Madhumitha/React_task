import { useState, useEffect } from "react";
function Validationcontrol() {
  const [details, setdetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState({});
  const [issubmit, submitted] = useState(false);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitchange = (e) => {
    e.preventDefault();
    seterror(validate(details));
    submitted(true);
  };
//   useEffect(() => {
//     console.log(error);
//     if (Object.keys(error).length === 0 && issubmit) {
//       console.log(details);
//     }
//   }, [error]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const removeEmptySpaces = /\s/g;
    console.log(values);
    console.log(values.firstname);
    if (!values.firstname) {
      errors.firstname = "firstname is required";
    } else if (removeEmptySpaces.test(values.firstname)) {
      errors.firstname = "whitespace not allowed";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required";
    } else if (removeEmptySpaces.test(values.lastname)) {
      errors.lastname = "whitespace not allowed";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not valid";
    }

    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password must be less than 10 characters";
    }
    return errors;
  };

  return (
    <header className="header">
      <form onSubmit={submitchange}>
        <label>
          enter first name
          <input
            type="text"
            name="firstname"
            value={details.firstname}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.firstname}</p>
        <br />
        <label>
          enter last name
          <input
            type="text"
            name="lastname"
            value={details.lastname}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.lastname}</p>
        <br />
        <label>
          enter email
          <input
            type="text"
            name="email"
            value={details.email}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.email}</p>
        <br />
        <label>
          enter password
          <input
            type="password"
            name="password"
            value={details.password}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.password}</p>
        <br />
        <input type="submit" />
      </form>
      <p>{issubmit ? [details.firstname] : null}</p>
      <p>{issubmit ? [details.lastname] : null}</p>
      <p>{issubmit ? [details.email] : null}</p>
      <p>{issubmit ? [details.password] : null}</p>
    </header>
  );
}

export default Validationcontrol;
