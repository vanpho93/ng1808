import { Component } from '@angular/core';
import { Word } from '../models/word';
import { FilterStatus } from '../models/filterStatus';

@Component({
  selector: 'app-list',
  template: `
    <br />
    <button class="btn btn-primary">V</button>
    <button class="btn btn-primary">X</button>
    <button class="btn btn-primary">A</button>
    <div style="padding: 5px">
    <app-word-form (onAddNewWord)="onAddNewWord($event)"></app-word-form>
    <app-word
      *ngFor="let word of words"
      [en]="word.en"
      [vn]="word.vn"
      [isMemorized]="word.isMemorized"
      [filterStatus]="filterStatus"
      (onRemoveWord)="removeByEn($event)"
    >
    </app-word>
    </div>
  `
})

export class ListComponent {
  filterStatus = FilterStatus.ShowAll;
  words: Word[] = [
    { en: 'hello', vn: 'xin chao', isMemorized: true },
    { en: 'space', vn: 'khoang cach', isMemorized: true },
    { en: 'line', vn: 'dong', isMemorized: false }
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
