import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {

  @Input() tableTitles: any = [];
  @Input() data: any;
  public sortArray: number = 1;
  public itemsPerPage: number = 5;
  public currentPage: number = 1;
  @Output() pageNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortingByName(event) {
    const self = this;
    let target = event.currentTarget,
    classList = target.classList;
    if (classList.contains('glyphicon-chevron-up')) {
      classList.remove('glyphicon-chevron-up');
      classList.add('glyphicon-chevron-down');
      self.sortArray = -1;
    } else {
      classList.add('glyphicon-chevron-up');
      classList.remove('glyphicon-chevron-down');
      self.sortArray = 1;
    }
    self.doSorting('fullName');
  }

  doSorting(colName:any) {
    const self = this;
    self.data.sort((first, second)=>{
      first = first[colName].toLowerCase();
      second = second[colName].toLowerCase();
      return first.localeCompare(second) * self.sortArray;
    });
  }

  changePage(page) {
    const self = this;
    self.pageNumber.emit(page);
  }

}
