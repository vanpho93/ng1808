import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'hello';
    vn = 'xin chào';

    showInfo() {
        alert(`Ban dang hoc tu ${this.en}`);
    }
}
