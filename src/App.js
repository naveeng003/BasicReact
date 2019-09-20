import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EmployeeForm from './pages/EmployeeForm';
import { LikesCounter } from 'pages';

function App() {
  return (
    <Router>
      <div>
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <Route exact path="/" component={EmployeeForm} />
            <Route exact path="/employee/:employeeId" component={EmployeeForm} />
            <Route exact path="/likes" component={LikesCounter} />
          </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
