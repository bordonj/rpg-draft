// example commits for the following:
  // Good Fail: Add first test and Example Class.
  // Passing: Add constructor logic, pass first test.
import {CharacterClasses} from '../src/js/rpg.js'

describe('CharacterClasses', () => {

  test('should correctly create a character class object with different stats properties', () => {
    const characterClasses = new CharacterClasses();
    expect(characterClasses).toEqual({"assassin": {"def": 3, "hp": 70, "int": 10, "mp": 70, "res": 5, "spd": 8, "stl": 10, "str": 8}, "barbarian": {"def": 10, "hp": 125, "int": 0, "mp": 30, "res": 2, "spd": 4, "stl": 3, "str": 10}, "mage": {"def": 3, "hp": 50, "int": 10, "mp": 100, "res": 10, "spd": 4, "stl": 3, "str": 4}, "necromancer": {"def": 5, "hp": 50, "int": 5, "mp": 100, "res": 9, "spd": 5, "stl": 5, "str": 5}});
  });
  // test('add respectice stats to the specific character class chosen', () => {
  //   const character1 = new CharacterClass();
  //   character1.addCharClass(mage);
  //   expect(character1.hp).toEqual(50);
  //   expect(character1.mp).toEqual(100);
  //   expect(character1.str).toEqual(4);
  //   expect(character1.spd).toEqual(3);
  //   expect(character1.def).toEqual(3);
  // })
});


