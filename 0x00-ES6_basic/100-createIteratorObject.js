export default function createIteratorObject(report) {
  let employees = [];

  for (const department in report) {
    for (const employee of report[department]) {
      employees.push(employee);
    }
  }

  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
