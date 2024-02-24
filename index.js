class Vampire {
  constructor(name) {
    this.name = name;
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

  // returns the more senior vampire out of two vampires. (Who is closer to the original vampire)
  moreSeniorVampire(vampire) {

  } 

  // Returns the closest common ancestor of two vampires.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;