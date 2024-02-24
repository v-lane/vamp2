class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisDistance = this.numberOfVampiresFromOriginal;
    const thatDistance = vampire.numberOfVampiresFromOriginal;

    return thisDistance < thatDistance;
  } 

  // Returns the closest common ancestor of two vampires.
  closestCommonAncestor(vampire) {

    let ancestor1 = this;
    let ancestor2 = vampire;
    while(ancestor1 !== ancestor2) {
      ancestor2 = ancestor2.creator;

      if (ancestor2 === null) {
        ancestor2 = vampire;
        ancestor1 = ancestor1.creator;
      }
    }

    return ancestor1;
  }


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

    if (this.name === name) {
      return this;
    }

    let vampire;
    for (let offspring of this.offspring) {
      vampire = offspring.vampireWithName(name);
      if (vampire != null) {
        return vampire;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;

    total += this.numberOfOffspring;

    for (let offspring of this.offspring) {
      total += offspring.totalDescendents;
    }

    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let allMillennials = [];
    
    console.log( "Year Converted: " +  this.yearConverted);
    if (this.yearConverted > 1980) {
      allMillennials.push(this);
    }
    
    for (let offspring of this.offspring) {
      let childMillennials = offspring.allMillennialVampires
      if (childMillennials != null) {
        allMillennials = allMillennials.concat(childMillennials)
      }
    }
    
    return allMillennials;
  }
}

module.exports = Vampire;