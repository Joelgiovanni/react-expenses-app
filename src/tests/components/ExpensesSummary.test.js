import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenesSummary';

test('Should render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={200}/>);
  expect(wrapper).toMatchSnapshot();
})

test('Should render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={4000000000}/>);
  expect(wrapper).toMatchSnapshot();
})