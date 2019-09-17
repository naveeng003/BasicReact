import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Basic-1
// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// JSX
// const myelement = <h1>I Love JSX!</h1>;

// ReactDOM.render(myelement, document.getElementById('root'));

// Without JSX
// const myelement = React.createElement('h1', {}, 'I do not use JSX!');

// JSX - support for expressions
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// Multiline html with paranthesis
// const myelement = (
//     <ul>
//         <li>Apples</li>
//         <li>Bananas</li>
//         <li>Cherries</li>
//     </ul>
//     );

// ReactDOM.render(myelement, document.getElementById('root'));

// Basic Class Component
// import TestClassComponent from './TestClassComponent'
// ReactDOM.render(<TestClassComponent />, document.getElementById('root'));

// Basic Functional Component
// import TestFunctionalComponent from './TestFunctionalComponent'
// ReactDOM.render(<TestFunctionalComponent />, document.getElementById('root'));

// Components in Components
/*class ChildComponent extends React.Component {
    render() {
      return <h2>I am a child component</h2>;
    }
  }
  
  class ParentComponent extends React.Component {
    render() {
      return (
        <div>
        <h1>I am in parent component</h1>
        <ChildComponent />
        </div>
      );
    }
  }
  
  ReactDOM.render(<ParentComponent />, document.getElementById('root'));*/

  // state in a class component
  /*class LastActiveUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "John"
      }
    }
    render() {
      return <h2>Last active user : {this.state.name}</h2>;
    }
  }
  
  ReactDOM.render(<LastActiveUser />, document.getElementById('root'));*/

  // props to update state in a class component
  /*class LastActiveUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "John"
      }
    }

    static getDerivedStateFromProps(props, state) {
        return {name: props.name };
    }

    render() {
      return <h2>Last active user : {this.state.name}</h2>;
    }
  }
  
  ReactDOM.render(<LastActiveUser name="William" />, document.getElementById('root'));*/

  // Lifecycle example
  /*class RandomNumberGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          randomNumnber : 0
      }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            2000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    
    tick() {
        var randomNum = Math.floor(Math.random() * 100) + 1;
        console.log("testing", randomNum);
        this.setState({
            randomNumber: randomNum
        });
    }

    render() {
      return <h2>Last random number : { this.state.randomNumber }</h2>;
    }
  }
  
  ReactDOM.render(<RandomNumberGenerator />, document.getElementById('root'));*/