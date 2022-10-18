import {useState} from 'react'
function Form(){
    const[name,setname]=useState("");
    const handlesubmit=(event)=>{
    event.preventDefault();
    console.log(`${name}`                                                                                                                                           )
   }
return(
<form onSubmit={handlesubmit}>
    <div>
    <label>enter your name :
    <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
    </label>
    <input type='submit'/>
    </div>
</form>
)

}

export default Form