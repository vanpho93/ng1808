import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent {
  @Output() onAddNewWord = new EventEmitter<any>();
  txtEn = '';
  txtVn = '';
  addWord() {
    const wordObj = { en: this.txtEn, vn: this.txtVn };
    this.onAddNewWord.emit(wordObj);
    this.txtEn = '';
    this.txtVn = '';
  }
}
