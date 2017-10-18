import { Component } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html'
})
export class MyInputComponent {
  en = '';

  onShow() {
    alert(this.en);
    this.en = '';
  }
}
