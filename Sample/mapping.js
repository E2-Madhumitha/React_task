/*let arr=["name 41","name 42","name 43"];
let arr="madhu"
function IsnotArray() {
    
    return (`${arr}`);
    
}

function IsArray() {
   
    return (
        <div>
        {arr.map((arrItems3)=>{
            return (
                <>
                    {
                            <li>{arrItems3}</li>
                    }
                </>
            )
        })}
        </div>
    );
}

function Goal() {
    
    const result=Array.isArray(arr);
    return (
        <>
            { result ? <IsArray/> : <IsnotArray/> }
        </>
    );
}*/

function Goal() {
  // let arr=[
  //     {data:["name 41","name 42","name 43"]},
  //     {data:["name 51","name 52","name 53"]}
  // ];
  let arr = [
    { data: ["name 1", "name 2", "name 3"], data1: "name 4" },
    { data: ["name 11", "name 12", "name 13"], data1: "name 14" },
    { data: ["name 21", "name 22", "name 23"], data1: "name 24" },
    { data: ["name 31", "name 32", "name 33"], data1: "name 34" },
    { data: ["name 41", "name 42", "name 43"], data1: "name 44" },
    { data: "name 51", data1: ["name 52", "name 53", "name 54"] },
  ];

  const result = Array.isArray(arr);
  return (
    <>
      {result ? (
        arr.map((arrayItems) => {
          const res = Array.isArray(arrayItems.data);
          const res1 = Array.isArray(arrayItems.data1);
          return (
            <>
              {res ? (
                arrayItems.data.map((arrItems2) => {
                  return <li>{arrItems2}</li>;
                })
              ) : (
                <li>{arrayItems.data}</li>
              )}
              {res1 ? (
                arrayItems.data1.map((arrItems2) => {
                  return <li>{arrItems2}</li>;
                })
              ) : (
                <li>{arrayItems.data1}</li>
              )}
            </>
          );
        })
      ) : (
        <li>{arr}</li>
      )}
    </>
  );
}

export default Goal;
