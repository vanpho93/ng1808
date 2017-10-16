import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <img [src]="imageSrc" />
    <div style="padding: 5px">
      <div *ngFor="let word of words">
        <h3>{{ word.en }}</h3>
        <p>{{ word.vn }}</p>
      </div>
    </div>
  `
})
export class ListComponent {
  imageSrc = 'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
  words = [
    { en: 'hello', vn: 'xin chao' },
    { en: 'space', vn: 'khoang cach' },
    { en: 'line', vn: 'dong' },
  ];
}
