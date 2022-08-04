import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample4',
  template: `
    <p>
      {{ message }}
    </p>
    <button (click)="click()">클릭</button>
    <input type="text" [(ngModel)]="message"/>
  `,
  styles: []
})
export class Sample4Component implements OnInit {
  message = 'sample4 works!'

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.message = 'changed!'
    }, 2000);
  }
  
  click() {
    this.message = 'clicked'
  }

}
