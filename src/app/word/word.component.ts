import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterStatus } from '../models/filterStatus';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    @Input() en: string;
    @Input() vn: string;
    @Input() isMemorized: boolean;
    @Input() filterStatus: FilterStatus;
    @Output() onRemoveWord = new EventEmitter<string>();
    views = 10;

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

    get showStatus(): boolean {
        if (this.filterStatus === FilterStatus.ShowAll) return true;
        if (this.filterStatus === FilterStatus.ShowMemorized) return this.isMemorized;
        return !this.isMemorized;
    }
}
