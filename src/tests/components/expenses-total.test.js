import selectExpensesTotal  from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should return 0 if no expenses", () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test("should correectly add up a single expense", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("Should correctly add up all of the results",  () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});