import { Planet, Mercury, Venus } from './../src/solar-year';


describe('Mercury and its prototypes', () => {
  
  test ('should check if user age is divided by .24 & round to nearest integer', () => {
    expect(new Mercury().ageGenerator(31)).toEqual(129)
  });

   test ('should return remaining years of users life expectancy according to age', () => {
    expect(new Mercury().lifeGenerator(30)).toEqual(45)  
  });

  test ('should return remaining years of users life expectancy according to age', () => {
    expect(new Venus().lifeGenerator(30)).toEqual(55)  
  });
});