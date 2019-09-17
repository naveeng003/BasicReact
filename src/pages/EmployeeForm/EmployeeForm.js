import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmployeeForm.module.css';

import TextInput from '../../components/TextInput'
import { SectionHeader } from 'components';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      employeeId: '',
      designation: '',
      salary: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state[name]);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (<div className="loginOut">
      <SectionHeader title="Add Employee" />
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6 ">
            <TextInput
              labelFor="employeeName"
              label="employeeName"
              placeholder="Employee Name"
              className="form-control"
              type="text"
              name="employeeName"
              id="employeeName"
              value={this.state.employeeName}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <TextInput
              labelFor="employeeId"
              label="employeeId"
              placeholder="Employee Id"
              className="form-control"
              type="text"
              name="employeeId"
              id="employeeId"
              value={this.state.employeeId}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextInput
              labelFor="designation"
              label="designation"
              placeholder="Designation"
              className="form-control"
              type="text"
              name="designation"
              id="designation"
              value={this.state.designation}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              labelFor="salary"
              label="salary"
              placeholder="Salary"
              className="form-control"
              type="text"
              name="salary"
              id="salary"
              value={this.state.salary}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>);
  }
};

export default EmployeeForm;
