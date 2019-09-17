import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EmployeeForm from './pages/EmployeeForm';

function App() {
  return (
    <Router>
      <div>
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <Route exact path="/" component={EmployeeForm} />
          </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
