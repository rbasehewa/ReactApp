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
        <CardList name='Project 1'>
        {
          this.state.projects.map(project => (
            <h1 key={project.id}> {project.name}</h1>
          ))
        }
        </CardList>
      </div>
    );
  }
}

export default App;
