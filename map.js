function Mapping() {  

	let arr3 =[1,2,3,4,5]
		       
   

 
   function checkobject(arr3){
    const result=Array.isArray(arr3);
    if (result){
        <h2>React Map Example 1</h2>  
        {arr3.map((arrItems3)=>{
            return (
                <>
                    <li> {arrItems3}</li> 
                </>
            )
        })}
        /*console.log(`[${arr3}] is an array`)*/
    }
			
      
    else{
console.log(`${arr3} is not an array`);
    }
   }
   return (  
    <div>  
        	
        <h2>React Map Examples</h2>  
        {arr3.map((arrItems3)=>{
            return (
                <>
                    <li> {arrItems3}</li> 
                </>
            )
        })}
    </div>  
); 
}
	


export default  Mapping
