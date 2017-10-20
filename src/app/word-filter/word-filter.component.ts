import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterStatus } from '../models/filterStatus';
@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})

export class WordFilterComponent {
  @Output() onChangeStatus = new EventEmitter<FilterStatus>();

  changeStatus(filterStatus: FilterStatus) {
    this.onChangeStatus.emit(filterStatus);
  }
}
