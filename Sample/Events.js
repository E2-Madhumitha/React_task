//function Events(){
    // return (
    //     <input
    //       onFocus={(e) => {
    //         console.log('Focused on input');
    //       }}
    //       placeholder="onFocus is triggered when you click this input."
    //     />
    //   )
    // return (
    //     <input
    //       onKeyDown={(e) => {
    //         console.log('Triggered because this input lost focus');
    //       }}
    //       placeholder="onBlur is triggered when you click this input and then you click outside of it."
    //     />
    //   )
     // return (
    //     <input
    //       onBlur={(e) => {
    //         console.log('Triggered because this input lost focus');
    //       }}
    //       placeholder="onBlur is triggered when you click this input and then you click outside of it."
    //     />
    //   )
    // }
import { Component } from "react"
    class Events extends Component {
        constructor(props) {
          super(props)
          this.state = {
            message: 'Event Bind'
          }
          this.clickHandler = this.clickHandler.bind(this)
        }
        clickHandler() {
          this.setState({
            message: 'change state'
          })
        }
        render() {
          return (
            <>
            <div>{this.state.message}</div> 
            <button onClick = { this.clickHandler} > Click </button> 
            </>
          )
        }
      }
export default Events