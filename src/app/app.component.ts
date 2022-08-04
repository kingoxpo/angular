import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-component';

  click = () => {
    this.title = '자식으로부터 실행됨'
  }

  myEvent() {
    this.title = '자식이 발생한 이벤트에 의해 실행됨'
  }
}
