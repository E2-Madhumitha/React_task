import { useState } from "react";
function Sampleform() {
  const [details, setdetails] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [myCar, setMyCar] = useState("volvo");
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitchange = (e) => {
    e.preventDefault();
    alert(
      `firstname:${details.firstname} lastname:${details.lastname} age:${details.age}`
    );
    console.log(details);
  };
  const change = (event) => {
    setTextarea(event.target.value);
  };
  const handlechanges = (event) => {
    setMyCar(event.target.value);
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
          enter age <input type="number" name="age" onChange={handlechange} />
        </label>
        <br />
        <input type="submit" />
        <br />
        {details.firstname}
        <br />
        {details.lastname}
        <br />
        {details.age}
        <br />
        <textarea value={textarea} onChange={change} />
        <br />
        <select value={myCar} onChange={handlechanges}>
          <option value="ford">ford</option>
          <option value="volvo">volvo</option>
          <option value="fait">fait</option>
        </select>
      </form>
    </header>
  );
}
export default Sampleform;
