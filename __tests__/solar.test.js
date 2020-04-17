import { Mercury } from './../src/solar-year';

describe('Mercury and its prototypes', () => {

  test ('should check if user age is divided by .24', () => {
    let userAge = 30;
    userAge /= .24
  expect(userAge).toEqual(5000)  
  });
  
  test ('should check if user age is divided by .24', () => {
    let userAge = 30;
    userAge /= .24
  expect(userAge).toEqual(125)  
  });
});