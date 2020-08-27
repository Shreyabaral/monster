import React, {Component} from 'react';
import cardList, {CardList} from './components/card-list/card-list-component'
import {SearchBox} from "./components/search/search-component";
import './App.css'

class App extends Component {
     constructor() {
       super();


     this.state={
         monsters:[],
         searchField:""
     }
     };

     componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(response => response.json())
             .then(users =>this.setState({monsters:users}));
             };

     handleChange =(e)=>{
         this.setState({searchField:e.target.value});
}

    render() {
        const {monsters,searchField}=this.state
        const filterMonsters= monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (

        <div className='App'>
            <h1> Monster Rolodex </h1>
            < SearchBox
                placeholder="search monster"
         handleChange={this.handleChange}
                />
           <CardList monsters={filterMonsters}/>


        </div>

        // <div>
        //   <h1> {this.state.string} </h1>
        //     <button onClick={()=>this.setState({string:"i am changed"})}>Change Meh</button>
        // </div>
    );
  }
}

export default App;
