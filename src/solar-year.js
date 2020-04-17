export class Planet {
  constructor(lifeExpect) {
    this.lifeExpect = lifeExpect;
    this.yearRatio = 1;
  }

  ageGenerator(userAge) {
    return Math.round(userAge/ this.yearRatio);
  }

  lifeGenerator(userAge) {
    if (userAge < 30) {
    return 80 - userAge;
    } else if (userAge < 60) {
      return 75 - userAge;
    } else {
      return 70 - userAge;
    }
  }
};

export class Mercury extends Planet {
  constructor(lifeExpect) {
    super(lifeExpect)
    this.yearRatio = .24;
  }
}

export class Venus extends Planet {
  constructor(lifeExpect) {
    super(lifeExpect)
    this.yearRatio = .62;
  }
}
