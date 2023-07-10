import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output() OnDelete = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      id: '1',
      name: 'Bardock',
      power: 1000
    }
  ];

  onDeleteCharacter(id?: string): void {
  if (!id) return console.error('No se ha recibido un id');
  this.OnDelete.emit(id);

  }


}
