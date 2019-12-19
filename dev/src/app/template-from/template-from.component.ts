import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-from',
  templateUrl: './template-from.component.html',
  styleUrls: ['./template-from.component.scss']
})
export class TemplateFromComponent implements OnInit {

  constructor() { }

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  log(s) {
    console.log(s);
  }

  ngOnInit() {
  }

  submit(f) {
    console.log('-------------------------------');
    console.log(f);
    console.log('-------------------------------');
    console.log(f.value.fName);
    console.log('-------------------------------');
    console.log(f.value.content);
    console.log('-------------------------------');
  }

}
