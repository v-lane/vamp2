const chai = require('chai');
const expect = chai.expect;

const Vampire = require('./vampire.js');

describe("vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root", 0);
  });

  describe("search for vampire with name", () => {

    let offspring1, offspring2, offspring3, offspring4, offspring5;
    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring4.addOffspring(offspring5);
    });
    
    it("should return the vampire with that name", () => {
      expect(rootVampire.vampireWithName("")).to.equal(null);
      expect(rootVampire.vampireWithName(rootVampire.name).name).to.equal(rootVampire.name);
      expect(rootVampire.vampireWithName(offspring1.name).name).to.equal(offspring1.name);
      expect(rootVampire.vampireWithName(offspring2.name).name).to.equal(offspring2.name);
      expect(rootVampire.vampireWithName(offspring5.name).name).to.equal(offspring5.name);
      expect(offspring3.vampireWithName(offspring5.name).name).to.equal(offspring5.name);
      expect(offspring2.vampireWithName(offspring5.name)).to.equal(null);
    });

  });

  describe("total descendants", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should give the total descendents", () => {
      expect(rootVampire.totalDescendents).to.equal(8);
      expect(offspring1.totalDescendents).to.equal(0);
      expect(offspring2.totalDescendents).to.equal(1);
      expect(offspring3.totalDescendents).to.equal(4);
    });
  });

  describe("allMillennialVampires", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a", 1000);
      offspring2 = new Vampire("b", 900);
      offspring3 = new Vampire("c", 1400);
      offspring4 = new Vampire("d", 1890);
      offspring5 = new Vampire("e", 1990);
      offspring6 = new Vampire("f", 2000);
      offspring7 = new Vampire("g", 2010);
      offspring8 = new Vampire("h", 2017);

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should return array of all vampires converted after 1980", () => {
      expect(rootVampire.allMillennialVampires.length).to.equal(4); //[offspring5, offspring6, offspring7, offspring8]
    });
  });

});