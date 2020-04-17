export class Planet {
  constructor() {
    this.yearRatio = 1;
  }

  fromEarthYears(userAgeInPlanetYears) {
    return Math.round(userAgeInPlanetYears/ this.yearRatio);
  }

  toEarthYears(userAgeInPlanetYears) {
    return Math.round(userAgeInPlanetYears * this.yearRatio)
  }

  lifeGenerator(userAgeInPlanetYears) {
    let earthYears = this.toEarthYears(userAgeInPlanetYears)
    if (earthYears <= 30) {
      earthYears = 80 - earthYears;
    } else if (earthYears <= 60) {
      earthYears =  75 - earthYears;
    } else {
      earthYears = 70 - earthYears;
    }
    return this.fromEarthYears(earthYears)
  }
};

export class Mercury extends Planet {
  constructor() {
    super()
    this.yearRatio = .24;
  }
}

export class Venus extends Planet {
  constructor() {
    super()
    this.yearRatio = .62;
  }
}

export class Mars extends Planet {
  constructor() {
    super()
    this.yearRatio = 1.88;
  }
}

export class Jupiter extends Planet {
}