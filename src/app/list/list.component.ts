import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <img [src]="imageSrc" />
    <img src="assets/a.png" />
    <div style="padding: 5px">
    <div style="width: 300px">
      <input
        class="form-control"
        placeholder="English word"
        [(ngModel)]="txtEn"
      >
      <br>
      <input
        class="form-control"
        placeholder="Vietnamese word"
        [(ngModel)]="txtVn"
      >
      <br>
      <button class="btn btn-success" (click)="add()">Show</button>
    </div>
    <div *ngFor="let word of words">
      <h3>{{ word.en }}</h3>
      <p>{{ word.vn }}</p>
      <button class="btn btn-danger" (click)="removeByEn(word.en)">
        Remove
      </button>
    </div>
    </div>
  `
})
export class ListComponent {
  txtEn = '';
  txtVn = '';
  imageSrc = 'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
  words = [
    { en: 'hello', vn: 'xin chao' },
    { en: 'space', vn: 'khoang cach' },
    { en: 'line', vn: 'dong' },
  ];
  removeByEn(en) {
    const index = this.words.findIndex(word => word.en === en);
    this.words.splice(index, 1);
  }

  add() {
    this.words.push({
      en: this.txtEn,
      vn: this.txtVn
    });
    this.txtEn = '';
    this.txtVn = '';
  }
}

/*

<app-word
  *ngFor="let word of words"
  [en]="word.en"
  [vn]="word.vn">
</app-word>

*/
