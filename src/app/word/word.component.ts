import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    @Input() en;
    @Input() vn;
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
}
