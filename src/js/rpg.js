export class CharacterClasses {
  constructor() {
    this.mage = { //184
      type: "mage",
      lvl: 1,
      inv: [],
      hp: 50,
      mp: 100,
      str: 4,
      spd: 4,
      def: 3,
      int: 10,
      stl: 3,
      res: 10
    };
    this.barbarian = { //184
      type: "barbarian",
      lvl: 1,
      inv: [],
      hp: 125,
      mp: 30,
      str: 10,
      spd: 4,
      def: 10,
      int: 0,
      stl: 3,
      res: 2
    };
    this.assassin = { //184
      type: "assassin",
      lvl: 1,
      inv: [],  
      hp: 70,
      mp: 70,
      str: 8,
      spd: 8,
      def: 3,
      int: 10,
      stl: 10,
      res: 5
    };
    this.necromancer = { //184
      type: "necromancer",
      lvl: 1,
      inv: [],  
      hp: 50,
      mp: 100,
      str: 5,
      spd: 5,
      def: 5,
      int: 5,
      stl: 5,
      res: 9
    };
  }
  newChar(chosenClass) {
    this.chosenClass = chosenClass;
    let newChar = this.chosenClass;
    return chosenClass;
  }
  lvlUp() {
    let newChar = this.chosenClass;
    newChar['lvl']++;
    newChar['hp'] += 10;
    newChar['mp'] += 10;
    newChar['str']++;
    newChar['spd']++;
    newChar['def']++;
    newChar['int']++;
    newChar['stl']++;
    newChar['res']++;
    console.log('lvl newChar', newChar)
  }
  addItem(item) {
  }
}
