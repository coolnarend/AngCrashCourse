import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  // Aliasing Input Properties
  @Input ('isFavourite') isSelected: boolean;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}

export interface FavChangedEventArgs {
  newValue: boolean;
}
