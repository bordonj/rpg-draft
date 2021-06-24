export class CharacterClasses {
  constructor() {
    this.mage = { //184
      type: "mage",
      lvl: 1,
      inv: [],
      cns: 0,
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
      cns: 0,
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
      cns: 0,
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
      cns: 0,
      hp: 50,
      mp: 100,
      str: 5,
      spd: 5,
      def: 5,
      int: 5,
      stl: 5,
      res: 9
    };
    this.chosenClass = new Map();
    this.totalChars = 0;
  }
  newChar(chosenClass) {
    // this.chosenClass[chosenClass.type] = chosenClass;
    this.totalChars++;
    this.chosenClass.set(this.totalChars, chosenClass)
    // this.newPlayer['chosenClass'] = chosenClass;
    // this.newPlayer = chosenClass;
    // console.log('this object', this);
    return this.chosenClass.get(this.totalChars);
  }
  lvlUp(charNum) {
    let newChar = this.chosenClass.get(charNum);
    newChar['lvl']++;
    newChar['hp'] += 10;
    newChar['mp'] += 10;
    newChar['str']++;
    newChar['spd']++;
    newChar['def']++;
    newChar['int']++;
    newChar['stl']++;
    newChar['res']++;
  }
  addItem(charNum, item) {
    let newChar = this.chosenClass.get(charNum);
    newChar['inv'].push(item);
  }
  dropItem(charNum, item) {
    let newChar = this.chosenClass.get(charNum);
    for (let i = 0; i < newChar['inv'].length; i++) {
      if (newChar['inv'][i] === item) {
        newChar['inv'].splice(i, 1);
      }
    }
  }
  buyItem(charNum, item) {
    let newChar = this.chosenClass.get(charNum);
    // console.log('rpg.js neChar', newChar)
    if (newChar.cns >= 10 ) {
      newChar.cns -= 10; //needed to mutate coins, not just make it 10
      newChar['inv'].push(item);
      return 'item bought';
    } else {
      return 'not enough coins';
    }
  }
  sellItem(charNum, item) {
    let newChar = this.chosenClass.get(charNum);
    console.log('newChar inv', newChar.inv);
    // for (let i = 0; i <= newChar.inv.length; i++) {
    //   if (newChar.inv[i] === item) {
    //     newChar.inv.splice(i, 1);
    //     newChar.cns += 10;
    //     return 'sold item'; //why does the return statement not work?!
    //   } else {
    //     return 'item not in inventory'; //why does the return statement not work?!
    //   }
    // }

    if (newChar.inv.includes(item)) {
      console.log('newChar inv', newChar.inv);
      for (let i = 0; i < newChar.inv.length; i++) {
        console.log('newChar inv[i]', newChar.inv[i]);
        if (newChar.inv[i] === item) {
          newChar.inv.splice(i, 1);
          newChar.cns += 10;
          console.log('newChar sold item', newChar);
        } 
      }
      return 'sold item';
    } else {
      return 'item not in inventory';
    }

  }

}
