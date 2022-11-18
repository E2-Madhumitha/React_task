import { useState } from "react";
function Validation() {
  const [details, setdetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState({});

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

    console.log(details);
  };

  const validate = (details) => {
    const errors = {};
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!details.firstname) {
      errors.firstname = "firstname is required";
    }
    if (!details.lastname) {
      errors.lastname = "lastname is required";
    }

    if (!details.email) {
      errors.email = "email is required";
    } else if (!validEmail.test(details.email)) {
      errors.email = "not valid";
    }
    if (!details.password) {
      errors.password = "password is required";
    } else if (details.password.length < 4) {
      errors.password = "password must be more than 4 characters";
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
        {details.firstname}
        <br />
        {details.lastname}
        <br />
        {details.email}
        <br />
        {details.password}
        <br />
      </form>
    </header>
  );
}

export default Validation;
