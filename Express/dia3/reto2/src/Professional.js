class Professional {
  constructor(
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarsNumber,
    profession
  ) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
  }
  printAll() {
    console.group(Professional);
    console.log("Name - " + this.name);
    console.log("Age - " + this.age);
    console.log("Weight - " + this.weight);
    console.log("Height - " + this.height);
    console.log("Is Retired? - " + this.isRetired);
    console.log("Nationality - " + this.nationality);
    console.log("Oscars Numbers - " + this.oscarsNumber);
    console.log("Profession - " + this.profession);
    console.groupEnd();
  }
}

module.exports = { Professional };
