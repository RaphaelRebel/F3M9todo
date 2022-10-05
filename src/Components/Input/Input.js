import "./Input.css"
import React from "react"

class Input extends React.Component {
    

        constructor(props){
            super(props);
            this.state = {inputValue: ""}
        }

        update = (event) => {
            this.setState({inputValue: event.target.value}
        )}

        enter = (event) => {
           if( event.keyCode === 13){
            console.log(event)
            console.log(this.props)
            this.props.inputPressedEnter(this.state.inputValue)
        }
        }


        //Als we met document.element of document.query in react dan is de component uncontrolled
        render(){

        return(
            <input onKeyUp={this.enter} value={this.state.inputValue}  onChange={this.update} className="input" type="text" placeholder="Boodschappen" />
        );
    }
}

export default Input