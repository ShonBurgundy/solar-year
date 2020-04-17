export class Mercury {
  constructor(userAge, lifeExpect) {
    this.userAge = userAge;
    this.lifeExpect = lifeExpect;
  }

  ageGenerator(userAge) {
    return Math.round(userAge/ .24)
  }

  lifeGenerator() {
    //if (userAge < 30) {
    //return userAge % 80
    //}
  }
};