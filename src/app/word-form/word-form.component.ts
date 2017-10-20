import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})

export class WordFormComponent {
  @Output() onAddNewWord = new EventEmitter<Word>();
  txtEn = '';
  txtVn = '';
  addWord() {
    const wordObj = { en: this.txtEn, vn: this.txtVn };
    this.onAddNewWord.emit(wordObj);
    this.txtEn = '';
    this.txtVn = '';
  }
}
