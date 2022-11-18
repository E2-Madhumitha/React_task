import { useState, useEffect } from "react";
function FavoriteColor() {
  //const [count, setCount] = useState(0);

  //return (
  // <div>
  //  <p>You clicked {count} times</p>
  //  <p>the number {count%2===0?'even':'odd'}</p>
  ///  <button onClick={() => setCount(count + 1)}>
  //    Click me
  //  </button>
  //  </div>
  //);

  //const [count,setcount]=useState(1);
  //return(
  //  <div>
  //     <p>{count}</p>
  //     <button onClick={()=>setcount(count+1)}>more</button>
  //    <button onClick={()=>setcount(count-1)}>less</button>
  //  </div>
  //)
  //const [color, setColor] = useState("red");

  // return (
  // <>
  //  <h1>My favorite color is {color}!</h1>
  // <button
  //   type="button"
  //  onClick={() => setColor("blue")}
  // >Blue</button>
  // </>
  // )
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [submit, submitted] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password,
    });
    submitted(true);
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input value={data.username} name="username" onChange={updateField} />
        </label>
        <br />
        <label>
          Password:
          <input
            value={data.password}
            name="password"
            // type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <p>{submit ? form.username : null}</p>
      <p>{submit ? form.password : null}</p>
    </div>
  );
  /*const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(10);
  console.log('re-render')
  useEffect(()=>{
    console.log('useeffect');
    setCount2(count1*2);
  },[count1])

return(
    <>
    <p>{count1}</p>
    <p>{count2}</p>
    <button onClick= {()=>setCount1(count1+1)}>toggle1</button>
  
    </>
)*/
}
export default FavoriteColor;
