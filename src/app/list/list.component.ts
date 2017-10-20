import { Component } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'app-list',
  template: `
    <img [src]="imageSrc" />
    <img src="assets/a.png" />
    <div style="padding: 5px">
    <app-word-form (onAddNewWord)="onAddNewWord($event)"></app-word-form>
    <app-word
      *ngFor="let word of words"
      [en]="word.en"
      [vn]="word.vn"
      (onRemoveWord)="removeByEn($event)"
    >
    </app-word>
    </div>
  `
})
export class ListComponent {
  txtEn = '';
  txtVn = '';
  imageSrc = 'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
  words: Word[] = [
    { en: 'hello', vn: 'xin chao' },
    { en: 'space', vn: 'khoang cach' },
    { en: 'line', vn: 'dong' },
  ];
  removeByEn(en) {
    console.log(en);
    const index = this.words.findIndex(word => word.en === en);
    this.words.splice(index, 1);
  }

  onAddNewWord(wordObj: Word) {
    const { vn, en } = wordObj;
    this.words.push({ en, vn });
  }
}
