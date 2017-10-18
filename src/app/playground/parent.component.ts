import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
      <div style="padding: 5px">
          <h3>Value = {{ value }}</h3>
          <button class="btn btn-primary" (click)="change();">
              Add in parent
            </button>
          <br><br>
          <app-child (myClick)="change($event)"></app-child>
      </div>
  `
})
export class ParentComponent {
    value = 100;

    change(isIncr = true) {
        if (isIncr) return this.value++;
        this.value--;
    }
}
