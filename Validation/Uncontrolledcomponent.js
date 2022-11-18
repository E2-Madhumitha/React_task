import { useEffect, useState } from "react";
function Control() {
  const [details, setdetails] = useState({
    firstname: "",
    lastname: "",
    description: "",
    country: "",
    agree: false,
    gender: "others",
  });
  useEffect(() => {
    console.log("rerender");
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked; //checked prop instead of value prop
    console.log(checked);
    setdetails((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };
  const showdata = () => {
    console.log("detail:", details);
  };
  const submitchange = (e) => {
    e.preventDefault();
    showdata();
  };

  return (
    <header className="header">
      <form onSubmit={submitchange}>
        <label>
          enter first name{" "}
          <input type="text" name="firstname" onChange={handlechange} />
        </label>
        <br />
        <label>
          enter last name{" "}
          <input type="text" name="lastname" onChange={handlechange} />
        </label>{" "}
        <br />
        <label>
          enter description{" "}
          <textarea name="description" onChange={handlechange} />
        </label>
        <br />
        <label>
          country
          <select name="country" onChange={handlechange}>
            <option value="ford">ford</option>
            <option value="volvo">volvo</option>
            <option value="fait">fait</option>
          </select>
        </label>
        <br />
        <label>
          Gender
          <div>
            <input
              type="radio"
              onChange={handlechange}
              name="gender"
              value="male"
              checked={details.gender === "male"}
            />
            male
            <input
              type="radio"
              onChange={handlechange}
              name="gender"
              value="female"
              checked={details.gender === "female"}
            />
            female
            <input
              type="radio"
              onChange={handlechange}
              name="gender"
              value="others"
              checked={details.gender === "others" ? true : false}
            />
            others
          </div>
        </label>
        <label>
          agree
          <input
            type="checkbox"
            onChange={handlechange}
            name="agree"
            checked={details.agree}
          />
        </label>
        <p>is agree:{details.agree ? "yes" : "no"}</p>
        <input type="submit" />
        <br />
      </form>
    </header>
  );
}

export default Control;
