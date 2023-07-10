import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 12000
    }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter(i: number): void {
    this.characters.splice(i, 1);
  } */

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
