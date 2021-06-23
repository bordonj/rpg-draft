import {CharacterClass} from '../src/js/rpg.js'

describe('CharacterClass', () => {

  test('should correctly create a character class object with different stats properties', () => {
    const character1 = new CharacterClass(100, 100, 10, 10, 10);
    expect(character1.hp).toEqual(100);
    expect(character1.mp).toEqual(100);
    expect(character1.str).toEqual(10);
    expect(character1.spd).toEqual(10);
    expect(character1.def).toEqual(10);
  });
});