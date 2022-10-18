import {useState} from 'react'
function Display(){
    const[datas,setdatas]=useState({
        name:"",
    });
    const [form, setForm] = useState({
        name: '',
        
      });
    const [submit, submitted] = useState(false);

    const handleChange=(e)=>
    {
    setdatas((prev)=>{
        return{...prev,[e.target.name]:e.target.value}
    })
    } 
    const handleSubmit=(e)=>{
    e.preventDefault();
    setForm({
        name: datas.name,
       
      });
      submitted(true)
   } 
                                                                                                                                                                                                                                                          
    return(
        <div>
    <form onSubmit={handleSubmit}>
        <div>
        <label>enter your name :
        <input type='text' name="name" onChange={handleChange}/>
        </label>
        <input type='submit'/>
        </div>
    </form>
    <p>{submit?form.name:null}</p>
    </div>
    )

}

export default Display