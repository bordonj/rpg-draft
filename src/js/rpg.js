export class CharacterClasses {
  constructor() {
    this.mage = { //184
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
      hp: 50,
      mp: 100,
      str: 5,
      spd: 5,
      def: 5,
      int: 5,
      stl: 5,
      res: 9
    };
    return 'CharacterClasses made';
  }
}

// export class  {
//   constructor(wizard, warrior, etc) {
//     player = new Player (Wizard, 100, 100, 10, 10, 10)
//   }
// }