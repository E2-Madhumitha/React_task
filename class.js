import { Component } from "react";
class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={color:"red"};
    }
    changecolor=()=>{
        this.setState({color:"green"});
    }
    render(){
       return (
        <div>
       <h2>class component color is {this.state.color}</h2>
       <button type="button" onClick={this.changecolor}>btn</button>
       </div>
       );
    }
}


function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    const brandname="RENAULT";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={brandname} />
      </>
    );
  }

/*function Garage(){
const numbers = [1,2,3,4,5];

const updatedNums = numbers.map((number)=>{
	return <li>{number+2}</li>;
});

return <ul>
  {updatedNums}
</ul>
	

}*/
function Navmenu(props)
{
 
  
    // const myLists = props.myLists;  
    // const listItems = myLists.map((myList) =>  
    //   <li>{myList}</li>  
    // );  
    return (  
      <div>  
            <h2>React Map Example</h2>  
                {/* <ul>{listItems}</ul>   */}
                {console.log("color",props)}
              <ul>
                <li>
                {props.list?.map(d=>d.type)}
                </li>
                </ul>  
      </div>  
    );  
  }  
  
  // const myLists = [1,2,3,4,5];   
  //<Navmenu myLists={myLists} />,  
  // <Navmenu list={cars} />
export {Navmenu,Welcome,Garage}