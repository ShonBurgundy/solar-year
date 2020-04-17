import { Mercury } from './../src/solar-year';

describe('Mercury and its prototypes', () => {

  test ('should check if user age is divided by .24 & round to nearest integer', () => {
    let userAge = 31;
    userAge = Math.round(userAge / .24)
    expect(userAge).toEqual(5000)  
  });
  
  test ('should check if user age is divided by .24 & round to nearest integer', () => {
    let userAge = 31;
    userAge = Math.round(userAge /= .24)
    expect(userAge).toEqual(129)  
  });

  //  test ('should round user age to nearest integer', () => {
  //   let userAge = 31;
  //   Math.round(userAge /= .24)
  // expect(userAge).toEqual()  
  // });
});