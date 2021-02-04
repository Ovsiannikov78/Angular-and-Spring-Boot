import {Component, OnInit} from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Jack', 'Gibson', 'j.gibson@gmail.com', 50000),
    new SalesPerson('Mia', 'Jong', 'mia.jong@gmail.com', 40000),
    new SalesPerson('John', 'Grey', 'j.grey@aol.com', 90000),
    new SalesPerson('Ivan', 'Petrov', 'petrov@mail.de', 60000),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
