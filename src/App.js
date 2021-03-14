import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    
    this.maxId = 1

    this.state = {
      
      new_item_title: '',

      items: []
    };
  }

  onDeleteItem(id){
    const items_copy = [...this.state.items]
    const updated_copy = items_copy.filter( item => item.id !== id )
    this.setState({ items: updated_copy })
  }

  onNewItemTitleChange(value){
    this.setState({ new_item_title: value })
  }

  onAddItem(){
    const items_copy = [...this.state.items]
    const newItem = {
      id: this.maxId + 1,
      title: this.state.new_item_title
    }
    this.maxId++

    items_copy.push( newItem )
    this.setState({ items: items_copy, new_item_title: '' })

  }

  render() {
    return (
      <div>
        <input onChange={( e ) => this.onNewItemTitleChange( e.target.value )}
        value = { this.state.new_item_title } type="text" size="25" placeholder="Type element here..."/> <button onClick= {() => this.onAddItem()} >ADD</button>
        
        
        <ul>{this.state.items.map( elem => <li> {elem.title} <button class="deleteBTN" onClick= { () => this.onDeleteItem(elem.id)  } ><b>X</b></button> </li>)}</ul>
      </div>
    );
  }
}

export default App;
