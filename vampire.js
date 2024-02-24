class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

  } 

  // Returns the closest common ancestor of two vampires.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;