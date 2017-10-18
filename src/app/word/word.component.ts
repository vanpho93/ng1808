import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    @Input() en;
    @Input() vn;
    @Output() onRemoveWord = new EventEmitter<string>();
    views = 10;
    isMemorized = false;

    showInfo() {
        alert(`Ban dang hoc tu ${this.en}`);
    }

    incrViews() {
        this.views++;
    }

    toggleMemorized() {
        this.isMemorized = !this.isMemorized;
    }

    remove() {
        this.onRemoveWord.emit(this.en);
    }
}
