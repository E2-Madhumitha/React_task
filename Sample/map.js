function Mapping() {
  let arr3 = [1, 2, 3, 4, 5];

  function checkobject(arr) {
    const result = Array.isArray(arr);
    if (result) {
      console.log(`[${arr}] is an array`);
    } else {
      console.log(`${arr} is not an array`);
    }
  }
  checkobject(arr3);
  return (
    <div>
      <h2>React Map Examples</h2>
      {arr3.map((arrItems3) => {
        return (
          <>
            <li> {arrItems3}</li>
          </>
        );
      })}
    </div>
  );
}

export default Mapping;
