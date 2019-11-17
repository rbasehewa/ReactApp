import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      projects: []
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({projects: users}));
  }


  render(){
    return(
      <div className='App'>
        <CardList projects={this.state.projects}>
        
        </CardList>
      </div>
    );
  }
}

export default App;
