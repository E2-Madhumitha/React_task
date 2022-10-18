import { useState } from "react";
function Sampleform(){
const[details,setdetails]=useState({
   firstname:"",
   lastname:"",
   age:"",  
})
const handlechange=(e)=>
{
    const name=e.target.name;
    const value=e.target.value;
    setdetails((prev)=>{
    return{...prev,[name]:value}
   })
}
const submitchange=(e)=>
{
    e.preventDefault();
    alert(`firstname:${details.firstname} lastname:${details.lastname} age:${details.age}`)
    console.log(details)
}
return(
    <form onSubmit={submitchange}>
    <label>enter first name  < input type="text" name="firstname"  onChange={handlechange}/></label><br/>
    <label>enter last name  < input type="text" name="lastname"  onChange={handlechange}/></label> <br/>
    <label>enter age  < input type="number" name="age"  onChange={handlechange}/></label><br/>
    <input type="submit"/><br/>
    {details.firstname}<br/>
    {details.lastname}<br/>
    {details.age}<br/>
    </form>
   
)










}
export default Sampleform;