function NameLists() {  

	let arr1 = [
		"name 1",
		"name 2",
		"name 3"
	]

	let arr2 = [
		{data : "name 1", data1 : "name 2"},
		{data : "name 11", data1 : "name 21"},
		{data : "name 12", data1 : "name 22"},
		{data : "name 13", data1 : "name 23"},
		{data : "name 14", data1 : "name 24"},
	]
	let arr3 = [
		{data : ["name 1","name 2","name 3"], data1 : "name 4"},
		{data : ["name 11","name 12","name 13"], data1 : "name 14"},
		{data : ["name 21","name 22","name 23"], data1 : "name 24"},
		{data : ["name 31","name 32","name 33"], data1 : "name 34"},
		{data : ["name 41","name 42","name 43"], data1 : "name 44"},
		
	]

	/*const arrItems=arr1.map((arrItems)=>
	<li> {arrItems}</li>

	);
	const  arrItems1=arr2.map((arrItems1)=>
	<>
	<li> {arrItems1.data}</li>
	<li> {arrItems1.data1}</li>
	</>
	);

	const  arrItems2=arr3.map((arrItems2)=>
	<>
	<li> {arrItems2.data1}</li>
	arr3.data.map((arrItems3)=>
	<li>{arrItems3}</li>
	);
	</>
	); */
	return (  
		<div>  
			<h2>React Map Example 1</h2>  
			{arr1.map((arrItems)=>(
				<li> {arrItems}</li>
			))}

			<h2>React Map Example 2</h2>  
			{arr2.map((arrItems1)=>(
				<>
					<li> {arrItems1.data}</li>
					<li> {arrItems1.data1}</li>
				</>
			))}
			<h2>React Map Example 3</h2>  
			{arr3.map((arrItems3)=>{
				return (
					<>
						{arrItems3.data.map((arrItems4)=>{
							return(
								<li>{arrItems4}</li>
							)
						})}
						<li> {arrItems3.data1}</li> 
					</>
				)
			})}
		</div>  
	);  
}  

export default NameLists  
