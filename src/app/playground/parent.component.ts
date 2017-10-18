import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
      <div style="padding: 5px">
          <h3>Value = {{ value }}</h3>
          <button class="btn btn-primary">Add in parent</button>
          <br><br>
          <app-child></app-child>
      </div>
  `
})
export class ParentComponent {
    value = 100;
}
