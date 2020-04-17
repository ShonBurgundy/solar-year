import { Planet, Mercury, Venus } from './../src/solar-year';

//Planet
describe('Planet and its prototypes', () => {

  test ('should check if user age is divided by 1 & round to nearest integer', () => {
    expect(new Planet().fromEarthYears(31)).toEqual(31)
  });

   test ('should return remaining years of users life expectancy according to age', () => {
    expect(new Planet().lifeGenerator(30)).toEqual(50)  
  });

  test ('should check if user age is multiplied by 1 & round to nearest integer', () => {
    expect(new Planet().toEarthYears(31)).toEqual(31)
  });
});

//Mercury
describe('Mercury and its prototypes', () => {
  
  test ('should check if user age is divided by .24 & round to nearest integer', () => {
    expect(new Mercury().fromEarthYears(31)).toEqual(129)
  });

   test ('should return remaining years of users life expectancy according to age', () => {
    expect(new Mercury().lifeGenerator(30)).toEqual(304)  
  });

  test ('should check if user age is multiplied by .24 & round to nearest integer', () => {
    expect(new Mercury().toEarthYears(129)).toEqual(129)
  });
});

//Venus
  describe('Venus and its prototypes', () => {

  test ('should return remaining years of users life expectancy according to age', () => {
    expect(new Venus().lifeGenerator(60)).toEqual(61)  
  });

  test ('should check if user age is divided by .62 & round to nearest integer', () => {
    expect(new Venus().fromEarthYears(31)).toEqual(129)
  });

  test ('should check if user age is multiplied by .62 & round to nearest integer', () => {
    expect(new Venus().toEarthYears(31)).toEqual(19)
  });
});

