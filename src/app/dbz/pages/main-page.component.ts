import { Component } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( public dbzService: DbzService) {
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeletedCharacter(id?: string): void {
    if (!id) return console.error('No se ha recibido un id');
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

}
