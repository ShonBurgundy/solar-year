import { Mercury } from './../src/solar-year';

describe('Mercury and its prototypes', () => {
  
  test ('should check if user age is divided by .24 & round to nearest integer', () => {
    let mercury = new Mercury;
    expect(mercury.ageGenerator(31)).toEqual(129)
  });

   test ('should return remaining years of users life expectancy according to age', () => {
    let mercury = new Mercury;
    expect(mercury.lifeGenerator(25)).toEqual(55)  
  });
});