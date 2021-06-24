// example commits for the following:
  // Good Fail: Add first test and Example Class.
  // Passing: Add constructor logic, pass first test.
import {CharacterClasses} from '../src/js/rpg.js'

describe('CharacterClasses', () => {

  test('should correctly create a character class object with different stats properties', () => {
    const characterClasses = new CharacterClasses();
    expect(characterClasses).toEqual({"assassin": {"type": "assassin", "lvl": 1, "inv":[], 'cns': 0, "def": 3, "hp": 70, "int": 10, "mp": 70, "res": 5, "spd": 8, "stl": 10, "str": 8}, "barbarian": {"type": "barbarian", "lvl": 1, "inv":[], 'cns': 0, "def": 10, "hp": 125, "int": 0, "mp": 30, "res": 2, "spd": 4, "stl": 3, "str": 10}, "mage": {"type": "mage", "lvl": 1, "inv":[], 'cns': 0, "def": 3, "hp": 50, "int": 10, "mp": 100, "res": 10, "spd": 4, "stl": 3, "str": 4}, "necromancer": {"type": "necromancer", "lvl": 1, "inv":[], 'cns': 0, "def": 5, "hp": 50, "int": 5, "mp": 100, "res": 9, "spd": 5, "stl": 5, "str": 5}, 'chosenClass': new Map, 'totalChars': 0 });
  });
  test('should create a player object', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    // console.log(characterClasses);
    // console.log(newChar);
    expect(newChar).toEqual(characterClasses.mage);
  });
  test('should increase player lvl and respective stats', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    characterClasses.lvlUp(1);
    expect(newChar.lvl).toEqual(2);
  });
  test('should create add inventory method', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    characterClasses.addItem(1, "staff");
    expect(newChar.inv).toEqual(["staff"]);
  })
  test('should create drop method', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    characterClasses.addItem(1, "staff");
    let invOgLength = newChar.inv.length;
    characterClasses.dropItem(1, 'staff');
    expect(newChar.inv.length).toEqual(invOgLength-1);
  })
  test('should create buy method that rejects your item if not enough coins', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    // characterClasses.buyItem(1, 'dagger');
    expect(characterClasses.buyItem(1, 'dagger')).toEqual('not enough coins');
  })
  test('should create buy method that allows item retrieval and spending if enough coins', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    newChar.cns += 20;
    // console.log('buy item', newChar)
    // characterClasses.buyItem(1, 'dagger');
    expect(characterClasses.buyItem(1, 'dagger')).toEqual('item bought');
  })
  test('should create sell method that sells item and gains coins if item in inventory', () => {
    const characterClasses = new CharacterClasses();
    let newChar = characterClasses.newChar(characterClasses.mage);
    characterClasses.addItem(1, "staff");
    // characterClasses.sellItem(1, 'staff');
    // console.log('test charClass', characterClasses.sellItem());
    expect(characterClasses.sellItem(1, 'staff')).toEqual('sold item');
  })
});


