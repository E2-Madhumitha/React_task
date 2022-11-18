import { useRef, useEffect, useState } from "react";
function Refs() {
  // const inputref=useRef(null)
  // useEffect(()=>{
  //    console.log(inputref)
  //   inputref.current.focus()
  // },[])
  // const onclick=()=>{
  // console.log(inputref.current.value)
  // }
  // const onFocusclick=()=>{
  //     inputref.current.focus()
  // }
  // return(
  //     <>
  //     <input type='text' ref={inputref}/>
  //     <button onClick={onclick} >log value </button>
  //     <button onClick={onFocusclick} >focus value</button>
  //     </>
  // )

  // const [name,setname]=useState('')
  // const refs=useRef(0)
  // useEffect(()=>{
  //   console.log(refs.current)
  //    refs.current=refs.current+1;
  //     })
  // return(
  //     <>
  //     <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
  //     <div> I rendered {refs.current} </div>
  //     </>
  // )

  const [name, setname] = useState("");
  const refs = useRef(null);
  useEffect(() => {
    console.log(refs.current)
    refs.current = name;
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <div>
        {" "}
        I rendered {name} and prev is {refs.current}{" "}
      </div>
    </>
  );
}
 export default Refs
