import { Component, OnInit } from '@angular/core';
import { FavChangedEventArgs } from '../favourite/favourite.component';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  post = {
    title: 'Title',
    isFavourite: true
  };
  constructor() { }

  ngOnInit() {
  }
  onFavChange(eventArgs: FavChangedEventArgs) {
    console.log('Fav changed', eventArgs.newValue);
  }

}
