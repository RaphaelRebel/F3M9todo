import React from "react"
import "./Todo.css"
import Item from "../Item/Item"
import Input from "../Input/Input"
import tasksObject from "../../data/tasks"


class Todo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tasks: [],
        }

        
    }

    //componentDidMount runt na het aanmaken en tekenen van een component
    componentDidMount(){
        this.setState({
            tasks: tasksObject.tasks,
        })
    }
    
    //componentDidUpdate runt na het updaten van de state
    componentDidUpdate(){
        
        
    }

    update = () => {
        let tempArray = this.state.tasks;
        let combinedArray = tempArray.concat([
            {
                
                name: "Vanuit update",
                done: false,
                id: 10
            
        }
        ]);

        
        this.setState({
            tasks: combinedArray,
        })
    }

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [{
            name: inputFromInputComponent,
            done: false,
            id: 100,
        }]

       let mergedArray = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        })
    }



// listItems = this.state.tasks.map(task =>{
//     return <Item key={task.id} name={task.name} done={task.done}/>
    
//    });


render(){
    let items = this.state.tasks.map(task => {
        return <Item done={task.done} name={task.name} key={task.id}></Item>
    });

    return(

        <>
        <article  className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">Things to do</h1>
            </header>
            <ul className="todo__list">
               
                {items}
            </ul>
            <Input inputPressedEnter={this.inputPressedEnter}/>
        </article>
        </>
    )}
}

export default Todo