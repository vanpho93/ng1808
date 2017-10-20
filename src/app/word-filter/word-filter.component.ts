import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilterStatus } from '../models/filterStatus';
@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})

export class WordFilterComponent {
  @Output() onChangeStatus = new EventEmitter<FilterStatus>();
  @Input() filterStatus: FilterStatus;

  changeStatus(filterStatus: FilterStatus) {
    this.onChangeStatus.emit(filterStatus);
  }
}
