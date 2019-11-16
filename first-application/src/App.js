import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      projects: [
        { 
          name: 'Project 1',
          id: '1'
        },
        {
          name: 'Project 2',
          id: '2'
        },
        {
          name: 'Project 3',
          id: '3'
        }
      ]
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
        {
          this.state.projects.map(project => (
            <h1 key={project.id}> {project.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
