import { useState } from "react";
function MyForm() {
  const [name, setName] = useState("");
  const [Department, setdepartment] = useState("");
  const [Jobtitle, setjobtitle] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  const [Experience, setexperience] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("NAME", name);
    localStorage.setItem("DEPT", Department);
    localStorage.setItem("JOBTITLE", Jobtitle);
    localStorage.setItem("CONTACTNUMBER", contactnumber);
    localStorage.setItem("EXPERIENCE", Experience);
    setName("");
    setdepartment("");
    setjobtitle("");
    setcontactnumber("");
    setexperience("");
  };
  function getdata() {
    console.log(localStorage.getItem("NAME"));
    console.log(localStorage.getItem("DEPT"));
    console.log(localStorage.getItem("JOBTITLE"));
    console.log(localStorage.getItem("CONTACTNUMBER"));
    console.log(localStorage.getItem("EXPERIENCE"));
  }
  return (
    <>
      <h1> Employee Registration Form</h1>
      <form onSubmit={onsubmit}>
        <fieldset>
          <label>
            {" "}
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            {" "}
            Department:
            <input
              type="text"
              required
              value={Department}
              onChange={(e) => setdepartment(e.target.value)}
            />
          </label>
          <br />
          <label>
            {" "}
            Jobtitle:
            <input
              type="text"
              required
              value={Jobtitle}
              onChange={(e) => setjobtitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            {" "}
            Contactnumber:
            <input
              type="number"
              required
              value={contactnumber}
              onChange={(e) => setcontactnumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            {" "}
            Year of Experience:
            <input
              type="number"
              required
              value={Experience}
              onChange={(e) => setexperience(e.target.value)}
            />
          </label>
          <br />
        </fieldset>
        <input type="submit" value="submit" onClick={getdata} />
        <h2>Name:{name}</h2>
        <h2>Department:{Department}</h2>
        <h2>Jobtitle:{Jobtitle}</h2>
        <h2>Contactnumber:{contactnumber}</h2>
        <h2>Years of experience:{Experience}</h2>
      </form>
    </>
  );
}
export default MyForm;
