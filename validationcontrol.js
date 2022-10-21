import { useState, useEffect } from "react";
function Validationcontrol() {
  const [details, setdetails] = useState({
    name: "",
    mobilenumber: "",
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
  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && issubmit) {
      console.log(details);
    }
  }, [error]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const removeEmptySpaces = /\s/g;
    const re = /^[A-Za-z]+$/;
    const num = /^[0-9\b]+$/;
    console.log(values);
    console.log(values.name);
    if (!values.name) {
      errors.name = "firstname is required";
    } else if (removeEmptySpaces.test(values.name)) {
      errors.name = "whitespace not allowed";
    } else if (!re.test(values.name)) {
      errors.name = "only alphabets allowed";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "mobilenumber is required";
    } else if (removeEmptySpaces.test(values.mobilenumber)) {
      errors.mobilenumber = "whitespace not allowed";
    } else if (values.mobilenumber.length > 10) {
      errors.mobilenumber = "mobilenumber must be less than 10 numbers";
    } else if (values.mobilenumber.length < 10) {
      errors.mobilenumber = "mobilenumber must be greater than 10 numbers";
    } else if (!num.test(values.mobilenumber)) {
      errors.mobilenumber = "only numerics are allowed";
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
          enter name
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.name}</p>
        <br />
        <label>
          enter mobilenumber
          <input
            type="text"
            name="mobilenumber"
            value={details.mobilenumber}
            onChange={handlechange}
          />
        </label>
        <p style={{ color: "red" }}>{error.mobilenumber}</p>
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
      <p>
        {issubmit && Object.keys(error).length === 0 ? [details.name] : null}
      </p>
      <p>
        {issubmit && Object.keys(error).length === 0
          ? [details.mobilenumber]
          : null}
      </p>
      <p>
        {issubmit && Object.keys(error).length === 0 ? [details.email] : null}
      </p>
      <p>
        {issubmit && Object.keys(error).length === 0
          ? [details.password]
          : null}
      </p>
    </header>
  );
}

export default Validationcontrol;

