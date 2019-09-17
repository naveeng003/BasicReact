import React from 'react';
import { mount, shallow, render } from 'enzyme';
import EmployeeForm from './EmployeeForm';

describe('Test case for testing EmployeeForm', () => {
  let wrapper;
  it('renders without error', () => {});

  test('employeeName check', () => {
    wrapper = mount(<EmployeeForm />); // mount/render/shallow when applicable
    wrapper.find('input[name="employeeName"]').simulate('change', {
      target: { name: 'employeeName', value: 'testuser' },
    });
    expect(wrapper.state('employeeName')).toEqual('testuser');
  });

  test('employeeId check', () => {
    wrapper = mount(<EmployeeForm />); // mount/render/shallow when applicable
    wrapper.find('input[name="employeeId"]').simulate('change', {
      target: { name: 'employeeId', value: 'E0021' },
    });
    expect(wrapper.state('employeeId')).toEqual('E0021');
  });

  test('designation check', () => {
    wrapper = mount(<EmployeeForm />); // mount/render/shallow when applicable
    wrapper.find('input[name="designation"]').simulate('change', {
      target: { name: 'designation', value: 'Sales' },
    });
    expect(wrapper.state('designation')).toEqual('Sales');
  });

  test('salary check', () => {
    wrapper = mount(<EmployeeForm />); // mount/render/shallow when applicable
    wrapper.find('input[name="salary"]').simulate('change', {
      target: { name: 'salary', value: '100.000' },
    });
    expect(wrapper.state('salary')).toEqual('100.000');
  });

});

